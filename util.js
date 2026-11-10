// ══════════════════════════════════════════════════════════════
//  util.js — small helpers shared by index.html and peak.html
// ══════════════════════════════════════════════════════════════
const U = (() => {
  const ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ESC[c]);

  // Only https image/links from the sheet are ever rendered
  const safeUrl = u => (/^https:\/\//.test(u || '') ? u : '');

  const diffColor = d => d <= 2 ? '#a3c47a' : d <= 4 ? '#d4b96a' : d <= 6 ? '#e0895a' : d <= 8 ? '#d05540' : '#b83030';

  const parseISO = iso => new Date(iso + 'T12:00:00');
  const fmtDate = (iso, opts) => parseISO(iso).toLocaleDateString('en-US', opts || { month: 'long', day: 'numeric', year: 'numeric' });
  const fmtMonth = iso => fmtDate(iso, { month: 'short', year: 'numeric' });

  const regionByState = {};
  Object.keys(REGIONS).forEach(r => REGIONS[r].forEach(s => { regionByState[s] = r; }));

  const byState = {};
  HIGHPOINTS.forEach(h => { byState[h.state] = h; });

  const haversineMi = (lat1, lng1, lat2, lng2) => {
    const R = 3958.8, rad = Math.PI / 180;
    const dLat = (lat2 - lat1) * rad, dLng = (lng2 - lng1) * rad;
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * rad) * Math.cos(lat2 * rad) * Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  };

  const gainLabel = h => (h.gain > 0 ? h.gain.toLocaleString() + ' ft' : 'Drive-up');

  const todayISO = () => {
    const d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  };

  return { esc, safeUrl, diffColor, parseISO, fmtDate, fmtMonth, regionByState, byState, haversineMi, gainLabel, todayISO };
})();
