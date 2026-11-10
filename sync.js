// ══════════════════════════════════════════════════════════════
//  sync.js — shared by index.html and peak.html
//  Talks to the Google Apps Script web app (see Code.gs).
// ══════════════════════════════════════════════════════════════

// Paste your deployed Apps Script "Web app" URL between the quotes.
// Leave empty to run the site in read-only mode (SUMMITED array only).
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxsDtz1pYLAqijRLRl6FyqZHBiqkEdYcaiFeJjIvedgZMqoHiZcV953w8VRJx_2cnRW/exec';

const Sync = (() => {
  const CACHE_KEY = 'hp_remote_cache_v1';
  const PASS_KEY  = 'hp_passcode';
  const TEXT_FIELDS = ['date', 'conditions', 'partners', 'notes'];

  const enabled = () => !!APPS_SCRIPT_URL;

  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  const getPasscode = () => lsGet(PASS_KEY) || '';
  const setPasscode = v => lsSet(PASS_KEY, v);

  function cached() {
    try { return JSON.parse(lsGet(CACHE_KEY) || '[]'); } catch (e) { return []; }
  }
  const setCache = list => lsSet(CACHE_KEY, JSON.stringify(list));

  // Baseline (SUMMITED in data.js) + sheet rows, in order. A later row overrides an
  // earlier one field-by-field (blank fields never erase). Every photo is kept in
  // `photos` (oldest → newest); `photo` is the newest, used as the cover.
  // A state only counts as summited if it ends up with a date.
  // Accept YYYY-MM-DD, full ISO timestamps, or M/D/YYYY and return YYYY-MM-DD ('' if unreadable)
  function normDate(v) {
    v = String(v == null ? '' : v).trim();
    let m = v.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
    if (m) return m[1] + '-' + m[2].padStart(2, '0') + '-' + m[3].padStart(2, '0');
    m = v.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);
    if (m) return m[3] + '-' + m[1].padStart(2, '0') + '-' + m[2].padStart(2, '0');
    return '';
  }

  function merge(base, remote) {
    const map = {};
    base.forEach(s => { map[s.state] = { ...s, photos: s.photo ? [s.photo] : [] }; });
    (remote || []).forEach(r => {
      const cur = map[r.state] || { state: r.state, photos: [] };
      TEXT_FIELDS.forEach(f => { const v = f === 'date' ? normDate(r[f]) : r[f]; if (v) cur[f] = v; });
      if (r.photo && !cur.photos.includes(r.photo)) cur.photos.push(r.photo);
      map[r.state] = cur;
    });
    return Object.values(map)
      .map(s => ({ ...s, photo: s.photos[s.photos.length - 1] || '' }))
      .filter(s => s.date);
  }

  async function timedFetch(url, opts, ms) {
    const ctl = new AbortController();
    const t = setTimeout(() => ctl.abort(), ms);
    try { return await fetch(url, { ...opts, signal: ctl.signal }); }
    finally { clearTimeout(t); }
  }

  async function fetchRemote() {
    if (!enabled()) return [];
    const res = await timedFetch(APPS_SCRIPT_URL, { cache: 'no-store' }, 20000);
    const data = await res.json();
    if (!data.ok) throw new Error(data.error || 'Load failed');
    lsSet(CACHE_KEY, JSON.stringify(data.summits));
    return data.summits;
  }

  // text/plain keeps this a "simple" request so the browser skips the CORS preflight
  async function post(payload) {
    if (!enabled()) throw new Error('Saving isn’t connected yet (APPS_SCRIPT_URL is empty).');
    let res;
    try {
      res = await timedFetch(APPS_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({ ...payload, passcode: getPasscode() })
      }, 60000);
    } catch (e) {
      throw new Error(navigator.onLine === false ? 'You’re offline.' : 'The request timed out or was blocked.');
    }
    const data = await res.json();
    if (!data.ok) throw new Error(data.error || 'Save failed');
    return data;
  }

  // Save (or update) a summit. Editing = saving again for the same state: the new row
  // overrides the old fields. `photoFile` is optional and is added to the state's photos.
  async function saveSummit(entry, photoFile) {
    const payload = { action: 'log', state: entry.state, date: entry.date,
      conditions: entry.conditions || '', partners: entry.partners || '', notes: entry.notes || '' };
    if (photoFile) payload.photo = await compressImage(photoFile);
    const res = await post(payload);
    return { ...entry, photo: res.photo || '' };
  }

  // Add one more photo to a summit. Sent as a new row carrying the summit's date so
  // photos accumulate instead of replacing each other.
  async function addPhoto(state, date, photoFile) {
    const dataUrl = await compressImage(photoFile);
    const res = await post({ action: 'log', state, date, photo: dataUrl });
    return res.photo || '';
  }

  // Resize + recompress so iPhone photos (often 4–8 MB) upload in a second or two.
  function compressImage(file, maxDim = 1600, quality = 0.82) {
    return new Promise((resolve, reject) => {
      const url = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => {
        const scale = Math.min(1, maxDim / Math.max(img.width, img.height));
        const c = document.createElement('canvas');
        c.width = Math.round(img.width * scale);
        c.height = Math.round(img.height * scale);
        c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
        URL.revokeObjectURL(url);
        resolve(c.toDataURL('image/jpeg', quality));
      };
      img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('Couldn’t read that image')); };
      img.src = url;
    });
  }

  return { normDate, enabled, getPasscode, setPasscode, cached, setCache, merge, fetchRemote, post, saveSummit, addPhoto, compressImage };
})();
