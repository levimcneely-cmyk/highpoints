// ══════════════════════════════════════════════════════════════
//  sync.js — shared by index.html and peak.html
//  Talks to the Google Apps Script web app (see Code.gs).
// ══════════════════════════════════════════════════════════════

// Paste your deployed Apps Script "Web app" URL between the quotes.
// Leave empty to run the site in read-only mode (SUMMITED array only).
const APPS_SCRIPT_URL = '';

const Sync = (() => {
  const CACHE_KEY = 'hp_remote_cache_v1';
  const PASS_KEY  = 'hp_passcode';
  const FIELDS    = ['date', 'conditions', 'partners', 'notes', 'photo'];

  const enabled = () => !!APPS_SCRIPT_URL;

  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  const getPasscode = () => lsGet(PASS_KEY) || '';
  const setPasscode = v => lsSet(PASS_KEY, v);

  function cached() {
    try { return JSON.parse(lsGet(CACHE_KEY) || '[]'); } catch (e) { return []; }
  }

  // Baseline (SUMMITED in the HTML) + remote rows, later rows win field-by-field.
  // A state only counts as summited if it ends up with a date.
  function merge(base, remote) {
    const map = {};
    base.forEach(s => { map[s.state] = { ...s }; });
    (remote || []).forEach(r => {
      const cur = map[r.state] || { state: r.state };
      FIELDS.forEach(f => { if (r[f]) cur[f] = r[f]; });
      map[r.state] = cur;
    });
    return Object.values(map).filter(s => s.date);
  }

  async function fetchRemote() {
    if (!enabled()) return [];
    const res = await fetch(APPS_SCRIPT_URL, { cache: 'no-store' });
    const data = await res.json();
    if (!data.ok) throw new Error(data.error || 'Load failed');
    lsSet(CACHE_KEY, JSON.stringify(data.summits));
    return data.summits;
  }

  // text/plain keeps this a "simple" request so the browser skips the CORS preflight
  async function post(payload) {
    if (!enabled()) throw new Error('Saving isn’t connected yet (APPS_SCRIPT_URL is empty).');
    const res = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify({ ...payload, passcode: getPasscode() })
    });
    const data = await res.json();
    if (!data.ok) throw new Error(data.error || 'Save failed');
    return data;
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

  return { enabled, getPasscode, setPasscode, cached, merge, fetchRemote, post, compressImage };
})();
