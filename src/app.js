(() => {
'use strict';

/* ================= ícones ================= */
const I = {
  home:'<path d="M3.5 10.5 12 3.5l8.5 7"/><path d="M5.5 9v11h13V9"/><path d="M10 20v-5.5h4V20"/>',
  calendar:'<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
  heart:'<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 20.5c1.4-4 4.5-6 8-6s6.6 2 8 6"/>',
  userplus:'<circle cx="10" cy="8" r="4"/><path d="M3 20.5c1.3-3.8 4-5.8 7-5.8 1.6 0 3 .5 4.2 1.4"/><path d="M18 14v6M15 17h6"/>',
  org:'<path d="M4 21V8.5L12 3l8 5.5V21"/><path d="M2.5 21h19"/><path d="M12 17.5s-3.3-1.9-3.3-4.3A1.9 1.9 0 0 1 12 12a1.9 1.9 0 0 1 3.3 1.2c0 2.4-3.3 4.3-3.3 4.3z"/>',
  bread:'<path d="M6 11.6A3.6 3.6 0 0 1 7.2 4.5h9.6A3.6 3.6 0 0 1 18 11.6V20H6z"/><path d="M9.5 8.5l1 1.5M13.5 8l1 1.5"/>',
  coins:'<ellipse cx="12" cy="6" rx="7" ry="2.8"/><path d="M5 6v5.5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8V6"/><path d="M5 11.5V17c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5.5"/>',
  qr:'<rect x="3.5" y="3.5" width="6.5" height="6.5" rx="1.2"/><rect x="14" y="3.5" width="6.5" height="6.5" rx="1.2"/><rect x="3.5" y="14" width="6.5" height="6.5" rx="1.2"/><path d="M14 14h3v3M20.5 14v6.5h-3.5M14 20.5h.01"/>',
  card:'<rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M2.5 9.5h19M6.5 15h4"/>',
  cash:'<rect x="2.5" y="6" width="19" height="12" rx="2"/><circle cx="12" cy="12" r="2.6"/><path d="M6 9.5v5M18 9.5v5"/>',
  check:'<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  left:'<path d="m15 5-7 7 7 7"/>',
  right:'<path d="m9 5 7 7-7 7"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  minus:'<path d="M5 12h14"/>',
  pin:'<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  clock:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c1-3.5 3.6-5.5 6.5-5.5s5.5 2 6.5 5.5"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.8c1.7.7 3 2.4 3.5 5.2"/>',
  shield:'<path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.2 7.5 9.5 4.3-1.3 7.5-4.9 7.5-9.5V6z"/><path d="m8.8 12 2.2 2.2 4.2-4.4"/>',
  grid:'<rect x="3.5" y="3.5" width="7" height="7" rx="1.6"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.6"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.6"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.6"/>',
  copy:'<rect x="8.5" y="8.5" width="12" height="12" rx="2"/><path d="M15.5 8.5V5.5a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3"/>',
  back:'<path d="M9 5h11a1.5 1.5 0 0 1 1.5 1.5v11A1.5 1.5 0 0 1 20 19H9l-6-7z"/><path d="m12.5 9.5 5 5M17.5 9.5l-5 5"/>',
  box:'<path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5z"/><path d="M3.5 7.5 12 12l8.5-4.5M12 12v9"/>',
  info:'<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5M12 8h.01"/>',
  refresh:'<path d="M20 11a8 8 0 1 0-2.3 5.7"/><path d="M20 4.5V11h-6.5"/>',
  x:'<path d="M6 6l12 12M18 6 6 18"/>',
  megaphone:'<path d="M4 10v4a1 1 0 0 0 1 1h2l6 4V5L7 9H5a1 1 0 0 0-1 1z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>',
  book:'<path d="M5 4.5h10.5A3.5 3.5 0 0 1 19 8v12.5H8.5A3.5 3.5 0 0 1 5 17z"/><path d="M5 17a3.5 3.5 0 0 1 3.5-3.5H19"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7 8 6 8-6"/>',
  phone:'<path d="M5.5 4h3l1.8 4.5-2.2 1.4a11 11 0 0 0 6 6l1.4-2.2L20 15.5v3a1.5 1.5 0 0 1-1.6 1.5A16 16 0 0 1 4 5.6 1.5 1.5 0 0 1 5.5 4z"/>',
  chevdown:'<path d="m6 9 6 6 6-6"/>',
  expand:'<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',
  shrink:'<path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"/>',
  doc:'<path d="M6.5 3.5h7L18 8v12.5H6.5z"/><path d="M13 3.5V8.5h5M9.5 13h5M9.5 16.5h5"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M4.6 4.6 6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4"/>',
  moon:'<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/>'
};
/* Ícones do Lucide usados no design do pen.dev (traço 2) */
const LU = {
  'repeat':'<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
  'rotate-ccw':'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
  'package-check':'<path d="m16 16 2 2 4-4"/><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"/><path d="m7.5 4.27 9 5.15"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" x2="12" y1="22" y2="12"/>',
  'minus':'<path d="M5 12h14"/>',
  'plus':'<path d="M5 12h14"/><path d="M12 5v14"/>',
  'banknote':'<rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/>',
  'package':'<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"/><path d="m7.5 4.27 9 5.15"/>',
  'qr-code':'<rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/>',
  'credit-card':'<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>',
  'delete':'<path d="M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"/><path d="m12 9 6 6"/><path d="m18 9-6 6"/>',
  'timer':'<line x1="10" x2="14" y1="2" y2="2"/><line x1="12" x2="15" y1="14" y2="11"/><circle cx="12" cy="14" r="8"/>',
  'copy':'<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  'lock':'<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  'circle-help':'<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
  'receipt':'<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/>',
  'house':'<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  'circle-user-round':'<path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/>',
  'bell':'<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',
  'hourglass':'<path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>',
  'clock-3':'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16.5 12"/>',
  'map-pin':'<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  'users':'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  'info':'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  'calendar':'<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
  'calendar-plus':'<path d="M8 2v4"/><path d="M16 2v4"/><path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"/><path d="M3 10h18"/><path d="M16 19h6"/><path d="M19 16v6"/>',
  'hand-helping':'<path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14"/><path d="m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 13 6 6"/>',
  'hand-heart':'<path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"/><path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 15 6 6"/><path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z"/>',
  'house-heart':'<path d="M8.62 13.8A2.25 2.25 0 1 1 12 10.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  'map':'<path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/>',
  'chevron-right':'<path d="m9 18 6-6-6-6"/>',
  'chevron-down':'<path d="m6 9 6 6 6-6"/>',
  'arrow-left':'<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
  'arrow-right':'<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  'locate-fixed':'<line x1="2" x2="5" y1="12" y2="12"/><line x1="19" x2="22" y1="12" y2="12"/><line x1="12" x2="12" y1="2" y2="5"/><line x1="12" x2="12" y1="19" y2="22"/><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="3"/>',
  'wand-sparkles':'<path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"/><path d="m14 7 3 3"/><path d="M5 6v4"/><path d="M19 14v4"/><path d="M10 2v2"/><path d="M7 8H3"/><path d="M21 16h-4"/><path d="M11 3H9"/>',
  'circle-check':'<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  'circle-alert':'<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>',
  'check':'<path d="M20 6 9 17l-5-5"/>',
  'calendar-heart':'<path d="M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7"/><path d="M8 2v4"/><path d="M16 2v4"/><path d="M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"/>',
  'shopping-basket':'<path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/>',
  'hand-coins':'<path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 16 6 6"/><circle cx="16" cy="9" r="2.9"/><circle cx="6" cy="5" r="3"/>',
  'calendar-days':'<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/>',
  'ticket':'<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/>',
  'layout-grid':'<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
  'circle-plus':'<circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/>',
  'building-2':'<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',
  'badge-check':'<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/>',
  'pencil':'<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',
  'user':'<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  'phone':'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  'mail':'<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  'trash-2':'<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/>',
  'store':'<path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"/>',
  'cooking-pot':'<path d="M2 12h20"/><path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"/><path d="m4 8 16-4"/><path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"/>',
  'shopping-cart':'<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>',
  'shield-check':'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  'file-text':'<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
  'carrot':'<path d="M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"/><path d="M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"/><path d="M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"/>',
  'flag':'<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/>',
  'smartphone':'<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',
  'maximize':'<path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/>',
  'minimize':'<path d="M8 3v3a2 2 0 0 1-2 2H3"/><path d="M21 8h-3a2 2 0 0 1-2-2V3"/><path d="M3 16h3a2 2 0 0 1 2 2v3"/><path d="M16 21v-3a2 2 0 0 1 2-2h3"/>',
  'sandwich':'<path d="m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777"/><path d="M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25"/><path d="M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9"/><path d="m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2"/><rect width="20" height="4" x="2" y="11" rx="1"/>'
};
const icon = (n, s = 22) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${LU[n] ? 2 : 1.8}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${LU[n] || I[n] || ''}</svg>`;
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

/* ================= datas e valores ================= */
const HOJE = (() => { const d = new Date(); d.setHours(0,0,0,0); return d; })();
const iso = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
const emDias = n => { const d = new Date(HOJE); d.setDate(d.getDate()+n); return iso(d); };
const toDate = s => { const [y,m,d] = s.split('-').map(Number); return new Date(y, m-1, d); };
const diff = s => Math.round((toDate(s) - HOJE) / 86400000);
const MES = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];
const MESL = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
const SEM = ['dom','seg','ter','qua','qui','sex','sáb'];
const SEML = ['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'];
const fmtCurta = s => { const d = toDate(s); return `${SEM[d.getDay()]}, ${d.getDate()} ${MES[d.getMonth()]}`; };
const fmtLonga = s => { const d = toDate(s); return `${SEML[d.getDay()]}, ${d.getDate()} de ${MESL[d.getMonth()]}`; };
const rel = s => { const n = diff(s); return n === 0 ? 'hoje' : n === 1 ? 'amanhã' : n < 0 ? `há ${-n} dias` : `em ${n} dias`; };
const brl = c => (c/100).toLocaleString('pt-BR', { style:'currency', currency:'BRL' });
const toMin = t => { const [h,m] = t.split(':').map(Number); return h*60 + m; };
const fromMin = m => `${String(Math.floor(m/60)).padStart(2,'0')}:${String(m%60).padStart(2,'0')}`;
const turnosDe = (a, b) => {
  const x = toMin(a), y = toMin(b);
  if (y - x >= 180) { const mid = x + Math.round((y - x) / 2 / 30) * 30; return [`${a}–${fromMin(mid)}`, `${fromMin(mid)}–${b}`]; }
  return [`${a}–${b}`];
};
const hash = s => { let h = 2166136261; for (const c of String(s)) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; };
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
const first = n => String(n || '').trim().split(/\s+/)[0] || '';
const initials = n => String(n || '').trim().split(/\s+/).filter(p => p && !/^(d[aeo]s?|e)$/i.test(p)).slice(0,2).map(p => p[0].toUpperCase()).join('');
const plural = (n, s, p) => `${n} ${n === 1 ? s : p}`;

/* ================= dados de exemplo ================= */
const CAT = {
  arroz:{nome:'Arroz', un:'pacote 5 kg', pl:'pacotes'},
  feijao:{nome:'Feijão', un:'pacote 1 kg', pl:'pacotes'},
  oleo:{nome:'Óleo de soja', un:'garrafa 900 ml', pl:'garrafas'},
  macarrao:{nome:'Macarrão', un:'pacote 500 g', pl:'pacotes'},
  sardinha:{nome:'Sardinha', un:'lata 125 g', pl:'latas'},
  leite:{nome:'Leite integral', un:'caixa 1 L', pl:'caixas'},
  acucar:{nome:'Açúcar', un:'pacote 1 kg', pl:'pacotes'},
  cafe:{nome:'Café', un:'pacote 500 g', pl:'pacotes'},
  biscoito:{nome:'Biscoito cream cracker', un:'pacote 400 g', pl:'pacotes'},
  farinha:{nome:'Farinha de mandioca', un:'pacote 1 kg', pl:'pacotes'}
};
const POOL = ['Ana','Bruno','Carla','Diego','Elaine','Fábio','Gisele','Hugo','Irene','João','Karina','Leandro','Mônica','Nelson','Olívia','Pedro','Raquel','Renato','Sílvia','Tiago','Vânia','Wesley'];
const TIPOS_EV = ['Montagem de cestas','Preparo de refeições','Triagem de alimentos','Lanche e reforço'];

const seedOrgs = () => [
  {id:'o1', nome:'Banco de Alimentos Asa Sul', tipo:'ONG', endereco:'SGAS 905, Asa Sul – Brasília', resp:'Cláudia Ramos', tel:'(61) 3245-1180', email:'contato@bancoasasul.org', status:'aprovada', sobre:'Recolhe excedentes de mercados e feiras e monta cestas básicas para 180 famílias cadastradas.', distribui:['Cestas básicas'], arrecadado:124000, horario:'Seg a sex · 09:00–17:00', cnpj:'08.441.209/0001-37'},
  {id:'o2', nome:'Cozinha Solidária Ceilândia', tipo:'Coletivo comunitário', endereco:'QNM 18, Ceilândia Sul', resp:'Josias Ferreira', tel:'(61) 99812-4407', email:'cozinha.ceilandia@email.com', status:'aprovada', sobre:'Prepara cerca de 400 marmitas por semana para pessoas em situação de rua.', distribui:['Refeições prontas'], arrecadado:86000, horario:'Ter a sáb · 08:00–14:00', cnpj:'31.502.778/0001-04'},
  {id:'o3', nome:'Instituto Prato Cheio', tipo:'ONG', endereco:'QS 7, Taguatinga Sul', resp:'Helena Duarte', tel:'(61) 3352-9021', email:'ola@pratocheio.org', status:'aprovada', sobre:'Oferece lanche e reforço escolar para 90 crianças no contraturno.', distribui:['Lanches'], arrecadado:41500, horario:'Seg a sex · 13:00–18:00', cnpj:'19.087.334/0001-62'},
  {id:'o4', nome:'Mercado Bom Vizinho', tipo:'Empresa', endereco:'QE 40, Guará II', resp:'Paulo Mendes', tel:'(61) 3381-7765', email:'paulo@bomvizinho.com.br', status:'pendente', sobre:'Rede de três mercados de bairro que quer destinar o hortifrúti excedente.', distribui:['Hortifrúti'], arrecadado:0, horario:'Todos os dias · 07:00–21:00', cnpj:'12.345.678/0001-90', enviado:'há 3 dias'}
];
const seedEvents = () => [
  {id:'e1', orgId:'o1', tipo:'Montagem de cestas', titulo:'Montagem de cestas básicas', data:emDias(2), inicio:'08:00', fim:'12:00', local:'Galpão do Banco de Alimentos', endereco:'SGAS 905, Asa Sul', desc:'Vamos separar e montar 180 cestas, que a equipe do banco entrega às famílias na semana seguinte.', nota:'Use sapato fechado. Luvas e toucas são fornecidas.', turnos:['08:00–10:00','10:00–12:00'], postos:[{nome:'Recepção de doações',vagas:4,inscritos:3},{nome:'Triagem e validade',vagas:6,inscritos:5},{nome:'Montagem das cestas',vagas:10,inscritos:6}], itens:['arroz','feijao','oleo','macarrao']},
  {id:'e2', orgId:'o2', tipo:'Preparo de refeições', titulo:'Preparo de marmitas', data:emDias(4), inicio:'07:30', fim:'13:00', local:'Cozinha comunitária', endereco:'QNM 18, Ceilândia Sul', desc:'Preparo e embalagem de 400 marmitas para a rota da noite.', nota:'Cabelo preso e sapato fechado. Avental e touca ficam por nossa conta.', turnos:['07:30–10:00','10:00–13:00'], postos:[{nome:'Cozinha',vagas:8,inscritos:7},{nome:'Embalagem',vagas:6,inscritos:2},{nome:'Limpeza da cozinha',vagas:3,inscritos:3}], itens:['arroz','feijao','oleo']},
  {id:'e6', orgId:'o4', tipo:'Triagem de alimentos', titulo:'Separação de hortifrúti excedente', data:emDias(6), inicio:'18:00', fim:'20:00', local:'Mercado Bom Vizinho', endereco:'QE 40, Guará II', desc:'Separação de frutas e verduras que saem da gôndola no fim do dia. O próprio mercado leva tudo às organizações no dia seguinte.', turnos:['18:00–20:00'], postos:[{nome:'Separação',vagas:4,inscritos:0},{nome:'Higienização',vagas:2,inscritos:0}], itens:[]},
  {id:'e3', orgId:'o1', tipo:'Preparo de refeições', titulo:'Sopão comunitário', data:emDias(9), inicio:'14:00', fim:'17:00', local:'Cozinha do Banco de Alimentos', endereco:'SGAS 905, Asa Sul', desc:'Preparo de 300 porções de sopa com os legumes recebidos na semana. A equipe do banco leva as porções às famílias.', nota:'Cabelo preso e sapato fechado. Haverá café e água para a equipe.', turnos:['14:00–15:30','15:30–17:00'], postos:[{nome:'Corte de legumes',vagas:6,inscritos:1},{nome:'Cozinha',vagas:6,inscritos:3},{nome:'Porcionamento e embalagem',vagas:5,inscritos:0}], itens:['feijao','macarrao']},
  {id:'e4', orgId:'o3', tipo:'Lanche e reforço', titulo:'Lanche no contraturno', data:emDias(12), inicio:'15:00', fim:'18:00', local:'Escola Classe 21', endereco:'QSA 21, Taguatinga Sul', desc:'Preparo e servimento do lanche da tarde para 90 crianças, seguido de uma roda de leitura.', turnos:['15:00–16:30','16:30–18:00'], postos:[{nome:'Preparo do lanche',vagas:5,inscritos:2},{nome:'Leitura com as crianças',vagas:6,inscritos:4},{nome:'Organização e limpeza',vagas:3,inscritos:1}], itens:['leite','biscoito','acucar']},
  {id:'e5', orgId:'o2', tipo:'Triagem de alimentos', titulo:'Triagem do hortifrúti da feira', data:emDias(17), inicio:'08:00', fim:'12:00', local:'Cozinha comunitária', endereco:'QNM 18, Ceilândia Sul', desc:'A equipe da cozinha traz o que sobrou da feira do Guará. Vamos lavar, separar e aproveitar o que der para as marmitas.', nota:'Traga garrafa de água. Avental e luvas ficam por nossa conta.', turnos:['08:00–10:00','10:00–12:00'], postos:[{nome:'Lavagem e higienização',vagas:6,inscritos:1},{nome:'Separação e pesagem',vagas:5,inscritos:1},{nome:'Pré-preparo dos legumes',vagas:4,inscritos:0}], itens:[]}
];
/* Onde os alimentos são entregues: só a sede do MEZA e os pontos de coleta parceiros (comércios do DF). Nomes fictícios. */
const PONTOS = [
  {id:'sede', nome:'Sede do MEZA', endereco:'SCS Quadra 6, Bloco A, sala 210 – Asa Sul', horario:'Seg a sex · 08:00–18:00', ic:'house-heart'},
  {id:'pc1', nome:'Padaria Pão da Quadra', endereco:'CLN 214, Bloco B, loja 12 – Asa Norte', horario:'Todos os dias · 06:00–20:00', ic:'store'},
  {id:'pc2', nome:'Restaurante Sabor do Cerrado', endereco:'CLS 405, Bloco A, loja 8 – Asa Sul', horario:'Ter a dom · 11:00–22:00', ic:'store'},
  {id:'pc3', nome:'Mercadinho Vila Boa', endereco:'QNM 18, Conjunto H, loja 3 – Ceilândia Sul', horario:'Seg a sáb · 07:00–21:00', ic:'store'},
  {id:'pc4', nome:'Empório Taguá', endereco:'QSA 21, Lote 5, loja 2 – Taguatinga Sul', horario:'Seg a sáb · 08:00–19:00', ic:'store'},
  {id:'pc5', nome:'Café da Feira', endereco:'QE 40, Rua 2, loja 7 – Guará II', horario:'Todos os dias · 07:00–19:00', ic:'store'}
];
const pontoOf = id => PONTOS.find(x => x.id === id) || PONTOS[0];
const seedNeeds = () => ({
  o1:[{id:'arroz',meta:150,atual:92,prom:3},{id:'feijao',meta:200,atual:61,prom:2},{id:'oleo',meta:120,atual:104,prom:3},{id:'macarrao',meta:180,atual:75,prom:0},{id:'sardinha',meta:100,atual:22,prom:0}],
  o2:[{id:'arroz',meta:100,atual:40,prom:0},{id:'feijao',meta:120,atual:88,prom:0},{id:'oleo',meta:60,atual:15,prom:0},{id:'cafe',meta:40,atual:12,prom:0}],
  o3:[{id:'leite',meta:160,atual:70,prom:0},{id:'biscoito',meta:90,atual:38,prom:0},{id:'acucar',meta:50,atual:31,prom:0}],
  o4:[]
});
const seedPendVol = () => [
  {id:'pv1', nome:'Rafael Nunes', cidade:'Taguatinga', quando:'há 2 dias', ajudas:['Cozinhar nas ações'], freq:'Toda semana', motivacao:'Minha família recebeu cestas quando eu era criança e quero retribuir.', exp:'Nunca fiz, será a primeira vez.', status:'pendente'},
  {id:'pv2', nome:'Júlia Andrade', cidade:'Asa Norte', quando:'ontem', ajudas:['Doar alimentos','Cozinhar nas ações'], freq:'Uma vez por mês', motivacao:'Quero usar meus sábados para algo que faça diferença.', exp:'Mutirões de arrecadação na faculdade.', status:'pendente'}
];
const DEMO_USER = {nome:'Marina Costa', email:'marina.costa@email.com', telefone:'(61) 99234-5678', genero:'Feminino', nascimento:'1998-03-14', endereco:'SQS 308, Asa Sul – Brasília', exp:'Ajudei na campanha do agasalho da faculdade.', motivacao:'Quero ajudar de perto quem passa fome na minha cidade.', freq:'A cada 15 dias', ajudas:['Cozinhar nas ações','Doar alimentos'], status:'aprovado'};
const blankVol = () => ({nome:'', email:'', telefone:'', genero:'', nascimento:'', endereco:'', exp:'', motivacao:'', freq:'', ajudas:[]});
const blankOrg = () => ({nome:'', cnpj:'', tipo:'', resp:'', email:'', tel:'', endereco:'', sobre:'', distribui:[]});

const initialState = () => ({
  role:null, route:'welcome', params:{}, stack:[], enter:true,
  user:null, myOrgId:null,
  volDraft:blankVol(), orgDraft:blankOrg(), evDraft:null,
  errors:{}, focusErr:false, confirm:null,
  orgs:seedOrgs(), events:seedEvents(), needs:seedNeeds(),
  inscricoes:[], doacoes:[],
  promessas:[{id:'p0', orgId:'o1', eventId:'e1', itens:{arroz:2, oleo:3}, ponto:'pc2', nome:'Leandro P.'}, {id:'p1', orgId:'o1', eventId:'e1', itens:{arroz:1, feijao:2}, ponto:'sede', nome:'Lucas A.'}],
  pendVol:seedPendVol(),
  /* Doações vão para o MEZA (a equipe decide onde usar) ou para uma ação: dest = 'meza' ou o id da ação */
  don:{dest:'meza', cents:0, metodo:'pix'},
  food:{dest:'meza', qty:{}, entrega:null},
  meza:{caixa:318000, prom:{arroz:6, feijao:4}},
  sel:{}, filtro:'Todas', afiltro:'todos', valTab:'vol',
  notif:false, lidas:[], /* menu de notificações aberto e ids já lidos */
  nextMin:false /* destaque da próxima ação minimizado no início */
});
let S = initialState();

/* ================= consultas ================= */
const orgOf = id => S.orgs.find(o => o.id === id);
const evOf = id => S.events.find(e => e.id === id);
const myOrg = () => orgOf(S.myOrgId);
const byDate = (a, b) => (a.data + a.inicio).localeCompare(b.data + b.inicio);
const futuros = () => S.events.filter(e => diff(e.data) >= 0).sort(byDate);
const eventosVoluntario = () => futuros().filter(e => orgOf(e.orgId)?.status === 'aprovada');
const vagasLivres = e => e.postos.reduce((s, p) => s + Math.max(0, p.vagas - p.inscritos), 0);
const inscritosTotal = e => e.postos.reduce((s, p) => s + p.inscritos, 0);
const vagasTotal = e => e.postos.reduce((s, p) => s + p.vagas, 0);
const minhaInsc = id => S.inscricoes.find(i => i.eventId === id);
const orgsComNecessidade = () => S.orgs.filter(o => o.status === 'aprovada' && (S.needs[o.id] || []).length);
const needOf = (orgId, itemId) => (S.needs[orgId] || []).find(n => n.id === itemId);
/* Destino da doação: o MEZA como um todo ou uma ação específica */
const destEv = dest => dest && dest !== 'meza' ? evOf(dest) : null;
const destNome = dest => { const e = destEv(dest); return e ? e.titulo : 'MEZA'; };
const destPara = dest => { const e = destEv(dest); return e ? `para ${esc(e.titulo)}` : 'para o MEZA'; };
const acoesComItens = () => eventosVoluntario().filter(e => e.itens.length);
const destOpcoes = evs => [['meza', 'MEZA · a equipe decide onde usar'], ...evs.map(e => [e.id, `${e.titulo} · ${fmtCurta(e.data)}`])];
const destHint = dest => { const e = destEv(dest); return e ? `${esc(orgOf(e.orgId).nome)} · ${cap(fmtCurta(e.data))}` : 'A equipe do MEZA leva sua doação para onde a necessidade for maior.'; };
/* Itens que o destino ainda precisa: numa ação, os itens dela com a meta da organização; no MEZA, a soma de todas as metas */
function needsFor(dest) {
  const e = destEv(dest);
  if (e) return e.itens.map(id => needOf(e.orgId, id) || { id, meta:0, atual:0, prom:0 });
  const tot = {};
  orgsComNecessidade().forEach(o => S.needs[o.id].forEach(n => { const t = tot[n.id] || (tot[n.id] = { id:n.id, meta:0, atual:0, prom:0 }); t.meta += n.meta; t.atual += n.atual; t.prom += n.prom; }));
  Object.entries(S.meza.prom).forEach(([id, q]) => { if (tot[id]) tot[id].prom += q; });
  return Object.values(tot);
}
const pendentesVol = () => S.pendVol.filter(v => v.status === 'pendente');
const pendentesOrg = () => S.orgs.filter(o => o.status === 'pendente');
const getPath = p => p.split('.').reduce((o, k) => (o == null ? o : o[k]), S);
const setPath = (p, v) => { const ks = p.split('.'); let o = S; for (let i = 0; i < ks.length - 1; i++) o = o[ks[i]]; o[ks[ks.length - 1]] = v; };

/* ================= componentes ================= */
const dateBlock = s => { const d = toDate(s); return `<span class="dateb" aria-hidden="true"><span class="d">${d.getDate()}</span><span class="m">${MES[d.getMonth()]}</span><span class="w">${SEM[d.getDay()]}</span></span>`; };

function vagasBadge(e) {
  if (minhaInsc(e.id)) return `<span class="badge y">${icon('check',14)} Você está inscrito</span>`;
  const l = vagasLivres(e);
  return l === 0 ? `<span class="badge n">Lotado</span>` : `<span class="badge">${plural(l,'vaga livre','vagas livres')}</span>`;
}
function eventCard(e, route, extra = '') {
  const o = orgOf(e.orgId);
  return `<button class="card tap ev" data-a="go" data-r="${route}" data-id="${e.id}">
    ${dateBlock(e.data)}
    <span class="ev-b">
      <span class="ev-org">${esc(o.nome)}</span>
      <span class="ev-t">${esc(e.titulo)}</span>
      <span class="meta"><span>${icon('clock',15)} ${e.inicio}–${e.fim}</span><span>${icon('pin',15)} ${esc(e.endereco)}</span></span>
      <span class="ev-foot">${extra || vagasBadge(e)}</span>
    </span>
  </button>`;
}
function prog(a, max, b = 0, cls = '') {
  const pa = Math.min(100, (a / max) * 100), pb = Math.min(100 - pa, (b / max) * 100);
  return `<span class="prog ${cls}" role="img" aria-label="${a} de ${max}"><i style="width:${pa}%"></i>${b ? `<i class="p2" style="width:${pb}%"></i>` : ''}</span>`;
}
function errMsg(k) { return S.errors[k] ? `<span class="msg-err" id="e-${k}">${icon('circle-alert',16)}<span>${S.errors[k]}</span></span>` : ''; }
/* Depois de uma tentativa de envio (S.tried), campos opcionais "check" mostram o ✓ verde quando estão certos. */
const okMark = (o, k, v) => o.check && S.tried && !S.errors[k] && String(v).trim() ? `<span class="trail ok" aria-label="Campo correto">${icon('circle-check',20)}</span>` : '';
const helper = (o, k, ok) => S.errors[k] ? errMsg(k) : (o.hint && !ok ? `<span class="hint">${o.hint}</span>` : '');
const describedBy = (o, k) => S.errors[k] ? ` aria-invalid="true" aria-describedby="e-${k}"` : '';
function field(o) {
  const v = getPath(o.bind) ?? ''; const k = o.key || o.bind.split('.').pop(); const id = 'f-' + o.bind.replace(/\./g, '-');
  const ok = okMark(o, k, v);
  if (o.type === 'date' && !o.action) o = { ...o, action:{ a:'open-date', icon:'calendar', label:'Abrir calendário' } };
  if (o.type === 'time' && !o.action) o = { ...o, action:{ a:'open-date', icon:'clock-3', label:'Escolher horário' } };
  const trail = ok || (o.trailIcon ? `<span class="trail">${icon(o.trailIcon,20)}</span>` : '') || (o.action ? `<button type="button" class="trail-btn" data-a="${o.action.a}" aria-label="${o.action.label}">${icon(o.action.icon,20)}</button>` : '');
  return `<div class="field${S.errors[k] ? ' err' : ''}">
    <label for="${id}">${o.label}</label>
    <div class="inp">${o.icon ? icon(o.icon, 19) : ''}<input id="${id}" type="${o.type || 'text'}" data-bind="${o.bind}" value="${esc(v)}" placeholder="${esc(o.ph || '')}"${o.mask ? ` data-mask="${o.mask}"` : ''}${o.auto ? ` autocomplete="${o.auto}"` : ''}${o.mode ? ` inputmode="${o.mode}"` : ''}${o.min ? ` min="${o.min}"` : ''}${o.max ? ` max="${o.max}"` : ''}${o.rer ? ' data-rerender="1"' : ''}${describedBy(o, k)}>${trail}</div>
    ${helper(o, k, ok)}
  </div>`;
}
/* Menu de escolha próprio (no lugar do <select> nativo): botão + lista com role="listbox".
   Abrir e navegar mexe só no DOM; escolher grava em S e redesenha a tela. */
function selectField(o) {
  const v = getPath(o.bind) ?? ''; const k = o.key || o.bind.split('.').pop(); const id = 'f-' + o.bind.replace(/\./g, '-');
  const ops = o.options.map(op => Array.isArray(op) ? op : [op, op]);
  const cur = ops.find(([val]) => val === v);
  return `<div class="field${S.errors[k] ? ' err' : ''}">
    <label id="l-${id}" for="${id}">${o.label}</label>
    <div class="dd">
      <button type="button" class="inp dd-btn${cur ? '' : ' empty'}" id="${id}" data-a="dd-toggle" aria-haspopup="listbox" aria-expanded="false" aria-controls="${id}-list" aria-labelledby="l-${id} ${id}-val"${describedBy(o, k)}>${o.icon ? icon(o.icon, 19) : ''}<span class="dd-val" id="${id}-val">${esc(cur ? cur[1] : (o.ph || 'Selecione'))}</span><span class="caret">${icon('chevron-down',20)}</span></button>
      <ul class="dd-list" id="${id}-list" role="listbox" aria-labelledby="l-${id}" hidden>
        ${ops.map(([val, lab]) => `<li role="option" tabindex="-1" data-a="dd-pick" data-bind="${o.bind}" data-v="${esc(val)}" aria-selected="${val === v}"><span>${esc(lab)}</span>${val === v ? icon('check',18) : ''}</li>`).join('')}
      </ul>
    </div>${helper(o, k)}
  </div>`;
}
/* Abre e fecha o menu de escolha; só um fica aberto por vez */
function ddOpen(btn, focusOpt = true) {
  ddClose();
  const list = document.getElementById(btn.getAttribute('aria-controls')); if (!list) return;
  list.hidden = false; btn.setAttribute('aria-expanded', 'true');
  const sc = btn.closest('.scroll'), r = btn.getBoundingClientRect(), box = sc ? sc.getBoundingClientRect() : { top:0, bottom:innerHeight };
  const below = box.bottom - r.bottom, above = r.top - box.top;
  list.classList.toggle('up', below < list.offsetHeight + 12 && above > below);
  if (!list.classList.contains('up')) list.scrollIntoView({ block:'nearest', behavior:'smooth' });
  if (focusOpt) (list.querySelector('[aria-selected="true"]') || list.querySelector('[role="option"]'))?.focus({ preventScroll:true });
}
function ddClose(refocus) {
  const btn = $app.querySelector('.dd-btn[aria-expanded="true"]'); if (!btn) return;
  btn.setAttribute('aria-expanded', 'false');
  const list = document.getElementById(btn.getAttribute('aria-controls')); if (list) list.hidden = true;
  if (refocus) btn.focus();
}
/* ---------- notificações ----------
   Calculadas do estado a cada render (não há back end). Cada uma tem id estável; as lidas ficam em S.lidas.
   "ir" diz o que o toque abre: rota (r) com id de evento (ev) ou a doação de alimentos (food-start com org e item). */
const haPouco = (ts, alt) => { if (!ts) return alt; const m = Math.round((Date.now() - ts) / 60000); return m < 1 ? 'agora' : m < 60 ? `há ${m} min` : 'hoje'; };
function notifs() {
  const ns = [];
  if (S.role === 'vol' && S.user) {
    const u = S.user;
    if (u.status === 'em_validacao') ns.push({ id:'cad-pend', ic:'hourglass', tom:'y', t:'Cadastro em validação', d:'Resultado em até 7 dias. Enquanto isso, você já pode reservar vagas e doar.', q:'hoje', ir:{ r:'v-perfil' } });
    else if (S.pendVol.some(v => v.id === 'me' && v.status === 'aprovado')) ns.push({ id:'cad-ok', ic:'badge-check', tom:'g', t:'Cadastro aprovado', d:'Boas-vindas à mesa! Seu perfil de voluntário já está ativo.', q:'agora', ir:{ r:'v-perfil' } });
    S.inscricoes.map(i => ({ i, e:evOf(i.eventId) })).filter(x => x.e && diff(x.e.data) >= 0).sort((a, b) => byDate(a.e, b.e)).forEach(({ i, e }) => {
      const quando = `${cap(fmtCurta(e.data))} · ${e.turnos[i.turno]} · ${esc(e.postos[i.posto].nome)}`;
      if (diff(e.data) <= 3) ns.push({ id:'lem-' + e.id, ic:'bell', tom:'y', t:`Sua ação é ${rel(e.data)}`, d:`${esc(e.titulo)}. ${quando}.`, q:'hoje', ir:{ r:'v-evento', ev:e.id } });
      else ns.push({ id:'insc-' + e.id, ic:'calendar-heart', tom:'g', t:'Vaga reservada', d:`${esc(e.titulo)}. ${quando}.`, q:haPouco(i.em, 'há 3 dias'), ir:{ r:'v-evento', ev:e.id } });
    });
    const dn = S.doacoes[S.doacoes.length - 1];
    if (dn) ns.push({ id:'don-' + dn.id, ic:'hand-heart', tom:'g', t:dn.tipo === 'dinheiro' ? `Recebemos sua doação de ${brl(dn.cents)}` : 'Doação de alimentos combinada', d:`Vai ${dn.dest === 'meza' ? 'para o MEZA' : `para ${esc(destNome(dn.dest))}`}. Obrigado por fazer parte da mesa.`, q:haPouco(dn.em, rel(dn.data)), ir:{ r:'v-perfil' } });
    const falta = [];
    orgsComNecessidade().forEach(o => S.needs[o.id].forEach(n => falta.push({ o, n, r:(n.atual + n.prom) / n.meta })));
    falta.sort((a, b) => a.r - b.r);
    if (falta[0] && falta[0].r < 1) { const { o, n } = falta[0]; const c = CAT[n.id]; const f = Math.max(0, n.meta - n.atual - n.prom);
      ns.push({ id:`need-${o.id}-${n.id}`, ic:'shopping-basket', tom:'t', t:`${c.nome} em falta`, d:`${esc(o.nome)} ainda precisa de ${f} ${c.pl}.`, q:'ontem', ir:{ r:'food-start', org:o.id, item:n.id } }); }
    const nova = eventosVoluntario().find(e => !minhaInsc(e.id) && vagasLivres(e) > 0);
    if (nova) ns.push({ id:'novo-' + nova.id, ic:'calendar-plus', tom:'g', t:'Nova ação perto de você', d:`${esc(nova.titulo)}. ${cap(fmtCurta(nova.data))}, ${nova.inicio}–${nova.fim}.`, q:'há 2 dias', ir:{ r:'v-evento', ev:nova.id } });
  }
  if (S.role === 'org' && myOrg()) {
    const o = myOrg();
    if (o.status !== 'aprovada') ns.push({ id:'org-pend', ic:'hourglass', tom:'y', t:'Cadastro em validação', d:'Suas ações aparecem para os voluntários assim que a equipe MEZA aprovar a organização.', q:'hoje', ir:{ r:'o-perfil' } });
    else if (o.revisada) ns.push({ id:'org-ok', ic:'badge-check', tom:'g', t:'Organização aprovada', d:'Suas ações já aparecem para os voluntários.', q:'agora', ir:{ r:'o-perfil' } });
    S.promessas.filter(p => p.orgId === o.id).slice().reverse().forEach(p => {
      const e = evOf(p.eventId); const itens = Object.entries(p.itens).map(([id, q]) => `${q} ${CAT[id].nome.toLowerCase()}`).join(', ');
      ns.push({ id:'prom-' + p.id, ic:'shopping-basket', tom:'y', t:`${esc(p.nome)} vai levar alimentos`, d:`${itens}${e ? ` para ${esc(e.titulo)}` : ''}.`, q:haPouco(p.em, 'ontem'), ir:{ r:'o-evento', ev:p.eventId } });
    });
    futuros().filter(e => e.orgId === o.id).forEach(e => {
      const n = inscritosTotal(e), l = vagasLivres(e);
      if (l === 0) ns.push({ id:'lot-' + e.id, ic:'circle-check', tom:'g', t:'Ação lotada', d:`Todas as vagas de ${esc(e.titulo)} foram preenchidas.`, q:'hoje', ir:{ r:'o-evento', ev:e.id } });
      else if (n) ns.push({ id:`insc-${e.id}-${n}`, ic:'users', tom:'g', t:`${plural(n, 'voluntário inscrito', 'voluntários inscritos')}`, d:`${esc(e.titulo)}. ${cap(fmtCurta(e.data))}, ${plural(l, 'vaga livre', 'vagas livres')}.`, q:'hoje', ir:{ r:'o-evento', ev:e.id } });
    });
  }
  return ns;
}
const naoLidas = ns => ns.filter(n => !S.lidas.includes(n.id)).length;
function bellHtml() {
  const ns = notifs(), novas = naoLidas(ns);
  const item = n => { const nova = !S.lidas.includes(n.id); const ir = n.ir;
    return `<li><button type="button" class="np-i${nova ? ' new' : ''}" data-a="notif-go" data-n="${n.id}" data-r="${ir.r}"${ir.ev ? ` data-ev="${ir.ev}"` : ''}${ir.org ? ` data-org="${ir.org}" data-item="${ir.item}"` : ''}>
      <span class="np-ic ${n.tom}">${icon(n.ic, 20)}</span><span class="np-b"><b>${n.t}</b><span>${n.d}</span><small>${n.q}</small></span>${nova ? '<span class="np-dot"><span class="sr">Não lida</span></span>' : ''}</button></li>`; };
  const pop = S.notif ? `<div class="notif-pop" id="notif-pop" role="dialog" aria-labelledby="np-t" tabindex="-1">
      <div class="np-h"><h2 class="h-sm" id="np-t">Notificações</h2>${novas ? `<button type="button" class="np-all" data-a="notif-lidas">Marcar como lidas</button>` : ''}</div>
      ${ns.length ? `<ul class="np-list">${ns.map(item).join('')}</ul>` : `<p class="np-empty">${icon('circle-check',20)}<span>Tudo em dia por aqui.</span></p>`}
    </div>` : '';
  return `<button class="bell" data-a="notif" aria-haspopup="dialog" aria-expanded="${!!S.notif}" aria-controls="notif-pop" aria-label="Notificações${novas ? `, ${plural(novas, 'nova', 'novas')}` : ''}">${icon('bell',24)}${novas ? `<span class="badge-n num" aria-hidden="true">${novas > 9 ? '9+' : novas}</span>` : ''}</button>${pop}`;
}
function taField(o) {
  const v = getPath(o.bind) ?? ''; const k = o.key || o.bind.split('.').pop(); const id = 'f-' + o.bind.replace(/\./g, '-');
  return `<div class="field${S.errors[k] ? ' err' : ''}">
    <label for="${id}">${o.label}</label>
    <textarea class="ta" id="${id}" data-bind="${o.bind}" rows="${o.rows || 3}" placeholder="${esc(o.ph || '')}"${describedBy(o, k)}>${esc(v)}</textarea>
    ${helper(o, k)}
  </div>`;
}
/* Resumo no topo do formulário quando o envio falha */
function errSummary(verbo = 'continuar') {
  const n = Object.keys(S.errors).length; if (!n) return '';
  return `<div class="err-sum" role="alert">${icon('circle-alert',20)}<span>${n === 1 ? `Revise o campo destacado para ${verbo}.` : `Revise os ${n} campos destacados para ${verbo}.`}</span></div>`;
}
function groupHead(o, k) { return `<span class="grp-h"><span class="lbl" id="lbl-${k}">${o.label}</span>${o.hint ? `<span class="hint">${o.hint}</span>` : ''}</span>`; }
/* Lista de opções de escolha única (rádio) */
function radioList(o) {
  const v = getPath(o.path); const k = o.key || o.path.split('.').pop();
  return `<div class="field grp${S.errors[k] ? ' err' : ''}">${groupHead(o, k)}
    <div class="rows" role="radiogroup" aria-labelledby="lbl-${k}">
      ${o.options.map(x => `<button type="button" class="rrow" role="radio" aria-checked="${v === x}" data-a="pick" data-p="${o.path}" data-v="${esc(x)}" data-k="${k}"><span class="rd"></span><span>${esc(x)}</span></button>`).join('')}
    </div>${errMsg(k)}</div>`;
}
/* Lista de opções de escolha múltipla, com ícone e descrição */
function checkList(o) {
  const v = getPath(o.path) || []; const k = o.key || o.path.split('.').pop();
  return `<div class="field grp${S.errors[k] ? ' err' : ''}">${groupHead(o, k)}
    <div class="rows" role="group" aria-labelledby="lbl-${k}">
      ${o.options.map(x => { const on = v.includes(x.v); return `<button type="button" class="crow" role="checkbox" aria-checked="${on}" data-a="toggle" data-p="${o.path}" data-v="${esc(x.v)}" data-k="${k}"><span class="ci">${icon(x.ic,22)}</span><span class="ct"><b>${esc(x.v)}</b><small>${esc(x.d)}</small></span><span class="cb">${on ? icon('check',16) : ''}</span></button>`; }).join('')}
    </div>${errMsg(k)}</div>`;
}
function chipsField(o) {
  const v = getPath(o.path); const k = o.key || o.path.split('.').pop();
  const on = x => o.multi ? (v || []).includes(x) : v === x;
  return `<div class="field${S.errors[k] ? ' err' : ''}">
    <span class="lbl" id="lbl-${k}">${o.label}</span>
    <div class="chips" role="group" aria-labelledby="lbl-${k}">
      ${o.options.map(x => `<button class="chip" aria-pressed="${on(x)}" data-a="${o.multi ? 'toggle' : 'pick'}" data-p="${o.path}" data-v="${esc(x)}" data-k="${k}">${on(x) ? icon('check',15) : ''}${esc(x)}</button>`).join('')}
    </div>
    ${o.hint ? `<span class="hint">${o.hint}</span>` : ''}${errMsg(k)}
  </div>`;
}
function optCard({ checked, action, data = '', ic, title, sub, disabled }) {
  return `<button class="opt${ic ? '' : ' noic'}" role="radio" aria-checked="${!!checked}" data-a="${action}" ${data}${disabled ? ' disabled' : ''}>
    ${ic ? `<span class="ic">${icon(ic,22)}</span>` : ''}<span><b>${title}</b>${sub ? `<small>${sub}</small>` : ''}</span><span class="radio"></span>
  </button>`;
}
function seal() { return `<span class="seal">${icon('check',32)}</span>`; }
function qrSvg(seed) {
  const N = 25; let st = hash(seed) || 1;
  const rnd = () => { st ^= st << 13; st >>>= 0; st ^= st >>> 17; st ^= st << 5; st >>>= 0; return st / 4294967296; };
  const inF = (x, y) => (x < 8 && y < 8) || (x >= N - 8 && y < 8) || (x < 8 && y >= N - 8);
  let r = '';
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) if (!inF(x, y) && rnd() < 0.48) r += `<rect x="${x}" y="${y}" width="1" height="1"/>`;
  const f = (x, y) => `<rect x="${x}" y="${y}" width="7" height="7" fill="#111"/><rect x="${x+1}" y="${y+1}" width="5" height="5" fill="#FFF"/><rect x="${x+2}" y="${y+2}" width="3" height="3" fill="#111"/>`;
  return `<svg viewBox="0 0 ${N} ${N}" width="100%" shape-rendering="crispEdges" role="img" aria-label="QR Code ilustrativo"><rect width="${N}" height="${N}" fill="#FFF"/><g fill="#111">${r}</g>${f(0,0)}${f(N-7,0)}${f(0,N-7)}</svg>`;
}
const pixCode = (cents, org) => `00020126360014BR.GOV.BCB.PIX0114MEZADEMONSTRA520400005303986540${String((cents/100).toFixed(2)).length}${(cents/100).toFixed(2)}5802BR5909MEZA DEMO6008BRASILIA62070503${hash(org.id) % 1000}6304DEMO`;

/* ================= histórias (MoSCoW do grupo) ================= */
const STORIES = [
  {m:'M', g:true, t:'Cadastro de voluntário', s:'Como pessoa que quer ajudar, quero me cadastrar com meus dados e dizer como desejo ajudar.', k:'s-vol'},
  {m:'M', t:'Publicar a próxima ação', s:'Como dono de uma organização, quero informar aos voluntários quando será a próxima ação.', k:'s-pub'},
  {m:'M', g:true, t:'Agenda dos parceiros', s:'Como administrador do programa social, quero ver quando serão os próximos eventos dos parceiros.', k:'s-adm'},
  {m:'S', t:'Cadastro de organização', s:'Como dono de uma organização que doa alimentos, quero me cadastrar para me tornar parceiro.', k:'s-org'},
  {m:'S', g:true, t:'Escolher posto e horário', s:'Como voluntário, quero escolher horário, local e posto para ajudar de fato.', k:'s-posto'},
  {m:'S', g:true, t:'Doação em dinheiro', s:'Como voluntário, quero doar dinheiro por Pix, cartão ou em espécie.', k:'s-din'},
  {m:'C', t:'Doação de alimentos', s:'Como voluntário, quero escolher qual alimento doar, e quanto, para o MEZA ou para uma ação específica.', k:'s-ali'},
  {m:'W', t:'Programa unificado', s:'Como dono do programa social, quero unir todo o programa de doação sem depender de outras organizações.', k:null}
];
const MOS_LABEL = {M:'Must have', S:'Should have', C:'Could have', W:'Won’t have agora'};
const MOS_NOME = {M:'Essencial', S:'Importante', C:'Desejável', W:'Fora do escopo'};
const flagIc = st => st.g ? '' : `<span class="flag" title="Acrescentada no protótipo, prioridade a confirmar" aria-label="Acrescentada no protótipo">${icon('flag',16)}</span>`;
/* Roteiro completo: histórias agrupadas por prioridade */
function storiesHtml() {
  return ['M','S','C','W'].map(m => { const l = STORIES.filter(st => st.m === m); return `<section class="st-grp">
    <div class="st-gh"><span class="mos ${m}" title="${MOS_LABEL[m]}">${m}</span><h2 class="h-md">${MOS_NOME[m]}</h2><span class="sec-meta">${plural(l.length,'história','histórias')}</span></div>
    <div class="rule-list">${l.map(st => `<div class="story"><div class="story-t"><b>${st.t}</b>${flagIc(st)}</div><p>${st.s}</p>${st.k ? `<button class="link-ic start" data-a="story" data-k="${st.k}"><span>Abrir no app</span>${icon('arrow-right',16)}</button>` : `<small>Fora do escopo desta versão.</small>`}</div>`).join('')}</div>
  </section>`; }).join('');
}
/* Lista compacta do painel do computador */
function storiesMini() {
  return `<div class="rule-list">${STORIES.map(st => `<div class="st-mini${st.k ? '' : ' off'}"><span class="mos sm ${st.m}" title="${MOS_LABEL[st.m]}">${st.m}</span><span class="st-mini-t">${st.t}${flagIc(st)}</span>${st.k ? `<button class="sec-link ic" data-a="story" data-k="${st.k}">Abrir${icon('arrow-right',16)}</button>` : '<small>Fora do escopo</small>'}</div>`).join('')}</div>`;
}
const ROLE_IC = { vol:'user', org:'house-heart', admin:'shield-check' };
function roleSeg(ic = false) {
  const cur = S.role;
  return `<div class="seg${ic ? ' ic' : ''}" role="group" aria-label="Ver o app como">
    ${[['vol','Voluntário'],['org','Organização'],['admin','Administrador']].map(([r, l]) => `<button data-a="role" data-r="${r}" aria-pressed="${cur === r}">${ic ? icon(ROLE_IC[r],16) : ''}${l}</button>`).join('')}
  </div>`;
}
function protoBlock() {
  return `<section class="sec tight">${secHead('Protótipo')}
    <div class="rule-list">
      <div class="proto-as"><span class="label-14">Ver o app como</span>${roleSeg()}</div>
      <button class="set-r" data-a="go" data-r="roteiro">${icon('map',20)}<span>Roteiro das histórias de usuário</span>${icon('chevron-right',20)}</button>
      <button class="set-r danger" data-a="reset">${icon('rotate-ccw',20)}<span>${S.confirm === 'reset' ? 'Toque de novo para apagar tudo' : 'Recomeçar a demonstração'}</span></button>
    </div>
    <p class="note-r">${icon('info',16)}<span>Dados de exemplo. Nenhum pagamento é processado e nada é enviado.</span></p>
  </section>`;
}

/* ================= telas ================= */
const SCREENS = {};

SCREENS.welcome = () => ({
  top:`<section class="hero welcome-hero gut wide">
      <div class="logo" aria-label="meza">meza</div>
      <p class="slogan">A mesa é de todos.</p>
      <p class="values">Mobilização · Empatia · Zelo · Alimentação</p>
    </section><div class="gingham" aria-hidden="true"></div>`,
  cls:'wide',
  body:`<div class="head"><h2 class="h-lg">Como você quer participar?</h2><p class="muted">O MEZA conecta quem quer ajudar a organizações que levam comida a quem precisa.</p></div>
    <div class="paths">
      <button class="path" data-a="start-vol"><span class="tile">${icon('hand-heart',24)}</span><span><b>Quero me voluntariar</b><small>Doe alimentos, dinheiro ou seu tempo em ações perto de você.</small></span>${icon('chevron-right',22)}</button>
      <button class="path t" data-a="start-org"><span class="tile">${icon('house-heart',24)}</span><span><b>Quero cadastrar minha organização</b><small>Receba voluntários e doações para as entregas da sua ONG ou empresa.</small></span>${icon('chevron-right',22)}</button>
    </div>
    <div class="stack">
      <p class="muted label-14">Só quer conhecer? Explore sem cadastro como:</p>
      <div class="text-links">
        <button class="text-link" data-a="role" data-r="vol">Voluntário</button>
        <button class="text-link" data-a="role" data-r="org">Organização</button>
        <button class="text-link" data-a="role" data-r="admin">Administrador</button>
      </div>
    </div>
    <button class="story-link start" data-a="go" data-r="roteiro">${icon('map',16)}<span>Ver roteiro das histórias de usuário</span></button>`
});

const FREQS = ['Toda semana','A cada 15 dias','Uma vez por mês','Quando eu puder'];
const AJUDAS = [
  { v:'Cozinhar nas ações', ic:'cooking-pot', d:'Prepare refeições e monte cestas com a equipe da organização.' },
  { v:'Doar alimentos', ic:'shopping-basket', d:'Leve itens não perecíveis aos pontos de coleta.' },
  { v:'Doar dinheiro', ic:'hand-coins', d:'Contribua via Pix com as organizações.' }
];
const prefill = a => `<button class="link-ic start" data-a="${a}">${icon('wand-sparkles',16)}<span>Preencher com dados de exemplo</span></button>`;
const formHead = (step, title, sub) => `<div class="head form"><p class="eyebrow step">Etapa ${step} de 2</p><h2 class="h-lg">${title}</h2>${Object.keys(S.errors).length ? '' : `<p class="muted">${sub}</p>`}</div>${errSummary()}`;

SCREENS['vol-cad-1'] = () => ({
  title:'Cadastro de voluntário', steps:[1, 2],
  body:`${formHead(1, 'Informações básicas', 'Usamos esses dados para te avisar sobre ações perto de você.')}
    <div class="fields">
      ${field({label:'Nome completo', bind:'volDraft.nome', ph:'Ex.: Maria da Silva', auto:'name', check:true})}
      ${field({label:'E-mail', bind:'volDraft.email', type:'email', ph:'nome@email.com', auto:'email', mode:'email', check:true})}
      ${field({label:'Telefone', bind:'volDraft.telefone', type:'tel', ph:'(61) 99999-9999', auto:'tel', mask:'tel', mode:'tel', check:true, hint:'Com DDD. Usamos só para avisos sobre as ações.'})}
      ${selectField({label:'Gênero', bind:'volDraft.genero', ph:'Selecione', options:['Feminino','Masculino','Não binário','Prefiro não informar']})}
      ${field({label:'Data de nascimento', bind:'volDraft.nascimento', type:'date', max:iso(HOJE), check:true})}
      ${field({label:'Endereço', bind:'volDraft.endereco', ph:'Rua, número e bairro', auto:'street-address', hint:'Toque no ícone para usar sua localização atual.', action:{a:'locate', icon:'locate-fixed', label:'Usar minha localização atual'}})}
    </div>
    ${prefill('fill-vol1')}`,
  foot:`<button class="btn btn-primary btn-block" data-a="vol-next">Continuar</button>`
});

SCREENS['vol-cad-2'] = () => ({
  title:'Cadastro de voluntário', steps:[2, 2],
  body:`${formHead(2, 'Sobre seu voluntariado', 'Isso ajuda as organizações a te chamarem para as ações certas.')}
    ${taField({label:'Já fez voluntariado antes? Onde?', bind:'volDraft.exp', ph:'Ex.: mutirões na escola, campanha do agasalho…', hint:'Se for sua primeira vez, tudo bem. Conte para a gente.'})}
    ${taField({label:'O que te motivou a se voluntariar?', bind:'volDraft.motivacao', ph:'Conte em poucas palavras'})}
    ${radioList({label:'Com que frequência você quer ajudar?', hint:'Escolha uma opção.', path:'volDraft.freq', options:FREQS})}
    ${checkList({label:'Como você quer ajudar?', hint:'Escolha uma ou mais opções.', path:'volDraft.ajudas', options:AJUDAS})}
    ${prefill('fill-vol2')}`,
  foot:`<button class="btn btn-primary btn-block" data-a="vol-finish">Finalizar cadastro</button>`
});

SCREENS['vol-cad-ok'] = () => {
  const d = HOJE;
  const passo = (st, t, s) => `<li class="tl-i ${st}"><span class="tl-m"><span class="tl-dot">${st === 'ok' ? icon('check',14) : ''}</span><span class="tl-line"></span></span><span class="tl-t"><b>${t}</b><small>${s}</small></span></li>`;
  const nome = first(S.user?.nome);
  return {
    top:`<div class="gingham" aria-hidden="true"></div>`,
    cls:'success wide',
    body:`<div class="done left">${seal()}<h2 class="h-xl">Cadastro enviado!</h2><p class="muted">Obrigado${nome ? ', ' + esc(nome) : ''}. Agora vamos validar seus dados e te avisar por e-mail.</p></div>
      <ol class="tl" aria-label="Andamento do cadastro">
        ${passo('ok', 'Cadastro enviado', `Hoje, ${d.getDate()} de ${MESL[d.getMonth()]}`)}
        ${passo('now', 'Validação dos dados', 'Em até 7 dias. Você recebe o resultado por e-mail.')}
        ${passo('next', 'Pronto para ajudar', 'Você passa a receber convites para ações perto de você.')}
      </ol>
      <section class="meanwhile"><h3 class="label-14">Enquanto isso, você já pode:</h3>
        <button class="mw" data-a="vol-explore" data-r="v-eventos">${icon('calendar-days',20)}<span>Ver as próximas ações</span></button>
        <button class="mw" data-a="vol-explore" data-r="v-eventos">${icon('ticket',20)}<span>Reservar uma vaga em uma ação</span></button>
        <button class="mw" data-a="vol-explore" data-r="v-doar">${icon('hand-coins',20)}<span>Fazer uma doação</span></button>
      </section>`,
    foot:`<button class="btn btn-primary btn-block" data-a="vol-explore">Explorar o MEZA ${icon('arrow-right',20)}</button>`
  };
};

const DISTRIBUI = ['Cestas básicas','Refeições prontas','Lanches','Hortifrúti'];
SCREENS['org-cad'] = () => {
  const d = S.orgDraft;
  return {
    title:'Cadastro de organização', cls:'g24',
    body:`<div class="head form"><h2 class="h-lg">Dados da organização</h2><p class="muted">Nossa equipe confere as informações antes de liberar o perfil para os voluntários.</p></div>
      ${errSummary('enviar')}
      <section class="fsec"><h3 class="h-md">Sobre a organização</h3>
        ${field({label:'Nome da organização', bind:'orgDraft.nome', ph:'Ex.: Cozinha Solidária do Gama', auto:'organization', check:true})}
        ${field({label:'CNPJ', bind:'orgDraft.cnpj', ph:'00.000.000/0000-00', mask:'cnpj', mode:'numeric', hint:'Usamos só para confirmar que a organização existe.', check:true})}
        ${radioList({label:'Tipo de organização', path:'orgDraft.tipo', options:['ONG','Empresa','Coletivo comunitário','Outro']})}
      </section>
      <section class="fsec"><h3 class="h-md">Contato</h3>
        ${field({label:'Nome do responsável', bind:'orgDraft.resp', ph:'Quem responde pela organização', auto:'name', check:true})}
        ${field({label:'E-mail de contato', bind:'orgDraft.email', type:'email', ph:'contato@organizacao.org', mode:'email', auto:'email', check:true})}
        ${field({label:'Telefone', bind:'orgDraft.tel', type:'tel', ph:'(61) 3333-3333', mask:'tel', mode:'tel', auto:'tel', check:true})}
        ${field({label:'Endereço da sede', bind:'orgDraft.endereco', ph:'Rua, número e bairro', hint:'A equipe do MEZA usa este endereço para levar as doações até vocês.', action:{ a:'org-locate', icon:'locate-fixed', label:'Usar minha localização' }, check:true})}
      </section>
      <section class="fsec"><h3 class="h-md">O que vocês fazem</h3>
        ${taField({label:'O que a organização faz e quem atende?', bind:'orgDraft.sobre', ph:'Ex.: servimos 200 refeições por dia para famílias do Gama.'})}
        <div class="field grp${S.errors.distribui ? ' err' : ''}"><span class="grp-h"><span class="lbl" id="lbl-distribui">O que vocês distribuem?</span><span class="hint">Escolha uma ou mais opções.</span></span>
          <div class="ck-grid" role="group" aria-labelledby="lbl-distribui">${DISTRIBUI.map(n => { const on = d.distribui.includes(n); return `<button type="button" class="ck" role="checkbox" aria-checked="${on}" data-a="toggle" data-p="orgDraft.distribui" data-v="${n}" data-k="distribui"><span class="cb">${on ? icon('check',16) : ''}</span><span>${n}</span></button>`; }).join('')}</div>
          ${errMsg('distribui')}</div>
        ${prefill('fill-org')}
      </section>`,
    foot:`<button class="btn btn-primary btn-block" data-a="org-submit">Enviar cadastro</button>`
  };
};

SCREENS['org-cad-ok'] = () => {
  const o = myOrg(); const d = HOJE;
  const passo = (st, t, sub) => `<li class="tl-i ${st}"><span class="tl-m"><span class="tl-dot">${st === 'ok' ? icon('check',14) : ''}</span><span class="tl-line"></span></span><span class="tl-t"><b>${t}</b><small>${sub}</small></span></li>`;
  return {
    top:`<div class="gingham" aria-hidden="true"></div>`,
    cls:'success wide',
    body:`<div class="done left">${seal()}<h2 class="h-xl">Cadastro enviado!</h2><p class="muted">Nossa equipe valida os dados da ${esc(o?.nome || 'organização')} em até 7 dias.</p></div>
      <ol class="tl" aria-label="Andamento do cadastro">
        ${passo('ok', 'Cadastro enviado', `Hoje, ${d.getDate()} de ${MESL[d.getMonth()]}`)}
        ${passo('now', 'Validação dos dados', 'Em até 7 dias. Você recebe o resultado por e-mail.')}
        ${passo('next', 'Perfil liberado', 'Suas ações passam a aparecer para os voluntários.')}
      </ol>
      <section class="meanwhile"><h3 class="label-14">Enquanto isso, você já pode:</h3>
        <button class="mw" data-a="org-enter" data-r="o-novo-evento">${icon('circle-plus',20)}<span>Preparar a próxima ação</span></button>
        <button class="mw" data-a="org-enter" data-r="o-perfil">${icon('building-2',20)}<span>Completar o perfil da organização</span></button>
      </section>`,
    foot:`<button class="btn btn-primary btn-block" data-a="org-enter">Ir para o painel ${icon('arrow-right',20)}</button>`
  };
};

/* ---------- voluntário ---------- */
/* Linha de ação: data à esquerda, organização, título, horário, local e vagas */
const TIPO_CURTO = { 'Montagem de cestas':'Cestas', 'Preparo de refeições':'Marmitas', 'Triagem de alimentos':'Triagem', 'Lanche e reforço':'Lanches' };
function vagasLinha(e) {
  if (minhaInsc(e.id)) return `<span class="evr-spots">${icon('circle-check',14)}Você está inscrito</span>`;
  const l = vagasLivres(e);
  return l ? `<span class="evr-spots">${icon('users',14)}${plural(l,'vaga livre','vagas livres')}</span>` : `<span class="evr-spots full">${icon('users',14)}Lotado</span>`;
}
function eventRow(e, route = 'v-evento', ins = null, modo = '') {
  const org = modo === 'org', adm = modo === 'admin';
  const d = toDate(e.data);
  const pendOrg = adm && orgOf(e.orgId).status !== 'aprovada';
  const meta = adm
    ? `<span>${icon('clock-3',14)}${e.inicio}–${e.fim}</span><span>${icon('map-pin',14)}${esc(e.endereco)}</span>${pendOrg ? `<span class="evr-spots pend">${icon('hourglass',14)}Parceiro em validação</span>` : `<span class="evr-spots">${icon('users',14)}${inscritosTotal(e)} de ${vagasTotal(e)} inscritos${e.itens.length ? ' · ' + plural(e.itens.length,'item pedido','itens pedidos') : ''}</span>`}`
    : org
    ? `<span>${icon('clock-3',14)}${e.inicio}–${e.fim}</span><span>${icon('map-pin',14)}${esc(e.endereco)}</span><span class="evr-spots">${icon('users',14)}${inscritosTotal(e)} de ${plural(vagasTotal(e),'vaga preenchida','vagas preenchidas')}</span>`
    : ins
    ? `<span>${icon('clock-3',14)}${e.turnos[ins.turno]} · seu turno</span><span>${icon('map-pin',14)}${esc(e.local)}</span><span class="evr-spots">${icon('circle-check',14)}Inscrito · ${esc(e.postos[ins.posto].nome)}</span>`
    : `<span>${icon('clock-3',14)}${e.inicio}–${e.fim}</span><span>${icon('map-pin',14)}${esc(e.endereco)}</span>${vagasLinha(e)}`;
  return `<button class="evr" data-a="go" data-r="${route}" data-id="${e.id}">
    <span class="evr-date" aria-hidden="true"><span class="w">${SEM[d.getDay()]}</span><span class="d">${d.getDate()}</span><span class="m">${MES[d.getMonth()]}</span></span>
    <span class="evr-b">
      <span class="evr-org">${esc(org ? e.tipo : orgOf(e.orgId).nome)}</span>
      <span class="evr-t">${esc(e.titulo)}</span>
      <span class="evr-meta">${meta}</span>
    </span>
    ${icon('chevron-right',20)}
  </button>`;
}
/* Linha de informação com ícone, valor e linha de apoio */
const info = (ic, main, sub) => `<div class="info-r">${icon(ic,20)}<span><span class="info-m">${main}</span>${sub ? `<small>${sub}</small>` : ''}</span></div>`;
const listaNomes = arr => arr.length < 2 ? arr.join('') : `${arr.slice(0, -1).join(', ')} e ${arr[arr.length - 1]}`;
const duracao = t => { const [a, b] = t.split('–'); const m = toMin(b) - toMin(a); return m % 60 ? `${Math.floor(m / 60)}h${String(m % 60).padStart(2, '0')}` : plural(m / 60, 'hora', 'horas'); };
function turnosResumo(e) {
  if (e.turnos.length < 2) return 'Turno único';
  const ds = e.turnos.map(duracao);
  return ds.every(x => x === ds[0]) ? `${e.turnos.length === 2 ? 'Dois' : e.turnos.length} turnos de ${ds[0]}` : `Turnos ${listaNomes(e.turnos)}`;
}
const secHead = (t, link) => `<div class="sec-h"><h2 class="h-md">${t}</h2>${link || ''}</div>`;

/* Destaque da próxima ação no início do voluntário; S.nextMin minimiza (só o rótulo e o título) */
function nextBox(eb, titulo, meta, id, link) {
  const min = S.nextMin;
  return `<div class="next${min ? ' min' : ''}"><div class="next-h"><p class="next-eb">${eb}</p><button class="next-tog" data-a="next-toggle" aria-expanded="${!min}" aria-controls="next-det" aria-label="${min ? 'Mostrar detalhes da ação' : 'Minimizar'}">${icon('chevron-down',20)}</button></div><p class="next-t">${esc(titulo)}</p>${min ? '' : `<div class="next-det" id="next-det"><p class="next-m">${meta}</p><button class="next-link" data-a="go" data-r="v-evento" data-id="${id}">${link} ${icon('arrow-right',18)}</button></div>`}</div>`;
}

SCREENS['v-home'] = () => {
  const u = S.user; const evs = eventosVoluntario();
  const minhas = S.inscricoes.map(i => ({ i, e: evOf(i.eventId) })).filter(x => x.e && diff(x.e.data) >= 0).sort((a, b) => byDate(a.e, b.e));
  const prox = minhas[0];
  const destId = prox ? prox.e.id : evs[0]?.id;
  let destaque = '';
  if (prox) {
    const e = prox.e, p = e.postos[prox.i.posto];
    destaque = nextBox(`Sua próxima ação · ${rel(e.data)}`, e.titulo, `${cap(fmtCurta(e.data))} · ${e.turnos[prox.i.turno]} · ${esc(p.nome)}`, e.id, 'Ver detalhes');
  } else if (evs[0]) {
    const e = evs[0];
    destaque = nextBox(`Próxima ação perto de você · ${rel(e.data)}`, e.titulo, `${cap(fmtCurta(e.data))} · ${e.inicio}–${e.fim} · ${esc(e.endereco)}`, e.id, 'Ver vagas');
  }
  // os dois itens com menor cobertura da meta
  const needs = [];
  orgsComNecessidade().forEach(o => S.needs[o.id].forEach(n => needs.push({ o, n, r:(n.atual + n.prom) / n.meta })));
  needs.sort((a, b) => a.r - b.r);
  const needRow = ({ o, n, r }) => { const c = CAT[n.id]; const falta = Math.max(0, n.meta - n.atual - n.prom);
    return `<div class="need-r"><div class="need-top"><span><b>${c.nome}</b><small>${esc(o.nome)} · ${c.un}</small></span><button class="btn-2" data-a="food-start" data-org="${o.id}" data-item="${n.id}" aria-label="Doar ${c.nome.toLowerCase()} para ${esc(o.nome)}">Doar</button></div>${prog(n.atual + n.prom, n.meta, 0, 'thin')}<small class="num">${Math.round(r * 100)}% da meta · faltam ${falta} ${c.pl}</small></div>`; };
  const pend = u.status === 'em_validacao';
  return {
    top:`<section class="hero home-hero">
      <div class="top"><span class="logo">meza</span>${bellHtml()}</div>
      <div class="hero-c gut wide">
        <div class="greet-b"><p class="greet">Olá, ${esc(first(u.nome))}</p><p class="greet-s">Que bom ter você na mesa.</p></div>
        ${destaque}
      </div>
    </section><div class="gingham" aria-hidden="true"></div>`,
    cls:'home',
    body:`${pend ? `<div class="notice">${icon('hourglass',20)}<span><b>Cadastro em validação</b><span class="small">Resultado em até 7 dias. Enquanto isso, você já pode reservar vagas e doar.</span></span></div>` : ''}
      ${needs.length ? `<section class="sec tight">${secHead('Quem mais precisa agora', '<button class="sec-link" data-a="food-start">Ver todas</button>')}<div class="rule-list">${needs.slice(0, 2).map(needRow).join('')}</div></section>` : ''}
      <section class="sec tight">${secHead('Próximas ações', '<button class="sec-link" data-a="tab" data-r="v-eventos">Ver todas</button>')}
        ${evs.length ? `<div class="rule-list">${evs.filter(e => e.id !== destId).slice(0, 2).map(e => eventRow(e)).join('')}</div>` : `<p class="muted">Nenhuma ação marcada por enquanto.</p>`}
      </section>`,
    tabs:'vol', tabOn:'v-home'
  };
};

SCREENS['v-eventos'] = () => {
  const evs = eventosVoluntario();
  const tipos = ['Todas', ...TIPOS_EV.filter(t => evs.some(e => e.tipo === t))];
  if (!tipos.includes(S.filtro)) S.filtro = 'Todas';
  const lista = evs.filter(e => S.filtro === 'Todas' || e.tipo === S.filtro);
  const grupos = [['Esta semana', lista.filter(e => diff(e.data) <= 7)], ['Mais adiante', lista.filter(e => diff(e.data) > 7)]].filter(g => g[1].length);
  return {
    top:`<header class="page-h gut"><div class="head form"><h1 class="h-lg">Próximas ações</h1><p class="muted">Escolha uma ação para ver os postos e horários disponíveis.</p></div>
      <div class="ftabs" role="group" aria-label="Filtrar por tipo">${tipos.map(t => `<button class="ftab" aria-pressed="${S.filtro === t}" data-a="filtro" data-v="${t}">${TIPO_CURTO[t] || t}</button>`).join('')}</div></header>`,
    cls:'after-tabs',
    body:grupos.map(([g, l]) => `<section class="grp-ev"><h2 class="grp-l">${g}</h2><div class="rule-list open">${l.map(e => eventRow(e)).join('')}</div></section>`).join('') || `<p class="muted">Nenhuma ação deste tipo agora. Veja <button class="link" data-a="filtro" data-v="Todas">todas as ações</button>.</p>`,
    tabs:'vol', tabOn:'v-eventos'
  };
};

/* Linha de escolha única com título e descrição opcional */
function choiceRows(label, hint, rows) {
  return `<div class="field grp"><span class="grp-h"><span class="lbl">${label}</span>${hint ? `<span class="hint">${hint}</span>` : ''}</span>
    <div class="rows" role="radiogroup" aria-label="${label}">${rows.map(r => `<button type="button" class="rrow tall" role="radio" aria-checked="${!!r.on}" data-a="pick" data-p="${r.p}" data-v="${r.v}" data-n="1"${r.off ? ' disabled' : ''}><span class="rd"></span><span class="rt"><span>${r.t}</span>${r.d ? `<small${r.warn ? ' class="warn"' : ''}>${r.d}</small>` : ''}</span></button>`).join('')}</div></div>`;
}

SCREENS['v-evento'] = () => {
  const e = evOf(S.params.id); if (!e) return SCREENS['v-eventos']();
  const o = orgOf(e.orgId); const ins = minhaInsc(e.id);
  S.sel[e.id] = S.sel[e.id] || { posto:null, turno:null };
  const sel = S.sel[e.id];
  const livres = vagasLivres(e), conf = inscritosTotal(e);
  const nomesItens = e.itens.map((i, k) => k ? CAT[i].nome.toLowerCase() : CAT[i].nome);
  const itens = e.itens.length ? `<div class="field grp"><span class="grp-h"><span class="lbl">Itens que a ação precisa</span><span class="hint">${listaNomes(nomesItens)}.</span></span>
      <div class="rows"><button type="button" class="crow" data-a="food-start" data-ev="${e.id}"><span class="ci">${icon('shopping-basket',22)}</span><span class="ct"><b>Doar estes itens</b><small>Entregue na sede do MEZA ou num ponto de coleta. A equipe leva até a ação.</small></span>${icon('chevron-right',20)}</button></div></div>` : '';
  let aviso = '', escolha = '', foot;
  if (ins) {
    const p = e.postos[ins.posto]; const cancel = S.confirm === 'cancel-' + e.id;
    aviso = `<div class="notice g">${icon('circle-check',20)}<span><b>Você está inscrito</b><span class="small">${esc(p.nome)} · ${e.turnos[ins.turno]}${S.user.status === 'em_validacao' ? '. A vaga fica reservada até a aprovação do seu cadastro.' : '. Chegue 15 minutos antes do seu turno.'}</span></span></div>`;
    foot = `<button class="btn ${cancel ? 'btn-warn' : 'btn-cancel'} btn-block" data-a="cancel-insc" data-id="${e.id}">${cancel ? 'Toque de novo para cancelar' : 'Cancelar inscrição'}</button>`;
  } else {
    escolha = `${choiceRows('Escolha seu posto', 'Cada posto cuida de uma parte da ação.', e.postos.map((p, i) => { const l = p.vagas - p.inscritos; return { p:`sel.${e.id}.posto`, v:i, on:sel.posto === i, t:esc(p.nome), d:l <= 0 ? 'Sem vagas' : l === 1 ? 'Última vaga' : `${l} vagas livres de ${p.vagas}`, warn:l === 1, off:l <= 0 }; }))}
      ${choiceRows('Escolha o turno', e.turnos.length > 1 ? 'Escolha um dos turnos.' : 'Esta ação tem um turno só.', e.turnos.map((t, i) => ({ p:`sel.${e.id}.turno`, v:i, on:sel.turno === i, t })))}`;
    const ok = sel.posto !== null && sel.turno !== null;
    foot = livres === 0 ? `<button class="btn btn-primary btn-block" disabled>Ação lotada</button>`
      : `<span class="hint${ok ? ' sel' : ''}">${ok ? `${esc(e.postos[sel.posto].nome)} · ${e.turnos[sel.turno]}` : 'Escolha um posto e um turno para reservar.'}</span><button class="btn btn-primary btn-block" data-a="inscrever" data-id="${e.id}" ${ok ? '' : 'disabled'}>Reservar vaga</button>`;
  }
  const confTxt = !conf ? 'Seja a primeira pessoa a confirmar' : ins ? (conf === 1 ? 'Só você confirmou até agora' : `${conf} pessoas confirmadas, incluindo você`) : plural(conf, 'pessoa já confirmou', 'pessoas já confirmaram');
  return {
    title:'Detalhes da ação',
    body:`<div class="head form"><p class="eyebrow step">${esc(o.nome)}</p><h2 class="h-lg">${esc(e.titulo)}</h2></div>
      ${aviso}
      <div class="info">
        ${info('calendar', cap(fmtLonga(e.data)), cap(rel(e.data)))}
        ${info('clock-3', `${e.inicio}–${e.fim}`, turnosResumo(e))}
        ${info('map-pin', esc(e.local), e.endereco !== e.local ? esc(e.endereco) : '')}
        ${info('users', livres ? `${plural(livres,'vaga livre','vagas livres')} de ${vagasTotal(e)}` : 'Todas as vagas preenchidas', confTxt)}
      </div>
      <div class="about"><p>${esc(e.desc)}</p>${e.nota ? `<p class="note">${icon('info',16)}<span>${esc(e.nota)}</span></p>` : ''}</div>
      ${escolha}
      ${itens}`,
    foot
  };
};

SCREENS['v-inscricao-ok'] = () => {
  const e = evOf(S.params.id); const ins = minhaInsc(e.id); const p = e.postos[ins.posto]; const o = orgOf(e.orgId);
  const pend = S.user.status === 'em_validacao';
  return {
    top:`<div class="gingham" aria-hidden="true"></div>`,
    cls:'success wide',
    body:`<div class="done left">${seal()}<h2 class="h-xl">${pend ? 'Vaga reservada!' : 'Inscrição confirmada!'}</h2><p class="muted">${pend ? 'Ela é confirmada assim que seu cadastro for aprovado. A organização já recebeu seu nome.' : `A ${esc(o.nome)} já recebeu seu nome. Chegue 15 minutos antes do seu turno.`}</p></div>
      <section class="res-sum"><h3 class="sum-t">${esc(e.titulo)}</h3>
        <div class="info">
          ${info('calendar', cap(fmtLonga(e.data)), cap(rel(e.data)))}
          ${info('clock-3', e.turnos[ins.turno], 'Seu turno')}
          ${info('hand-helping', esc(p.nome), 'Seu posto')}
          ${info('map-pin', esc(e.local), esc(e.endereco))}
        </div>
        <button class="link-ic start" data-a="ics" data-id="${e.id}">${icon('calendar-plus',18)}<span>Adicionar ao calendário do celular</span></button>
      </section>`,
    foot:`<button class="btn btn-primary btn-block" data-a="tab" data-r="v-perfil">Ver minha agenda</button><button class="btn-text" data-a="tab" data-r="v-home">Voltar ao início</button>`
  };
};

SCREENS['v-doar'] = () => {
  const hist = S.doacoes.slice().reverse().slice(0, 3);
  return {
    top:`<header class="page-h gut"><div class="head form"><h1 class="h-lg">Doar</h1><p class="muted">Escolha como você quer ajudar hoje.</p></div></header>`,
    cls:'after-tabs g36',
    body:`<div class="paths">
        <button class="path t" data-a="food-start"><span class="tile">${icon('shopping-basket',24)}</span><span><b>Doar alimentos</b><small>Para o MEZA ou para uma ação. Escolha os itens e a quantidade.</small></span>${icon('chevron-right',22)}</button>
        <button class="path" data-a="don-start"><span class="tile">${icon('hand-coins',24)}</span><span><b>Doar dinheiro</b><small>Para o MEZA ou para uma ação. Por Pix, cartão ou em mãos.</small></span>${icon('chevron-right',22)}</button>
      </div>
      ${hist.length ? `<section class="sec tight">${secHead('Suas doações', '<button class="sec-link" data-a="tab" data-r="v-perfil">Ver todas</button>')}<div class="rule-list">${hist.map(doacaoLi).join('')}</div></section>` : ''}`,
    tabs:'vol', tabOn:'v-doar'
  };
};
/* Linha do histórico de doações: ícone, o que foi doado, para quem e quando, e o status com um ponto colorido */
const METODO = { pix:{ ic:'qr-code', txt:'via Pix', nome:'Pix' }, cartao:{ ic:'credit-card', txt:'no cartão', nome:'Cartão' }, dinheiro:{ ic:'banknote', txt:'em espécie', nome:'Dinheiro em mãos' } };
function doacaoLi(d) {
  const o = { nome:destNome(d.dest) };
  const status = (txt, ok) => `<span class="st${ok ? ' ok' : ''}"><i></i>${txt}</span>`;
  if (d.tipo === 'alimentos') {
    const it = Object.entries(d.itens); const tot = it.reduce((a, [, q]) => a + q, 0);
    const nome = it.length === 1 ? `${it[0][1]} ${it[0][1] === 1 ? CAT[it[0][0]].un.split(' ')[0] : CAT[it[0][0]].pl} de ${CAT[it[0][0]].nome.toLowerCase()}` : `${plural(tot,'item','itens')} de alimento`;
    return `<div class="don-r">${icon('shopping-basket',20)}<span><b>${nome}</b><small>${esc(o.nome)} · ${esc(pontoOf(d.entrega).nome)}</small>${status('A entregar')}</span></div>`;
  }
  const m = METODO[d.metodo];
  const quando = d.data;
  return `<div class="don-r">${icon(m.ic,20)}<span><b class="num">${brl(d.cents)} ${m.txt}</b><small>${esc(o.nome)} · ${cap(fmtCurta(quando))}</small>${d.metodo === 'dinheiro' ? status('A entregar') : status('Confirmada', true)}</span></div>`;
}

/* Resumo de valor e organização no topo das etapas 2 e 3 */
const paySum = (right) => `<div class="pay-sum"><span><b class="num">${brl(S.don.cents)}</b><small>${destPara(S.don.dest)}</small></span>${right || '<button class="sec-link" data-a="don-edit">Alterar</button>'}</div>`;
const donHead = (step, title, sub) => `<div class="head form"><p class="eyebrow step">Etapa ${step} de 3</p><h2 class="h-lg">${title}</h2>${sub ? `<p class="muted">${sub}</p>` : ''}</div>`;

SCREENS['v-valor'] = () => {
  const evs = eventosVoluntario();
  if (S.don.dest !== 'meza' && !evs.some(e => e.id === S.don.dest)) S.don.dest = 'meza';
  const c = S.don.cents;
  const reais = brl(c).replace(/^R\$\s?/, '');
  const hint = !c ? '<span class="hint">Escolha ou digite um valor para continuar.</span>' : c < 100 ? '<span class="hint">O valor mínimo é R$ 1,00.</span>' : `<span class="hint sel">${brl(c)} ${destPara(S.don.dest)}</span>`;
  return {
    title:'Doação em dinheiro', steps:[1, 3], cls:'g24',
    body:`${donHead(1, 'Quanto você quer doar?')}
      ${selectField({label:'Para onde vai a doação?', bind:'don.dest', key:'dest', options:destOpcoes(evs), hint:destHint(S.don.dest)})}
      <div class="amt">
        <span class="label-14">Valor da doação</span>
        <p class="amt-v${c ? '' : ' zero'}" aria-live="polite"><span class="cur">R$</span><span class="num">${reais}</span></p>
        <div class="seg-amt" role="group" aria-label="Valores sugeridos">${[1000, 2500, 5000, 10000].map(v => `<button aria-pressed="${c === v}" data-a="quick" data-v="${v}">${brl(v).replace(',00','')}</button>`).join('')}</div>
      </div>
      <div class="pad" role="group" aria-label="Teclado numérico">
        ${[1,2,3,4,5,6,7,8,9].map(n => `<button data-a="key" data-k="${n}">${n}</button>`).join('')}
        <span></span><button data-a="key" data-k="0">0</button><button data-a="key" data-k="b" aria-label="Apagar">${icon('delete',26)}</button>
      </div>`,
    foot:`${hint}<button class="btn btn-primary btn-block" data-a="go" data-r="v-metodo" ${c >= 100 ? '' : 'disabled'}>Continuar</button>`
  };
};

SCREENS['v-metodo'] = () => {
  const m = S.don.metodo;
  const row = (v, d) => `<button type="button" class="rrow tall" role="radio" aria-checked="${m === v}" data-a="pick" data-p="don.metodo" data-v="${v}"><span class="rd"></span><span class="rt"><span>${METODO[v].nome}</span><small>${d}</small></span>${icon(METODO[v].ic,22)}</button>`;
  return {
    title:'Doação em dinheiro', steps:[2, 3], cls:'g24',
    body:`${donHead(2, 'Como você quer pagar?')}
      ${paySum()}
      <div class="rows open" role="radiogroup" aria-label="Forma de pagamento">
        ${row('pix', 'Aprovação na hora, pelo app do seu banco.')}
        ${row('cartao', 'Crédito ou débito.')}
        ${row('dinheiro', 'Entregue na sede do MEZA, na Asa Sul.')}
      </div>`,
    foot:`<button class="btn btn-primary btn-block" data-a="go" data-r="v-checkout">Continuar</button>`
  };
};

const PIX_MIN = 30;
const pixRestante = () => { const s = Math.max(0, PIX_MIN * 60 - Math.floor((Date.now() - (S.don.pixAt || Date.now())) / 1000)); return s ? `Expira em ${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}` : 'Código expirado'; };

SCREENS['v-checkout'] = () => {
  const dest = S.don.dest; const c = S.don.cents; const m = S.don.metodo;
  if (m === 'pix') {
    if (!S.don.pixAt) S.don.pixAt = Date.now();
    const code = pixCode(c, { id:dest }); const ok = S.don.copied;
    return {
      title:'Doação em dinheiro', steps:[3, 3], cls:'g24',
      body:`${donHead(3, 'Pague com Pix', 'Escaneie o QR Code com o app do seu banco.')}
        ${paySum(`<span class="timer">${icon('timer',16)}<span id="pix-timer">${pixRestante()}</span></span>`)}
        <div class="qr-panel"><div class="qr">${qrSvg(dest + c)}</div></div>
        <div class="field"><span class="lbl">Ou use o Pix Copia e Cola</span>
          <button class="inp copy-f${ok ? ' ok' : ''}" data-a="copy-pix" aria-label="Copiar código Pix"><span class="cf-v" id="pixcode">${code}</span>${icon(ok ? 'check' : 'copy',20)}</button>
          ${ok ? `<span class="msg-ok">${icon('circle-check',16)}<span>Código copiado. Cole no app do seu banco.</span></span>` : '<span class="hint">Toque no campo para copiar o código.</span>'}
        </div>
        <p class="note-r">${icon('info',16)}<span>Protótipo: o QR Code e o código são ilustrativos e não geram cobrança.</span></p>`,
      foot:`<span class="hint">Assim que o pagamento cair, avisamos aqui.</span><button class="btn btn-primary btn-block" data-a="don-confirm">Já fiz o pagamento</button>`
    };
  }
  if (m === 'cartao') {
    if (!S.don.card) S.don.card = { num:'4242 4242 4242 4242', nome:S.user ? S.user.nome : '', val:'12/30', cvv:'123' };
    return {
      title:'Doação em dinheiro', steps:[3, 3], cls:'g24',
      body:`${donHead(3, 'Pague com cartão')}${errSummary()}
        ${paySum()}
        <div class="fields">
          ${field({label:'Número do cartão', bind:'don.card.num', key:'num', mode:'numeric', mask:'card', auto:'cc-number', trailIcon:'credit-card'})}
          ${field({label:'Nome impresso no cartão', bind:'don.card.nome', key:'nome', auto:'cc-name'})}
          <div class="grid2">
            ${field({label:'Validade', bind:'don.card.val', key:'val', ph:'MM/AA', mode:'numeric', mask:'mmaa', auto:'cc-exp'})}
            ${field({label:'CVV', bind:'don.card.cvv', key:'cvv', mode:'numeric', mask:'digits', auto:'cc-csc', action:{a:'cvv-help', icon:'circle-help', label:'O que é o CVV?'}})}
          </div>
        </div>
        <p class="note-r">${icon('lock',16)}<span>Ambiente de teste: o pagamento é simulado. No app final, os dados do cartão ficam com o provedor de pagamento, não com o MEZA.</span></p>`,
      foot:`<button class="btn btn-primary btn-block" data-a="don-confirm">Pagar ${brl(c)}</button>`
    };
  }
  /* Em mãos: só na sede do MEZA */
  const sede = PONTOS[0];
  return {
    title:'Doação em dinheiro', steps:[3, 3], cls:'g24',
    body:`${donHead(3, 'Entregue em mãos', 'Leve o valor à sede do MEZA. A equipe confere e te dá um recibo na hora.')}
      ${paySum()}
      <div class="info">
        ${info('map-pin', esc(sede.nome), esc(sede.endereco))}
        ${info('clock-3', esc(sede.horario), 'Horário de atendimento')}
        ${info('receipt', 'Recibo na entrega', 'Fica salvo em Suas doações.')}
      </div>`,
    foot:`<span class="hint sel">${esc(sede.nome)} · ${esc(sede.endereco.split(' – ').pop())}</span><button class="btn btn-primary btn-block" data-a="don-confirm">Confirmar doação</button>`
  };
};

SCREENS['v-doacao-ok'] = () => {
  const d = S.doacoes[S.doacoes.length - 1]; const m = METODO[d.metodo];
  const destE = destEv(d.dest); const o = destE ? orgOf(destE.orgId) : null;
  const esp = d.metodo === 'dinheiro'; const sede = PONTOS[0];
  const para = destE ? `Para ${esc(destE.titulo)} · ${esc(o.nome)}` : 'Para o MEZA';
  const destino = destE ? `${brl(d.cents)} vão para ${esc(destE.titulo)}, da ${esc(o.nome)}.` : `${brl(d.cents)} entram no caixa do MEZA. A equipe direciona para onde a necessidade for maior.`;
  const linhas = esp
    ? `${info('banknote', `${brl(d.cents)} em espécie`, para)}
       ${info('map-pin', esc(sede.nome), esc(sede.endereco))}
       ${info('clock-3', esc(sede.horario), 'Horário de atendimento')}
       ${info('receipt', 'Recibo na entrega', 'Fica salvo em Suas doações.')}`
    : `${info(m.ic, `${brl(d.cents)} ${m.txt}`, para)}
       ${info('receipt', 'Comprovante', 'Fica salvo em Suas doações.')}`;
  return {
    top:`<div class="gingham" aria-hidden="true"></div>`,
    cls:'success wide',
    body:`<div class="done left">${seal()}<h2 class="h-xl">${esp ? 'Doação combinada!' : 'Obrigado pela doação!'}</h2><p class="muted">${esp ? 'Entregue o valor na sede do MEZA. A equipe confirma o recebimento na hora.' : destino}</p></div>
      <section class="res-sum"><div class="info">${linhas}</div>
      </section>`,
    foot:`<button class="btn btn-primary btn-block" data-a="tab" data-r="v-doar">Ver minhas doações</button><button class="btn-text" data-a="tab" data-r="v-home">Voltar ao início</button>`
  };
};

/* Quantidade escolhida, em texto curto: "1 arroz · 2 feijão" */
const itensCurto = qty => Object.entries(qty).filter(([, q]) => q > 0).map(([id, q]) => `${q} ${CAT[id].nome.toLowerCase()}`).join(' · ');
const medida = id => CAT[id].un.split(' ').slice(1).join(' ');

SCREENS['v-alimentos'] = () => {
  const evs = acoesComItens();
  if (S.food.dest !== 'meza' && !evs.some(e => e.id === S.food.dest)) S.food.dest = 'meza';
  const needs = needsFor(S.food.dest);
  const tot = Object.values(S.food.qty).reduce((a, b) => a + b, 0);
  return {
    title:'Doação de alimentos', steps:[1, 2], cls:'g24',
    body:`<div class="head form"><p class="eyebrow step">Etapa 1 de 2</p><h2 class="h-lg">O que você vai levar?</h2><p class="muted">${destEv(S.food.dest) ? 'A lista mostra os itens que esta ação ainda precisa.' : 'A lista soma o que as organizações parceiras ainda precisam.'}</p></div>
      ${selectField({label:'Para onde vai a doação?', bind:'food.dest', key:'dest', options:destOpcoes(evs), hint:destHint(S.food.dest)})}
      <div class="rule-list">
        ${needs.map(n => { const c = CAT[n.id]; const q = S.food.qty[n.id] || 0; const falta = Math.max(0, n.meta - n.atual - n.prom);
          return `<div class="need-r">
            <div class="need-top"><span><b>${c.nome}</b><small>${c.un}</small></span>
              <span class="stp${q ? ' on' : ''}"><button data-a="qty" data-id="${n.id}" data-d="-1" aria-label="Menos ${c.nome}" ${q ? '' : 'disabled'}>${icon('minus',18)}</button><output aria-live="polite">${q}</output><button data-a="qty" data-id="${n.id}" data-d="1" aria-label="Mais ${c.nome}">${icon('plus',18)}</button></span></div>
            ${n.meta ? `${prog(n.atual, n.meta, n.prom + q, 'thin')}
            <small class="num">${n.atual} arrecadados${n.prom ? ` · ${n.prom} a caminho` : ''} · faltam ${falta} ${c.pl}</small>` : ''}
          </div>`; }).join('')}
      </div>`,
    foot:`<span class="hint${tot ? ' sel' : ''}">${tot ? itensCurto(S.food.qty) : 'Escolha a quantidade de cada item.'}</span><button class="btn btn-primary btn-block" data-a="go" data-r="v-alimentos-entrega" ${tot ? '' : 'disabled'}>${tot ? `Continuar com ${plural(tot,'item','itens')}` : 'Continuar'}</button>`
  };
};

SCREENS['v-alimentos-entrega'] = () => {
  /* Os alimentos chegam à sede do MEZA ou a um ponto de coleta parceiro; a equipe leva até a ação ou para onde faltar */
  const destE = destEv(S.food.dest);
  if (!PONTOS.some(x => x.id === S.food.entrega)) S.food.entrega = 'sede';
  const itens = Object.entries(S.food.qty).filter(([, q]) => q > 0);
  const tot = itens.reduce((a, [, q]) => a + q, 0);
  const sel = pontoOf(S.food.entrega);
  const row = x => `<button type="button" class="rrow tall" role="radio" aria-checked="${sel.id === x.id}" data-a="pick" data-p="food.entrega" data-v="${x.id}"><span class="rd"></span><span class="rt"><span>${esc(x.nome)}</span><small>${esc(x.endereco)} · ${esc(x.horario)}</small></span>${icon(x.ic,22)}</button>`;
  return {
    title:'Doação de alimentos', steps:[2, 2], cls:'g24',
    body:`<div class="head form"><p class="eyebrow step">Etapa 2 de 2</p><h2 class="h-lg">Onde você vai entregar?</h2><p class="muted">Leve os itens à sede do MEZA ou a um ponto de coleta parceiro. ${destE ? 'A equipe do MEZA leva tudo até a ação.' : 'A equipe do MEZA leva para onde estiver faltando.'}</p></div>
      <div class="pay-sum col"><div class="pay-row"><span><b>${plural(tot,'item','itens')}</b><small>${destPara(S.food.dest)}</small></span><button class="sec-link" data-a="back">Alterar</button></div>
        <ul class="qty-lines">${itens.map(([id, q]) => `<li><b class="num">${q}×</b><span>${CAT[id].nome} · ${CAT[id].un}</span></li>`).join('')}</ul></div>
      <div class="field grp"><span class="grp-h"><span class="lbl">Sede do MEZA</span></span>
        <div class="rows" role="radiogroup" aria-label="Sede do MEZA">${row(PONTOS[0])}</div></div>
      <div class="field grp"><span class="grp-h"><span class="lbl">Pontos de coleta parceiros</span><span class="hint">Comércios do DF que recebem doações no horário de funcionamento.</span></span>
        <div class="rows" role="radiogroup" aria-label="Pontos de coleta parceiros">${PONTOS.slice(1).map(row).join('')}</div></div>
      <p class="note-r">${icon('package-check',16)}<span>Confira a validade: só aceitamos itens fechados e com pelo menos 30 dias até vencer.</span></p>`,
    foot:`<span class="hint sel">${esc(sel.nome)} · ${esc(sel.endereco.split(' – ').pop())}</span><button class="btn btn-primary btn-block" data-a="food-confirm">Confirmar doação</button>`
  };
};

SCREENS['v-alimentos-ok'] = () => {
  const d = S.doacoes[S.doacoes.length - 1]; const destE = destEv(d.dest); const o = destE ? orgOf(destE.orgId) : null;
  const pt = pontoOf(d.entrega);
  const it = Object.entries(d.itens); const tot = it.reduce((a, [, q]) => a + q, 0);
  return {
    top:`<div class="gingham" aria-hidden="true"></div>`,
    cls:'success wide',
    body:`<div class="done left">${seal()}<h2 class="h-xl">Doação combinada!</h2><p class="muted">Leve os itens ${pt.id === 'sede' ? 'à sede do MEZA' : `ao ponto de coleta ${esc(pt.nome)}`} no horário de funcionamento. ${destE ? 'A equipe do MEZA leva tudo até a ação.' : 'A equipe do MEZA leva para onde estiver faltando.'}</p></div>
      <section class="res-sum"><div class="info">
        ${info('shopping-basket', `${plural(tot,'item','itens')} de alimento`, it.map(([id, q]) => `${q} ${CAT[id].nome.toLowerCase()} (${medida(id)})`).join(' · '))}
        ${info('hand-heart', destE ? esc(destE.titulo) : 'MEZA', destE ? `Para esta ação · ${esc(o.nome)}` : 'A equipe decide para onde vai')}
        ${info('map-pin', esc(pt.nome), esc(pt.endereco))}
        ${info('clock-3', esc(pt.horario), 'Horário de funcionamento')}
        ${info('receipt', 'Recibo na entrega', 'Fica salvo em Suas doações.')}
      </div></section>`,
    foot:`<button class="btn btn-primary btn-block" data-a="tab" data-r="v-doar">Ver minhas doações</button><button class="btn-text" data-a="tab" data-r="v-home">Voltar ao início</button>`
  };
};

const AJUDA_CURTA = { 'Cozinhar nas ações':'cozinha', 'Doar alimentos':'alimentos', 'Doar dinheiro':'dinheiro' };
const ajudasCurto = arr => { const s = arr.map(a => AJUDA_CURTA[a] || a).join(', '); return s ? s.charAt(0).toUpperCase() + s.slice(1) : 'Nenhuma escolhida'; };
const statusDot = (txt, ok) => `<span class="st${ok ? ' ok' : ''}"><i></i>${txt}</span>`;

SCREENS['v-perfil'] = () => {
  const u = S.user; const todas = S.perfilTudo || {};
  const agenda = S.inscricoes.map(i => ({ i, e: evOf(i.eventId) })).filter(x => x.e && diff(x.e.data) >= 0).sort((a, b) => byDate(a.e, b.e));
  const doacoes = S.doacoes.slice().reverse();
  const mais = (k, n) => n > 2 && !todas[k] ? `<button class="sec-link" data-a="perfil-tudo" data-k="${k}">Ver todas</button>` : '';
  return {
    top:`<header class="page-h gut prof-h"><h1 class="h-lg">Perfil</h1>
      <div class="prof"><span class="avatar lg">${initials(u.nome)}</span><span><b>${esc(u.nome)}</b><small>${esc(u.email)}</small>${u.status === 'aprovado' ? statusDot('Cadastro aprovado', true) : statusDot('Cadastro em validação')}</span></div></header>`,
    cls:'perfil',
    body:`<section class="sec tight">${secHead('Minha agenda', mais('agenda', agenda.length))}
        ${agenda.length ? `<div class="rule-list">${(todas.agenda ? agenda : agenda.slice(0, 2)).map(({ i, e }) => eventRow(e, 'v-evento', i)).join('')}</div>` : `<p class="muted small">Você ainda não reservou nenhuma vaga. <button class="link" data-a="tab" data-r="v-eventos">Ver ações</button></p>`}
      </section>
      <section class="sec tight">${secHead('Minhas doações', mais('doacoes', doacoes.length))}
        ${doacoes.length ? `<div class="rule-list">${(todas.doacoes ? doacoes : doacoes.slice(0, 2)).map(doacaoLi).join('')}</div>` : `<p class="muted small">Nenhuma doação ainda. <button class="link" data-a="tab" data-r="v-doar">Doar agora</button></p>`}
      </section>
      <section class="sec tight">${secHead('Como quero ajudar')}
        <div class="rule-list">
          <button class="set-r" data-a="ajuda-editar">${icon('hand-heart',20)}<span>Formas de ajudar</span><small>${ajudasCurto(u.ajudas || [])}</small>${icon('chevron-right',20)}</button>
          <button class="set-r" data-a="ajuda-editar">${icon('repeat',20)}<span>Frequência</span><small>${esc(u.freq || 'Não informada')}</small>${icon('chevron-right',20)}</button>
        </div>
      </section>
      ${protoBlock()}`,
    tabs:'vol', tabOn:'v-perfil'
  };
};

SCREENS['v-ajuda'] = () => ({
  title:'Como quero ajudar', cls:'g24',
  body:`<p class="lede">As organizações usam isso para te chamar para as ações certas.</p>
    ${checkList({label:'Como você quer ajudar?', hint:'Escolha uma ou mais opções.', path:'ajudaDraft.ajudas', options:AJUDAS})}
    ${radioList({label:'Com que frequência você quer ajudar?', hint:'Escolha uma opção.', path:'ajudaDraft.freq', options:FREQS})}`,
  foot:`<button class="btn btn-primary btn-block" data-a="ajuda-salvar">Salvar</button>`
});

/* ---------- organização ---------- */
/* Doação de alimentos a caminho: quem doa, o que leva e, no painel, para qual ação */
function promessaLi(p, comAcao = true) {
  const tot = Object.entries(p.itens).map(([id, q]) => `${q} ${CAT[id].nome.toLowerCase()}`).join(', ');
  const onde = esc(evOf(p.eventId)?.titulo || 'ação');
  return `<div class="don-r">${icon('shopping-basket',20)}<span><b>${esc(p.nome)}</b><small>${tot}${comAcao ? ` · ${onde}` : ''}</small>${statusDot('A caminho')}</span></div>`;
}
const orgStatus = (o, cls = 'org-st') => o.status === 'aprovada' ? `<span class="${cls}">${icon('badge-check',16)}Parceiro aprovado</span>` : `<span class="${cls} pend">${icon('hourglass',16)}Cadastro em validação</span>`;
SCREENS['o-painel'] = () => {
  const o = myOrg(); const evs = futuros().filter(e => e.orgId === o.id);
  const insc = evs.reduce((s, e) => s + inscritosTotal(e), 0);
  const proms = S.promessas.filter(p => p.orgId === o.id);
  const itens = proms.reduce((s, p) => s + Object.values(p.itens).reduce((a, b) => a + b, 0), 0);
  const todos = S.painelTudo;
  const stat = (n, a, b) => `<div class="hstat"><b class="num">${n}</b><small>${a}<br>${b}</small></div>`;
  return {
    top:`<section class="hero home-hero">
      <div class="top"><span class="logo">meza</span>${bellHtml()}</div>
      <div class="hero-c gut wide">
        <div class="org-b"><p class="org-eb">Painel da organização</p><h1 class="org-n">${esc(o.nome)}</h1>${orgStatus(o)}</div>
        <div class="hstats">${stat(evs.length, evs.length === 1 ? 'ação' : 'ações', evs.length === 1 ? 'publicada' : 'publicadas')}${stat(insc, insc === 1 ? 'voluntário' : 'voluntários', insc === 1 ? 'inscrito' : 'inscritos')}${stat(itens, itens === 1 ? 'item a' : 'itens a', 'caminho')}</div>
      </div>
    </section><div class="gingham" aria-hidden="true"></div>`,
    cls:'home',
    body:`${o.status !== 'aprovada' ? `<div class="notice">${icon('hourglass',20)}<span><b>Cadastro em validação</b><span class="small">Você já pode publicar ações. Elas aparecem para os voluntários assim que a equipe MEZA aprovar a organização.</span></span></div>` : ''}
      <section class="sec tight">${secHead('Suas próximas ações', `<button class="sec-link ic" data-a="tab" data-r="o-novo-evento">${icon('plus',16)}Nova ação</button>`)}
        ${evs.length ? `<div class="rule-list">${evs.map(e => eventRow(e, 'o-evento', null, 'org')).join('')}</div>` : `<p class="muted small">Nenhuma ação publicada. <button class="link" data-a="tab" data-r="o-novo-evento">Publicar a próxima</button></p>`}
      </section>
      <section class="sec tight">${secHead('Alimentos a caminho', proms.length > 2 && !todos ? '<button class="sec-link" data-a="painel-tudo">Ver todos</button>' : '')}
        ${proms.length ? `<div class="rule-list">${(todos ? proms : proms.slice(0, 2)).map(p => promessaLi(p)).join('')}</div>` : '<p class="muted small">Nenhuma doação de alimentos combinada ainda.</p>'}
      </section>`,
    tabs:'org', tabOn:'o-painel'
  };
};

function blankEv() {
  const o = myOrg();
  return { tipo:'Montagem de cestas', titulo:'', data:emDias(7), inicio:'08:00', fim:'12:00', local:o ? o.endereco : '', desc:'', postos:[{ nome:'Recepção de doações', vagas:4 }, { nome:'Montagem', vagas:8 }], itens:[] };
}
const TIPO_IC = { 'Montagem de cestas':'package', 'Preparo de refeições':'cooking-pot', 'Triagem de alimentos':'carrot', 'Lanche e reforço':'sandwich' };
SCREENS['o-novo-evento'] = () => {
  if (!S.evDraft) S.evDraft = blankEv();
  const d = S.evDraft;
  const turnos = (d.inicio && d.fim && toMin(d.fim) > toMin(d.inicio)) ? turnosDe(d.inicio, d.fim) : [];
  const total = d.postos.reduce((s, p) => s + (Number(p.vagas) > 0 ? Number(p.vagas) : 0), 0);
  const nomes = Object.keys(CAT).map(k => CAT[k].nome);
  return {
    top:`<header class="page-h gut"><div class="head form"><h1 class="h-lg">Publicar ação</h1><p class="muted">Os voluntários veem a data, o horário e os postos assim que você publicar.</p></div></header>`,
    cls:'g24 form-top',
    body:`${errSummary('publicar')}
      <div class="field grp"><span class="grp-h"><span class="lbl" id="lbl-tipo">Tipo de ação</span></span>
        <div class="rows" role="radiogroup" aria-labelledby="lbl-tipo">${TIPOS_EV.map(t => `<button type="button" class="rrow tall" role="radio" aria-checked="${d.tipo === t}" data-a="pick" data-p="evDraft.tipo" data-v="${t}"><span class="rd"></span><span class="rt"><span>${t}</span></span>${icon(TIPO_IC[t],22)}</button>`).join('')}</div></div>
      ${field({ label:'Título', bind:'evDraft.titulo', ph:'Ex.: Montagem de cestas de dezembro' })}
      ${field({ label:'Data', bind:'evDraft.data', type:'date', min:iso(HOJE) })}
      <div class="stack-sm">
        <div class="grid2">${field({ label:'Começa às', bind:'evDraft.inicio', type:'time', rer:true })}${field({ label:'Termina às', bind:'evDraft.fim', type:'time', rer:true })}</div>
        ${S.errors.fim || S.errors.inicio || !turnos.length ? '' : `<p class="note-r">${icon('info',16)}<span>${turnos.length > 1 ? `Os voluntários escolhem entre dois turnos: ${turnos.join(' e ')}.` : `Turno único: ${turnos[0]}.`}</span></p>`}
      </div>
      ${field({ label:'Endereço', bind:'evDraft.local', ph:'Onde os voluntários se encontram', action:{ a:'ev-locate', icon:'locate-fixed', label:'Usar o endereço da organização' } })}
      ${taField({ label:'Orientações para os voluntários', bind:'evDraft.desc', ph:'O que levar, roupa adequada, ponto de encontro…' })}
      <div class="field grp${S.errors.postos ? ' err' : ''}"><span class="grp-h"><span class="lbl">Postos e vagas</span><span class="hint">Cada voluntário escolhe um posto ao se inscrever.</span></span>
        <div class="stack-sm">
          <div class="posto-head" aria-hidden="true"><span>Posto</span><span>Vagas</span></div>
          ${d.postos.map((p, i) => `<div class="posto-row"><div class="inp"><input data-bind="evDraft.postos.${i}.nome" value="${esc(p.nome)}" placeholder="Nome do posto" aria-label="Nome do posto ${i + 1}"></div><div class="inp"><input type="number" min="1" max="99" inputmode="numeric" data-bind="evDraft.postos.${i}.vagas" value="${esc(p.vagas)}" aria-label="Vagas do posto ${i + 1}"></div><button type="button" class="icon-btn" data-a="ev-del-posto" data-i="${i}" aria-label="Remover posto ${i + 1}" ${d.postos.length < 2 ? 'disabled' : ''}>${icon('trash-2',18)}</button></div>`).join('')}
          <div class="posto-add"><button type="button" class="link-ic" data-a="ev-add-posto">${icon('plus',18)}<span>Adicionar posto</span></button><span class="num" id="ev-total">Total: ${plural(total,'vaga','vagas')}</span></div>
        </div>
        ${errMsg('postos')}
      </div>
      <div class="field grp"><span class="grp-h"><span class="lbl" id="lbl-itens">Itens que a ação precisa</span><span class="hint">Aparecem para quem quer doar alimentos.</span></span>
        <div class="ck-grid" role="group" aria-labelledby="lbl-itens">${nomes.map(n => { const on = d.itens.includes(n); return `<button type="button" class="ck" role="checkbox" aria-checked="${on}" data-a="toggle" data-p="evDraft.itens" data-v="${esc(n)}"><span class="cb">${on ? icon('check',16) : ''}</span><span>${esc(n)}</span></button>`; }).join('')}</div></div>
      ${prefill('fill-ev')}`,
    foot:`<button class="btn btn-primary btn-block" data-a="ev-publish">Publicar ação</button>`,
    tabs:'org', tabOn:'o-novo-evento'
  };
};

function nomesPosto(e, i) {
  const p = e.postos[i];
  const mine = S.user && S.inscricoes.some(x => x.eventId === e.id && x.posto === i) ? 1 : 0;
  const n = Math.max(0, p.inscritos - mine); const seed = hash(e.id) + i * 5; const arr = [];
  for (let k = 0; k < n; k++) { const nm = POOL[(seed + k * 3) % POOL.length]; arr.push(`${nm} ${String.fromCharCode(65 + ((seed + k * 7) % 26))}.`); }
  if (mine) { const parts = S.user.nome.trim().split(/\s+/); arr.push(`${parts[0]} ${parts.length > 1 ? parts[parts.length - 1][0] + '.' : ''}`.trim()); }
  return arr;
}
/* Detalhe de uma ação para quem organiza (e para o administrador, com os dados do parceiro) */
function eventoGestao(e, admin, novo) {
  const o = orgOf(e.orgId);
  const proms = S.promessas.filter(p => p.eventId === e.id);
  const ins = inscritosTotal(e), tot = vagasTotal(e), livres = vagasLivres(e);
  const pend = o.status !== 'aprovada';
  const aviso = admin ? '' : novo ? (pend
      ? `<div class="notice">${icon('hourglass',20)}<span><b>Ação salva</b><span class="small">Ela aparece para os voluntários assim que a equipe MEZA aprovar a organização.</span></span></div>`
      : `<div class="notice g">${icon('circle-check',20)}<span><b>Ação publicada</b><span class="small">Os voluntários já podem se inscrever. Você recebe um aviso a cada nova inscrição.</span></span></div>`)
    : pend ? `<div class="notice">${icon('hourglass',20)}<span><b>Parceiro em validação</b><span class="small">Esta ação fica oculta aos voluntários até a aprovação da organização.</span></span></div>` : '';
  const nomesItens = e.itens.map(i => CAT[i].nome.toLowerCase());
  return `<div class="head form"><p class="eyebrow step">${esc(admin ? o.nome : e.tipo)}</p><h2 class="h-lg">${esc(e.titulo)}</h2></div>
    ${aviso}
    <div class="info">
      ${info('calendar', cap(fmtLonga(e.data)), cap(rel(e.data)))}
      ${info('clock-3', `${e.inicio}–${e.fim}`, e.turnos.length > 1 ? 'Turnos ' + listaNomes(e.turnos) : 'Turno único')}
      ${info('map-pin', esc(e.local), e.endereco && e.endereco !== e.local ? esc(e.endereco) : '')}
      ${info('users', `${ins} de ${plural(tot,'vaga preenchida','vagas preenchidas')}`, livres ? plural(livres,'vaga livre','vagas livres') : 'Todas as vagas preenchidas')}
    </div>
    <section class="sec tight">${secHead('Postos e inscritos', `<span class="sec-meta num">${ins} de ${tot}</span>`)}
      <div class="rule-list">${e.postos.map((p, i) => { const ns = nomesPosto(e, i); return `<div class="posto-r"><div class="posto-t"><b>${esc(p.nome)}</b><span class="num${p.inscritos < p.vagas && p.inscritos / p.vagas >= .8 ? ' warn' : ''}">${p.inscritos} de ${p.vagas}</span></div>${prog(p.inscritos, p.vagas, 0, 'thin g')}<small>${ns.length ? esc(ns.join(', ')) : 'Ninguém inscrito ainda'}</small></div>`; }).join('')}</div>
    </section>
    ${e.itens.length ? `<section class="sec tight">${secHead('Itens a caminho')}<p class="hint">Pedidos nesta ação: ${listaNomes(nomesItens)}.</p>
      ${proms.length ? `<div class="rule-list">${proms.map(p => promessaLi(p, false)).join('')}</div>` : '<p class="muted small">Nenhuma doação de alimentos combinada ainda.</p>'}</section>` : ''}
    ${admin ? `<section class="sec tight">${secHead('Parceiro', `<button class="sec-link" data-a="go" data-r="a-org" data-id="${o.id}">Ver perfil</button>`)}
      <div class="rule-list"><div class="info pad-y">
        ${info('hand-coins', `<span class="num">${brl(o.arrecadado)}</span>`, 'Doações em dinheiro recebidas')}
        ${info('user', esc(o.resp), 'Responsável')}
        ${info('phone', `<span class="selectable">${esc(o.tel)}</span>`, 'Telefone')}
        ${info('mail', `<span class="selectable">${esc(o.email)}</span>`, 'E-mail')}
      </div></div></section>` : ''}`;
}
SCREENS['o-evento'] = () => { const e = evOf(S.params.id); return { title:'Detalhes da ação', body:eventoGestao(e, false, S.params.novo) }; };

SCREENS['o-perfil'] = () => {
  const o = myOrg();
  return {
    top:`<header class="page-h gut prof-h"><h1 class="h-lg">Perfil</h1>
      <div class="prof"><span class="avatar lg">${initials(o.nome)}</span><span><b>${esc(o.nome)}</b><small>${esc(o.tipo)}${o.cnpj ? ' · CNPJ ' + esc(o.cnpj) : ''}</small>${orgStatus(o, 'st-ic')}</span></div>
      ${o.sobre ? `<p class="prof-about">${esc(o.sobre)}</p>` : ''}</header>`,
    cls:'perfil',
    body:`<section class="sec tight">${secHead('Contato', `<button class="sec-link ic" data-a="org-editar">${icon('pencil',16)}Editar</button>`)}
        <div class="rule-list"><div class="info pad-y">
          ${info('user', esc(o.resp), 'Responsável')}
          ${info('phone', `<span class="selectable">${esc(o.tel)}</span>`, 'Telefone')}
          ${info('mail', `<span class="selectable">${esc(o.email)}</span>`, 'E-mail')}
          ${info('map-pin', esc(o.endereco), 'Endereço')}
          ${info('clock-3', esc(o.horario), 'Horário de atendimento')}
        </div></div>
      </section>
      ${protoBlock()}`,
    tabs:'org', tabOn:'o-perfil'
  };
};

SCREENS['o-perfil-editar'] = () => ({
  title:'Editar contato', cls:'g24',
  body:`${errSummary('salvar')}
    ${field({ label:'Responsável', bind:'orgEdit.resp', auto:'name', check:true })}
    ${field({ label:'Telefone', bind:'orgEdit.tel', mask:'tel', mode:'tel', auto:'tel', check:true })}
    ${field({ label:'E-mail', bind:'orgEdit.email', type:'email', auto:'email', check:true })}
    ${field({ label:'Endereço', bind:'orgEdit.endereco', auto:'street-address', check:true })}
    ${field({ label:'Horário de atendimento', bind:'orgEdit.horario', ph:'Ex.: Seg a sex · 09:00–17:00', check:true })}`,
  foot:`<button class="btn btn-primary btn-block" data-a="org-salvar">Salvar</button>`
});

/* ---------- administrador ---------- */
SCREENS['a-eventos'] = () => {
  const todos = futuros();
  const orgsAg = S.orgs.filter(o => todos.some(e => e.orgId === o.id));
  if (S.afiltro !== 'todos' && !orgsAg.some(o => o.id === S.afiltro)) S.afiltro = 'todos';
  const evs = todos.filter(e => S.afiltro === 'todos' || e.orgId === S.afiltro);
  const grupos = [['Próximos 7 dias', e => diff(e.data) <= 7], ['Semana que vem', e => diff(e.data) > 7 && diff(e.data) <= 14], ['Mais adiante', e => diff(e.data) > 14]];
  const livres = evs.reduce((s, e) => s + vagasLivres(e), 0);
  const nOrgs = new Set(evs.map(e => e.orgId)).size;
  return {
    top:`<header class="page-h gut"><div class="head form"><h1 class="h-lg">Agenda dos parceiros</h1><p class="muted">${plural(evs.length,'ação','ações')} nas próximas semanas, com ${plural(livres,'vaga livre','vagas livres')} em ${plural(nOrgs,'parceiro','parceiros')}.</p></div></header>`,
    cls:'form-top',
    body:`${selectField({ label:'Parceiro', bind:'afiltro', options:[['todos','Todos os parceiros'], ...orgsAg.map(o => [o.id, o.nome])] })}
      ${grupos.map(([g, f]) => { const l = evs.filter(f); return l.length ? `<section class="grp-ev"><h2 class="grp-l">${g}</h2><div class="rule-list open">${l.map(e => eventRow(e, 'a-evento', null, 'admin')).join('')}</div></section>` : ''; }).join('') || '<p class="muted">Nenhuma ação marcada nas próximas semanas.</p>'}`,
    tabs:'admin', tabOn:'a-eventos'
  };
};
SCREENS['a-evento'] = () => { const e = evOf(S.params.id); return { title:'Detalhes da ação', body:eventoGestao(e, true) }; };

/* Perfil de um parceiro visto pelo administrador */
function orgHead(o) {
  return `<div class="prof"><span class="avatar lg">${initials(o.nome)}</span><span><b>${esc(o.nome)}</b><small>${esc(o.tipo)}${o.cnpj ? ' · CNPJ ' + esc(o.cnpj) : ''}</small>${orgStatus(o, 'st-ic')}</span></div>
    ${o.sobre ? `<p class="prof-about">${esc(o.sobre)}</p>` : ''}`;
}
function orgContato(o) {
  return `<div class="rule-list"><div class="info pad-y">
    ${info('user', esc(o.resp), 'Responsável')}
    ${info('phone', `<span class="selectable">${esc(o.tel)}</span>`, 'Telefone')}
    ${info('mail', `<span class="selectable">${esc(o.email)}</span>`, 'E-mail')}
    ${info('map-pin', esc(o.endereco), 'Endereço')}
    ${info('clock-3', esc(o.horario), 'Horário de atendimento')}
  </div></div>`;
}
SCREENS['a-org'] = () => {
  const o = orgOf(S.params.id); const evs = futuros().filter(e => e.orgId === o.id);
  return {
    title:'Perfil do parceiro', cls:'g32',
    body:`<div class="prof-h stack-sm">${orgHead(o)}</div>
      <section class="sec tight">${secHead('Contato')}${orgContato(o)}</section>
      <section class="sec tight">${secHead('Ações na agenda')}
        ${evs.length ? `<div class="rule-list">${evs.map(e => eventRow(e, 'a-evento', null, 'admin')).join('')}</div>` : '<p class="muted small">Nenhuma ação marcada.</p>'}</section>`
  };
};

/* Validações: cada cadastro fica numa linha; depois de revisado mostra o resultado e "Desfazer" */
const listaAjudas = arr => arr.map((a, i) => i ? a.charAt(0).toLowerCase() + a.slice(1) : a).join(', ');
function valBtns(kind, x) {
  if (x.revisado || x.revisada) {
    const ok = /aprovad/.test(x.status);
    const txt = kind === 'vol' ? (ok ? 'Cadastro aprovado. O aviso vai por e-mail.' : 'Cadastro recusado. O aviso vai por e-mail.') : (ok ? 'Organização aprovada. As ações dela já aparecem para os voluntários.' : 'Cadastro recusado. A organização recebe o motivo por e-mail.');
    return `<div class="val-done${ok ? '' : ' no'}" role="status">${icon(ok ? 'circle-check' : 'circle-alert',20)}<span>${txt}</span><button class="sec-link" data-a="desfazer" data-kind="${kind}" data-id="${x.id}">Desfazer</button></div>`;
  }
  const rej = S.confirm === `rej-${kind}-${x.id}`;
  return `<div class="val-btns"><button class="btn ${rej ? 'btn-warn' : 'btn-cancel'} btn-md" data-a="reject" data-kind="${kind}" data-id="${x.id}">${rej ? 'Confirmar recusa' : 'Recusar'}</button><button class="btn btn-primary btn-md" data-a="approve" data-kind="${kind}" data-id="${x.id}">Aprovar</button></div>`;
}
const kvLinha = (l, v) => `<div class="kv-l"><small>${l}</small><span>${v}</span></div>`;
SCREENS['a-validacoes'] = () => {
  const pv = pendentesVol(), po = pendentesOrg();
  const tab = S.valTab;
  let lista;
  if (tab === 'vol') {
    const vs = S.pendVol.filter(v => v.status === 'pendente' || v.revisado);
    lista = vs.length ? vs.map(v => `<article class="val">
        <div class="person"><span class="avatar">${initials(v.nome)}</span><span><b>${esc(v.nome)}${v.id === 'me' ? ' <span class="you">· você</span>' : ''}</b><small>Enviado ${esc(v.quando)} · ${esc(v.cidade)}</small></span></div>
        <p class="quote">${esc(v.motivacao)}</p>
        <div class="kv-ls">${kvLinha('Como quer ajudar', esc(listaAjudas(v.ajudas)))}${kvLinha('Frequência', esc(v.freq))}${v.exp ? kvLinha('Experiência', esc(v.exp)) : ''}</div>
        ${valBtns('vol', v)}</article>`).join('') : `<p class="muted">Nenhum voluntário aguardando validação.</p>`;
  } else {
    const os = S.orgs.filter(o => o.status === 'pendente' || o.revisada);
    lista = os.length ? os.map(o => { const n = S.events.filter(e => e.orgId === o.id).length; return `<article class="val">
        <div class="person"><span class="avatar">${initials(o.nome)}</span><span><b>${esc(o.nome)}${o.id === 'o-me' ? ' <span class="you">· sua</span>' : ''}</b><small>${esc(o.tipo)} · enviado ${esc(o.enviado || 'agora')}</small></span></div>
        <p>${esc(o.sobre)}</p>
        <div class="info">
          ${info('file-text', `<span class="selectable">${esc(o.cnpj)}</span>`, 'CNPJ')}
          ${info('user', esc(o.resp), `Responsável · <span class="selectable">${esc(o.tel)}</span>`)}
          ${info('map-pin', esc(o.endereco), 'Endereço')}
          ${info('carrot', esc(o.distribui.join(', ')), 'O que doa')}
        </div>
        ${n && !o.revisada ? `<p class="note-r">${icon('info',16)}<span>Já publicou ${plural(n,'ação, que aparece','ações, que aparecem')} na agenda como “Parceiro em validação”.</span></p>` : ''}
        ${valBtns('org', o)}</article>`; }).join('') : `<p class="muted">Nenhuma organização aguardando validação.</p>`;
  }
  return {
    top:`<header class="page-h gut"><div class="head form"><h1 class="h-lg">Validações</h1><p class="muted">Confira os cadastros antes de liberar o acesso. Quem se cadastra recebe a resposta em até 7 dias.</p></div>
      <div class="ftabs" role="group" aria-label="Tipo de cadastro"><button class="ftab" data-a="valtab" data-v="vol" aria-pressed="${tab === 'vol'}">Voluntários (${pv.length})</button><button class="ftab" data-a="valtab" data-v="org" aria-pressed="${tab === 'org'}">Organizações (${po.length})</button></div></header>`,
    cls:'after-tabs',
    body:`<div class="rule-list open vals">${lista}</div>`,
    tabs:'admin', tabOn:'a-validacoes'
  };
};

/* Doações feitas para o MEZA como um todo: a equipe decide onde usar */
function mezaDoacoes() {
  const it = Object.entries(S.meza.prom).filter(([, q]) => q > 0); const tot = it.reduce((a, [, q]) => a + q, 0);
  return `<section class="sec tight">${secHead('Doações para o MEZA')}<p class="muted small">Chegam sem destino definido. A equipe decide para qual ação ou organização vão.</p>
    <div class="info">
      ${info('hand-coins', `<span class="num">${brl(S.meza.caixa)}</span>`, 'Em caixa para distribuir')}
      ${info('shopping-basket', tot ? `${plural(tot,'item','itens')} a caminho` : 'Nenhum alimento a caminho', it.map(([id, q]) => `${q} ${CAT[id].nome.toLowerCase()}`).join(' · '))}
    </div></section>`;
}
SCREENS['a-perfil'] = () => {
  const pend = pendentesVol().length + pendentesOrg().length;
  const st = (n, a, b, cls = '') => `<div class="pstat"><b class="num${cls}">${n}</b><small>${a}<br>${b}</small></div>`;
  const parc = S.orgs.filter(o => o.status === 'aprovada').length, ag = futuros().length;
  return {
    top:`<header class="page-h gut prof-h"><h1 class="h-lg">Perfil</h1>
      <div class="prof"><span class="avatar lg">${icon('shield-check',28)}</span><span><b>Equipe MEZA</b><small>Administração do programa · Brasília – DF</small></span></div>
      <div class="pstats">${st(parc, parc === 1 ? 'parceiro' : 'parceiros', parc === 1 ? 'ativo' : 'ativos')}${st(ag, ag === 1 ? 'ação na' : 'ações na', 'agenda')}${st(pend, pend === 1 ? 'cadastro' : 'cadastros', pend === 1 ? 'pendente' : 'pendentes', pend ? ' warn' : '')}</div></header>`,
    cls:'perfil',
    body:`${mezaDoacoes()}${protoBlock()}`,
    tabs:'admin', tabOn:'a-perfil'
  };
};

SCREENS.roteiro = () => ({
  title:'Roteiro do protótipo', cls:'g32',
  body:`<div class="head form"><h2 class="h-lg">Histórias de usuário</h2><p class="muted">Cada história abre a tela que a atende. As quatro histórias da folha do grupo mantêm a prioridade definida lá.</p>
      <p class="note-r flagged">${icon('flag',16)}<span>Acrescentada no protótipo: a prioridade ainda precisa ser confirmada pelo grupo.</span></p></div>
    ${storiesHtml()}
    ${S.role ? '' : `<section class="sec tight">${secHead('Ver o app como')}${roleSeg()}</section>`}`
});

/* ================= abas ================= */
const TABS = {
  vol:[['v-home','Início','house'],['v-eventos','Ações','calendar-days'],['v-doar','Doar','hand-heart'],['v-perfil','Perfil','circle-user-round']],
  org:[['o-painel','Painel','layout-grid'],['o-novo-evento','Publicar','circle-plus'],['o-perfil','Perfil','building-2']],
  admin:[['a-eventos','Agenda','calendar-days'],['a-validacoes','Validações','shield-check'],['a-perfil','Perfil','circle-user-round']]
};
function tabsHtml(k, on) {
  return `<nav class="tabs gut" aria-label="Navegação principal">${TABS[k].map(([r, l, ic]) => {
    const n = r === 'a-validacoes' ? pendentesVol().length + pendentesOrg().length : 0;
    return `<button class="tab${r === on ? ' on' : ''}" data-a="tab" data-r="${r}" ${r === on ? 'aria-current="page"' : ''}><span class="pill">${icon(ic,24)}${n ? `<span class="count">${n}</span>` : ''}</span>${l}</button>`;
  }).join('')}</nav>`;
}

/* ================= render ================= */
const $app = document.getElementById('app');
const $guide = document.getElementById('guide');
function render(top) {
  const sc = (SCREENS[S.route] || SCREENS.welcome)();
  const old = $app.querySelector('.scroll');
  const prev = top || !old ? 0 : old.scrollTop;
  const steps = sc.steps ? `<div class="steps" role="progressbar" aria-label="Etapa ${sc.steps[0]} de ${sc.steps[1]}" aria-valuemin="1" aria-valuemax="${sc.steps[1]}" aria-valuenow="${sc.steps[0]}">${Array.from({ length:sc.steps[1] }, (_, i) => `<i${i < sc.steps[0] ? ' class="on"' : ''}></i>`).join('')}</div>` : '';
  const bar = sc.title != null ? `<header class="bar gut${S.stack.length ? '' : ' root'}${steps ? ' has-steps' : ''}">${S.stack.length ? `<button class="icon-btn" data-a="back" aria-label="Voltar">${icon('arrow-left',24)}</button>` : ''}<h1>${sc.title}</h1>${steps}</header>` : '';
  $app.innerHTML = `${bar}<main class="scroll${top ? ' enter' : ''}">${sc.top || ''}<div class="content gut${sc.cls ? ' ' + sc.cls : ''}">${sc.body}</div></main>${sc.foot ? `<footer class="foot gut">${sc.foot}</footer>` : ''}${sc.tabs ? tabsHtml(sc.tabs, sc.tabOn) : ''}`;
  $app.querySelector('.scroll').scrollTop = prev;
  document.body.classList.toggle('hero-top', !!sc.top && sc.title == null && sc.top.indexOf('class="hero') > -1);
  renderGuide();
  if (S.focusErr) {
    S.focusErr = false;
    const f = $app.querySelector('.field.err input, .field.err textarea, .field.err select, .field.err button');
    if (f) { f.focus({ preventScroll:true }); f.scrollIntoView({ block:'center', behavior:'smooth' }); }
  }
}
const ROTA_NOME = { welcome:'Boas-vindas', 'vol-cad-1':'Cadastro de voluntário, etapa 1', 'vol-cad-2':'Cadastro de voluntário, etapa 2', 'vol-cad-ok':'Cadastro enviado', 'org-cad':'Cadastro de organização', 'org-cad-ok':'Cadastro de organização enviado',
  'v-home':'Início do voluntário', 'v-eventos':'Próximas ações', 'v-evento':'Detalhes da ação', 'v-inscricao-ok':'Vaga reservada', 'v-doar':'Doar', 'v-valor':'Valor da doação', 'v-metodo':'Forma de pagamento', 'v-checkout':'Pagamento', 'v-entrega':'Entrega em mãos', 'v-doacao-ok':'Doação concluída', 'v-alimentos':'Doar alimentos', 'v-alimentos-entrega':'Entrega dos alimentos', 'v-alimentos-ok':'Doação combinada', 'v-perfil':'Perfil do voluntário', 'v-ajuda':'Como quero ajudar',
  'o-painel':'Painel da organização', 'o-novo-evento':'Publicar ação', 'o-evento':'Detalhes da ação', 'o-perfil':'Perfil da organização', 'o-perfil-editar':'Editar contato',
  'a-eventos':'Agenda dos parceiros', 'a-evento':'Detalhes da ação', 'a-org':'Perfil do parceiro', 'a-validacoes':'Validações', 'a-perfil':'Perfil do administrador', roteiro:'Roteiro do protótipo' };
function renderGuide() {
  const nome = ROTA_NOME[S.route] || 'MEZA';
  const fs = document.fullscreenElement;
  $guide.innerHTML = `<div class="g-brand"><div class="logo">meza</div><p class="slogan">A mesa é de todos.</p><p class="values">Mobilização · Empatia · Zelo · Alimentação</p></div>
    <section class="g-sec"><span class="label-14">Ver o app como</span>${roleSeg(true)}
      <p class="note-r">${icon('smartphone',16)}<span>Tela atual: ${nome}. ${S.route === 'welcome' ? 'Escolha um perfil para explorar sem cadastro.' : 'Os dados são de exemplo.'}</span></p>
      <div class="g-links"><button class="link-ic" data-a="home">${icon('rotate-ccw',16)}<span>Recomeçar pelo cadastro</span></button><button class="link-ic" data-a="fullscreen">${icon(fs ? 'minimize' : 'maximize',16)}<span>${fs ? 'Sair da tela cheia' : 'Tela cheia'}</span></button></div>
    </section>
    <section class="g-sec tight">${secHead('Histórias de usuário', `<button class="sec-link ic" data-a="go" data-r="roteiro">Ver roteiro completo${icon('arrow-right',16)}</button>`)}${storiesMini()}
      <p class="note-r flagged">${icon('flag',16)}<span>Acrescentada no protótipo, prioridade a confirmar</span></p></section>`;
}
/* Aparelho do computador: encolhe o celular inteiro quando a janela é baixa (868 = 844 da tela + 24 de moldura). */
const fitPhone = () => document.documentElement.style.setProperty('--k', Math.max(.55, Math.min(1, (innerHeight - 48) / 868)).toFixed(3));
addEventListener('resize', fitPhone); fitPhone();
setInterval(() => { const t = document.getElementById('pix-timer'); if (t) t.textContent = pixRestante(); }, 1000);
let toastT;
function toast(msg) { const t = document.getElementById('toast'); t.textContent = msg; t.hidden = false; clearTimeout(toastT); toastT = setTimeout(() => { t.hidden = true; }, 2800); }

/* ================= navegação ================= */
function go(route, params = {}) { S.notif = false; S.stack.push({ route:S.route, params:S.params }); S.route = route; S.params = params; S.errors = {}; S.tried = false; S.confirm = null; render(true); }
function back() { S.notif = false; const p = S.stack.pop(); if (!p) return; S.route = p.route; S.params = p.params; S.errors = {}; S.tried = false; S.confirm = null; render(true); }
function tab(route) { S.notif = false; S.stack = []; S.route = route; S.params = {}; S.errors = {}; S.tried = false; S.confirm = null; if (route === 'o-novo-evento' && !S.evDraft) S.evDraft = blankEv(); render(true); }
const HOME = { vol:'v-home', org:'o-painel', admin:'a-eventos' };
function ensureDemoUser() {
  if (S.user) return;
  S.user = JSON.parse(JSON.stringify(DEMO_USER));
  S.inscricoes = [{ eventId:'e3', posto:1, turno:0 }]; evOf('e3').postos[1].inscritos++;
  S.doacoes = [{ id:'d0', tipo:'dinheiro', dest:'meza', cents:2500, metodo:'pix', data:emDias(-12) }];
}
function setRole(r) {
  S.notif = false; S.role = r; S.stack = []; S.params = {}; S.errors = {}; S.confirm = null;
  if (r === 'vol') ensureDemoUser();
  if (r === 'org' && !S.myOrgId) S.myOrgId = 'o1';
}

/* ================= validação ================= */
const emailOk = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v).trim());
function valVol1(d) {
  const e = {};
  if (d.nome.trim().split(/\s+/).filter(Boolean).length < 2) e.nome = 'Digite nome e sobrenome.';
  if (!emailOk(d.email)) e.email = /@[^\s@.]+$/.test(d.email.trim()) ? 'Falta o final do e-mail. Ex.: nome@email.com' : 'Digite um e-mail válido. Ex.: nome@email.com';
  if (d.telefone.replace(/\D/g, '').length < 10) e.telefone = 'Digite o telefone com DDD.';
  if (!d.genero) e.genero = 'Escolha uma opção. Se preferir, marque “Prefiro não informar”.';
  if (!d.nascimento) e.nascimento = 'Informe sua data de nascimento.';
  else if (d.nascimento > iso(HOJE)) e.nascimento = 'A data de nascimento não pode estar no futuro.';
  if (d.endereco.trim().length < 8) e.endereco = 'Informe rua, número e bairro.';
  return e;
}
function valVol2(d) {
  const e = {};
  if (d.motivacao.trim().length < 5) e.motivacao = 'Conte em poucas palavras o que te motivou.';
  if (!d.freq) e.freq = 'Escolha uma frequência.';
  if (!d.ajudas.length) e.ajudas = 'Escolha pelo menos uma forma de ajudar.';
  return e;
}
function valOrg(d) {
  const e = {};
  if (d.nome.trim().length < 3) e.nome = 'Digite o nome da organização.';
  if (d.cnpj.replace(/\D/g, '').length !== 14) e.cnpj = 'O CNPJ tem 14 números.';
  if (!d.tipo) e.tipo = 'Escolha o tipo de organização.';
  if (d.resp.trim().split(/\s+/).filter(Boolean).length < 2) e.resp = 'Digite nome e sobrenome do responsável.';
  if (!emailOk(d.email)) e.email = 'Digite um e-mail válido.';
  if (d.tel.replace(/\D/g, '').length < 10) e.tel = 'Digite o telefone com DDD.';
  if (d.endereco.trim().length < 8) e.endereco = 'Informe o endereço completo da sede.';
  if (d.sobre.trim().length < 10) e.sobre = 'Conte em uma frase o que vocês fazem.';
  if (!d.distribui.length) e.distribui = 'Escolha pelo menos uma opção.';
  return e;
}
function valCard(d) {
  const e = {}; const n = d.num.replace(/\D/g, ''); const [mm, aa] = d.val.split('/').map(Number);
  if (n.length < 13 || n.length > 19) e.num = 'Confira o número do cartão.';
  if (d.nome.trim().split(/\s+/).filter(Boolean).length < 2) e.nome = 'Digite o nome como está no cartão.';
  const fimMes = new Date(2000 + (aa || 0), mm || 0, 0);
  if (!(mm >= 1 && mm <= 12) || !(aa >= 0) || d.val.length !== 5 || fimMes < HOJE) e.val = 'Use MM/AA, com uma data que ainda não passou.';
  if (!/^\d{3,4}$/.test(d.cvv)) e.cvv = 'O CVV tem 3 ou 4 números.';
  return e;
}
function valEv(d) {
  const e = {};
  if (d.titulo.trim().length < 4) e.titulo = 'Dê um título para a ação.';
  if (!d.data) e.data = 'Escolha a data.'; else if (d.data < iso(HOJE)) e.data = 'A data não pode estar no passado.';
  if (!d.inicio) e.inicio = 'Informe o horário de início.';
  if (!d.fim || (d.inicio && toMin(d.fim) <= toMin(d.inicio))) e.fim = 'O término precisa ser depois do início.';
  if (d.local.trim().length < 5) e.local = 'Informe o endereço da ação.';
  const ps = d.postos.filter(p => String(p.nome).trim() && Number(p.vagas) > 0);
  if (!ps.length || ps.length !== d.postos.length) e.postos = 'Cada posto precisa de nome e de pelo menos 1 vaga.';
  return e;
}
function fail(errs) { S.errors = errs; S.tried = true; S.focusErr = true; render(false); }

/* ================= máscaras ================= */
const maskTel = v => { const d = v.replace(/\D/g, '').slice(0, 11); if (!d) return ''; if (d.length <= 2) return `(${d}`; if (d.length <= 6) return `(${d.slice(0,2)}) ${d.slice(2)}`; if (d.length <= 10) return `(${d.slice(0,2)}) ${d.slice(2,6)}-${d.slice(6)}`; return `(${d.slice(0,2)}) ${d.slice(2,7)}-${d.slice(7)}`; };
const maskCard = v => v.replace(/\D/g, '').slice(0, 19).replace(/(\d{4})(?=\d)/g, '$1 ');
const maskMMAA = v => { const d = v.replace(/\D/g, '').slice(0, 4); return d.length > 2 ? d.slice(0, 2) + '/' + d.slice(2) : d; };
const maskCnpj = v => { const d = v.replace(/\D/g, '').slice(0, 14); let o = d.slice(0, 2); if (d.length > 2) o += '.' + d.slice(2, 5); if (d.length > 5) o += '.' + d.slice(5, 8); if (d.length > 8) o += '/' + d.slice(8, 12); if (d.length > 12) o += '-' + d.slice(12); return o; };

/* ================= ações ================= */
const A = {
  'dd-toggle'(d, el) { if (el.getAttribute('aria-expanded') === 'true') ddClose(); else ddOpen(el, false); },
  'dd-pick'(d) {
    const id = 'f-' + d.bind.replace(/\./g, '-');
    if (getPath(d.bind) !== d.v) {
      setPath(d.bind, d.v); delete S.errors[d.bind.split('.').pop()];
      if (d.bind === 'food.dest') { S.food.qty = {}; S.food.entrega = null; }
    }
    render(false);
    document.getElementById(id)?.focus({ preventScroll:true });
  },
  'next-toggle'() { S.nextMin = !S.nextMin; render(false); document.querySelector('.next-tog')?.focus({ preventScroll:true }); },
  back, home() { S.role = null; S.stack = []; S.route = 'welcome'; S.params = {}; render(true); },
  go(d) { go(d.r, d.id ? { id:d.id } : {}); },
  tab(d) { tab(d.r); },
  role(d) { setRole(d.r); S.route = HOME[d.r]; render(true); },
  'start-vol'() { go('vol-cad-1'); },
  'start-org'() { go('org-cad'); },
  'fill-vol1'() { Object.assign(S.volDraft, { nome:'Lucas Almeida', email:'lucas.almeida@email.com', telefone:'(61) 98877-6655', genero:'Masculino', nascimento:'2001-08-22', endereco:'QNL 12, casa 8, Taguatinga Norte' }); S.errors = {}; render(false); },
  'fill-vol2'() { Object.assign(S.volDraft, { exp:'Ajudei na cozinha da paróquia do bairro em 2024.', motivacao:'Quero transformar parte do meu tempo livre em comida no prato de quem precisa.', freq:'A cada 15 dias', ajudas:['Cozinhar nas ações','Doar alimentos'] }); S.errors = {}; render(false); },
  'fill-org'() { Object.assign(S.orgDraft, { nome:'Cozinha Solidária do Gama', cnpj:'27.615.904/0001-58', tipo:'Coletivo comunitário', resp:'Lourdes Pereira', email:'cozinhagama@email.com', tel:'(61) 99654-3210', endereco:'Setor Leste, Quadra 9, Gama', sobre:'Servimos 150 almoços por dia para trabalhadores informais e famílias do bairro.', distribui:['Cestas básicas','Refeições prontas'] }); S.errors = {}; render(false); },
  'fill-ev'() { Object.assign(S.evDraft, { tipo:'Montagem de cestas', titulo:'Montagem de cestas de fim de mês', inicio:'08:00', fim:'12:00', desc:'Chegue 15 minutos antes. Use roupa confortável e sapato fechado. Água e lanche por nossa conta.', postos:[{ nome:'Triagem e validade', vagas:4 }, { nome:'Montagem das cestas', vagas:8 }, { nome:'Organização do estoque', vagas:3 }], itens:['Arroz','Feijão','Óleo de soja'] }); S.errors = {}; render(false); },
  'vol-next'() { const e = valVol1(S.volDraft); Object.keys(e).length ? fail(e) : go('vol-cad-2'); },
  'open-date'(d, el) { const i = el.closest('.inp').querySelector('input'); try { i.showPicker(); } catch (err) { i.focus(); } },
  locate() { S.volDraft.endereco = DEMO_USER.endereco; delete S.errors.endereco; render(false); toast('Localização simulada: endereço preenchido.'); },
  'vol-finish'() {
    const e = valVol2(S.volDraft); if (Object.keys(e).length) return fail(e);
    S.user = { ...JSON.parse(JSON.stringify(S.volDraft)), status:'em_validacao' };
    S.inscricoes = []; S.doacoes = [];
    const bairro = S.user.endereco.split(',').pop().trim();
    S.pendVol = S.pendVol.filter(v => v.id !== 'me');
    S.pendVol.unshift({ id:'me', nome:S.user.nome, cidade:bairro || 'Brasília', quando:'agora', ajudas:S.user.ajudas, freq:S.user.freq, motivacao:S.user.motivacao, exp:S.user.exp, status:'pendente' });
    S.volDraft = blankVol(); S.stack = []; S.route = 'vol-cad-ok'; S.params = {}; render(true);
  },
  'vol-explore'(d) { S.role = 'vol'; tab(d.r || 'v-home'); },
  'org-submit'() {
    const e = valOrg(S.orgDraft); if (Object.keys(e).length) return fail(e);
    const d = S.orgDraft;
    S.orgs = S.orgs.filter(o => o.id !== 'o-me'); S.events = S.events.filter(x => x.orgId !== 'o-me');
    S.orgs.push({ id:'o-me', nome:d.nome.trim(), tipo:d.tipo, endereco:d.endereco.trim(), resp:d.resp.trim(), tel:d.tel, email:d.email.trim(), status:'pendente', sobre:d.sobre.trim(), distribui:d.distribui.slice(), arrecadado:0, horario:'Seg a sex · 09:00–17:00', cnpj:d.cnpj, enviado:'agora' });
    S.needs['o-me'] = [];
    S.myOrgId = 'o-me'; S.evDraft = null; S.orgDraft = blankOrg(); S.stack = []; S.route = 'org-cad-ok'; S.params = {}; render(true);
  },
  'org-enter'(d) { S.role = 'org'; tab(d.r || 'o-painel'); },
  'org-locate'() { S.orgDraft.endereco = 'Setor Leste, Quadra 9, Gama'; delete S.errors.endereco; render(false); toast('Localização simulada: endereço preenchido.'); },
  desfazer(d) {
    if (d.kind === 'vol') { const v = S.pendVol.find(x => x.id === d.id); v.status = 'pendente'; v.revisado = false; if (d.id === 'me' && S.user) S.user.status = 'em_validacao'; }
    else { const o = orgOf(d.id); o.status = 'pendente'; o.revisada = false; }
    S.confirm = null; render(false);
  },
  pick(d) { setPath(d.p, d.n ? Number(d.v) : d.v); if (d.k) delete S.errors[d.k]; render(false); },
  toggle(d) { const arr = getPath(d.p); const i = arr.indexOf(d.v); i < 0 ? arr.push(d.v) : arr.splice(i, 1); if (d.k) delete S.errors[d.k]; render(false); },
  filtro(d) { S.filtro = d.v; render(false); },
  'perfil-tudo'(d) { S.perfilTudo = { ...(S.perfilTudo || {}), [d.k]:true }; render(false); },
  'ajuda-editar'() { S.ajudaDraft = { ajudas:(S.user.ajudas || []).slice(), freq:S.user.freq || '' }; go('v-ajuda'); },
  'ajuda-salvar'() {
    const dr = S.ajudaDraft; const e = {};
    if (!dr.ajudas.length) e.ajudas = 'Escolha pelo menos uma forma de ajudar.';
    if (!dr.freq) e.freq = 'Escolha uma frequência.';
    if (Object.keys(e).length) return fail(e);
    S.user.ajudas = dr.ajudas.slice(); S.user.freq = dr.freq;
    const me = S.pendVol.find(v => v.id === 'me'); if (me) { me.ajudas = S.user.ajudas.slice(); me.freq = S.user.freq; }
    back(); toast('Preferências salvas.');
  },
  flip(d) { setPath(d.p, !getPath(d.p)); render(false); },
  notif() {
    S.notif = !S.notif; render(false);
    if (S.notif) document.getElementById('notif-pop')?.focus({ preventScroll:true });
  },
  'notif-lidas'() { notifs().forEach(n => { if (!S.lidas.includes(n.id)) S.lidas.push(n.id); }); render(false); document.getElementById('notif-pop')?.focus({ preventScroll:true }); },
  'notif-go'(d) {
    if (!S.lidas.includes(d.n)) S.lidas.push(d.n);
    S.notif = false;
    if (d.r === 'food-start') return A['food-start']({ org:d.org, item:d.item });
    if (S.route === d.r && !d.ev) return render(false);
    if (TABS[S.role]?.some(t => t[0] === d.r)) return tab(d.r);
    go(d.r, d.ev ? { id:d.ev } : {});
  },
  'painel-tudo'() { S.painelTudo = true; render(false); },
  'ev-locate'() { S.evDraft.local = myOrg().endereco; delete S.errors.local; render(false); toast('Usamos o endereço da organização.'); },
  'org-editar'() { const o = myOrg(); S.orgEdit = { resp:o.resp, tel:o.tel, email:o.email, endereco:o.endereco, horario:o.horario }; go('o-perfil-editar'); },
  'org-salvar'() {
    const d = S.orgEdit; const e = {};
    if (d.resp.trim().split(/\s+/).filter(Boolean).length < 2) e.resp = 'Digite nome e sobrenome do responsável.';
    if (d.tel.replace(/\D/g, '').length < 10) e.tel = 'Digite o telefone com DDD.';
    if (!emailOk(d.email)) e.email = 'Digite um e-mail válido.';
    if (d.endereco.trim().length < 8) e.endereco = 'Informe o endereço completo da sede.';
    if (d.horario.trim().length < 5) e.horario = 'Informe os dias e o horário de atendimento.';
    if (Object.keys(e).length) return fail(e);
    const o = myOrg(); ['resp','tel','email','endereco','horario'].forEach(k => { o[k] = d[k].trim(); });
    back(); toast('Contato atualizado.');
  },
  ics(d) {
    const e = evOf(d.id); const ins = minhaInsc(e.id); const o = orgOf(e.orgId);
    const [ini, fim] = (ins ? e.turnos[ins.turno] : e.inicio + '–' + e.fim).split('–');
    const dt = h => e.data.replace(/-/g, '') + 'T' + h.replace(':', '') + '00';
    const txt = s => String(s).replace(/[\\,;]/g, m => '\\' + m);
    const ics = ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//MEZA//Prototipo//PT-BR','BEGIN:VEVENT','UID:' + e.id + '@meza.demo','DTSTAMP:' + iso(HOJE).replace(/-/g, '') + 'T000000','DTSTART:' + dt(ini),'DTEND:' + dt(fim),'SUMMARY:' + txt(e.titulo + ' (MEZA)'),'LOCATION:' + txt(e.local + ', ' + e.endereco),'DESCRIPTION:' + txt(o.nome + (ins ? '. Posto: ' + e.postos[ins.posto].nome : '')),'END:VEVENT','END:VCALENDAR'].join('\r\n');
    const url = URL.createObjectURL(new Blob([ics], { type:'text/calendar' }));
    const link = document.createElement('a'); link.href = url; link.download = 'meza-' + e.id + '.ics'; document.body.appendChild(link); link.click(); link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    toast('Arquivo de calendário baixado. Abra para adicionar o evento.');
  },
  afiltro(d) { S.afiltro = d.v; render(false); },
  valtab(d) { S.valTab = d.v; S.confirm = null; render(false); },
  inscrever(d) {
    const e = evOf(d.id); const sel = S.sel[e.id];
    if (sel.posto === null || sel.turno === null) return;
    const p = e.postos[sel.posto]; if (p.inscritos >= p.vagas) { toast('Esse posto acabou de lotar. Escolha outro.'); return; }
    p.inscritos++; S.inscricoes.push({ eventId:e.id, posto:sel.posto, turno:sel.turno, em:Date.now() }); S.sel[e.id] = { posto:null, turno:null };
    S.stack = [{ route:'v-eventos', params:{} }]; S.route = 'v-inscricao-ok'; S.params = { id:e.id }; render(true);
  },
  'cancel-insc'(d) {
    if (S.confirm !== 'cancel-' + d.id) { S.confirm = 'cancel-' + d.id; render(false); return; }
    const i = S.inscricoes.findIndex(x => x.eventId === d.id); const ins = S.inscricoes[i];
    evOf(d.id).postos[ins.posto].inscritos--; S.inscricoes.splice(i, 1); S.confirm = null; toast('Inscrição cancelada. A vaga voltou para a lista.'); render(false);
  },
  'don-start'(d) { S.don = { dest:d.ev || 'meza', cents:0, metodo:'pix' }; go('v-valor'); },
  key(d) {
    let c = S.don.cents;
    if (d.k === 'b') c = Math.floor(c / 10); else if (d.k === 'c') c = 0; else if (c < 1000000) c = c * 10 + Number(d.k);
    S.don.cents = c; render(false);
  },
  quick(d) { S.don.cents = Number(d.v); render(false); },
  'copy-pix'() {
    const el = document.getElementById('pixcode'); const txt = el ? el.textContent : '';
    const fallback = () => { const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); toast('Código selecionado. Copie pelo menu do aparelho.'); };
    const ok = () => { S.don.copied = true; render(false); };
    try { navigator.clipboard.writeText(txt).then(ok, fallback); } catch (err) { fallback(); }
  },
  'don-edit'() { const i = S.stack.map(x => x.route).lastIndexOf('v-valor'); if (i < 0) return back(); S.stack = S.stack.slice(0, i); S.route = 'v-valor'; S.params = {}; S.errors = {}; S.tried = false; render(true); },
  'cvv-help'() { toast('O CVV são os 3 números no verso do cartão (4 na frente, no American Express).'); },
  'don-confirm'() {
    const d = S.don; const e = destEv(d.dest);
    if (d.metodo === 'cartao') { const er = valCard(d.card); if (Object.keys(er).length) return fail(er); }
    S.doacoes.push({ id:'d' + Date.now(), tipo:'dinheiro', dest:d.dest, cents:d.cents, metodo:d.metodo, data:iso(HOJE), em:Date.now() });
    if (d.metodo !== 'dinheiro') { if (e) orgOf(e.orgId).arrecadado += d.cents; else S.meza.caixa += d.cents; }
    S.stack = []; S.route = 'v-doacao-ok'; S.params = {}; render(true);
  },
  /* Vindo de "Quem mais precisa agora": a próxima ação da organização que pede o item; se não houver, o MEZA */
  'food-start'(d) {
    const ev = d.ev || (d.org && acoesComItens().find(e => e.orgId === d.org && (!d.item || e.itens.includes(d.item)))?.id);
    S.food = { dest:ev || 'meza', qty:{}, entrega:null }; go('v-alimentos');
  },
  qty(d) { const q = (S.food.qty[d.id] || 0) + Number(d.d); S.food.qty[d.id] = Math.max(0, Math.min(99, q)); render(false); },
  'food-confirm'() {
    const f = S.food; const e = destEv(f.dest); const itens = {};
    Object.entries(f.qty).forEach(([id, q]) => { if (q <= 0) return; itens[id] = q; if (!e) S.meza.prom[id] = (S.meza.prom[id] || 0) + q; else { const n = needOf(e.orgId, id); if (n) n.prom += q; } });
    const parts = S.user.nome.trim().split(/\s+/);
    /* A organização só vê o que foi doado para as ações dela; o resto fica com a equipe do MEZA */
    if (e) S.promessas.push({ id:'p' + Date.now(), orgId:e.orgId, eventId:e.id, itens, ponto:f.entrega, nome:`${parts[0]} ${parts.length > 1 ? parts[parts.length - 1][0] + '.' : ''}`.trim(), em:Date.now() });
    S.doacoes.push({ id:'d' + Date.now(), tipo:'alimentos', dest:f.dest, itens, entrega:f.entrega, data:iso(HOJE), em:Date.now() });
    S.food = { dest:f.dest, qty:{}, entrega:null };
    S.stack = []; S.route = 'v-alimentos-ok'; S.params = {}; render(true);
  },
  'ev-add-posto'() { S.evDraft.postos.push({ nome:'', vagas:2 }); render(false); },
  'ev-del-posto'(d) { if (S.evDraft.postos.length > 1) { S.evDraft.postos.splice(Number(d.i), 1); render(false); } },
  'ev-publish'() {
    const d = S.evDraft; const e = valEv(d); if (Object.keys(e).length) return fail(e);
    const id = 'e' + Date.now(); const o = myOrg();
    const nomeToId = Object.fromEntries(Object.entries(CAT).map(([k, v]) => [v.nome, k]));
    const itens = d.itens.map(n => nomeToId[n]).filter(Boolean);
    const loc = d.local.trim();
    S.events.push({ id, orgId:o.id, tipo:d.tipo, titulo:d.titulo.trim(), data:d.data, inicio:d.inicio, fim:d.fim, local:loc, endereco:loc, desc:d.desc.trim(), turnos:turnosDe(d.inicio, d.fim), postos:d.postos.map(p => ({ nome:String(p.nome).trim(), vagas:Number(p.vagas), inscritos:0 })), itens });
    itens.forEach(it => { if (!needOf(o.id, it)) (S.needs[o.id] = S.needs[o.id] || []).push({ id:it, meta:50, atual:0, prom:0 }); });
    S.evDraft = null; S.stack = [{ route:'o-painel', params:{} }]; S.route = 'o-evento'; S.params = { id, novo:true }; render(true);
  },
  approve(d) {
    if (d.kind === 'vol') { const v = S.pendVol.find(x => x.id === d.id); v.status = 'aprovado'; v.revisado = true; if (d.id === 'me' && S.user) S.user.status = 'aprovado'; }
    else { const o = orgOf(d.id); o.status = 'aprovada'; o.revisada = true; }
    S.confirm = null; render(false);
  },
  reject(d) {
    const key = `rej-${d.kind}-${d.id}`;
    if (S.confirm !== key) { S.confirm = key; render(false); return; }
    if (d.kind === 'vol') { const v = S.pendVol.find(x => x.id === d.id); v.status = 'recusado'; v.revisado = true; if (d.id === 'me' && S.user) S.user.status = 'recusado'; }
    else { const o = orgOf(d.id); o.status = 'recusada'; o.revisada = true; }
    S.confirm = null; render(false);
  },
  story(d) {
    S.params = {}; S.errors = {}; S.confirm = null;
    switch (d.k) {
      case 's-vol': S.role = null; S.stack = [{ route:'welcome', params:{} }]; S.route = 'vol-cad-1'; break;
      case 's-org': S.role = null; S.stack = [{ route:'welcome', params:{} }]; S.route = 'org-cad'; break;
      case 's-pub': setRole('org'); S.route = 'o-novo-evento'; if (!S.evDraft) S.evDraft = blankEv(); break;
      case 's-adm': setRole('admin'); S.route = 'a-eventos'; break;
      case 's-posto': { setRole('vol'); const e = eventosVoluntario().find(x => !minhaInsc(x.id) && vagasLivres(x) > 0); S.stack = [{ route:'v-eventos', params:{} }]; S.route = 'v-evento'; S.params = { id:e.id }; break; }
      case 's-din': setRole('vol'); S.stack = [{ route:'v-doar', params:{} }]; S.don = { dest:'meza', cents:0, metodo:'pix' }; S.route = 'v-valor'; break;
      case 's-ali': setRole('vol'); S.stack = [{ route:'v-doar', params:{} }]; S.food = { dest:'meza', qty:{}, entrega:null }; S.route = 'v-alimentos'; break;
    }
    render(true);
  },
  fullscreen() {
    const el = document.documentElement;
    try {
      if (document.fullscreenElement) document.exitFullscreen();
      else if (el.requestFullscreen) el.requestFullscreen().catch(() => toast('O navegador não liberou a tela cheia. Use F11.'));
      else toast('Use F11 para entrar em tela cheia.');
    } catch (err) { toast('Use F11 para entrar em tela cheia.'); }
  },
  reset() {
    if (S.confirm !== 'reset') { S.confirm = 'reset'; render(false); return; }
    S = initialState(); render(true); toast('Demonstração reiniciada.');
  }
};

document.addEventListener('click', e => {
  if (!e.target.closest('.dd')) ddClose();
  if (S.notif && !e.target.closest('.notif-pop, .bell')) {
    S.notif = false; $app.querySelector('.notif-pop')?.remove(); $app.querySelector('.bell')?.setAttribute('aria-expanded', 'false');
  }
  const el = e.target.closest('[data-a]'); if (!el || el.disabled) return;
  const fn = A[el.dataset.a]; if (fn) { e.preventDefault(); fn(el.dataset, el); }
});
document.addEventListener('input', e => {
  const el = e.target; if (!el.dataset || !el.dataset.bind || el.tagName === 'SELECT') return;
  let v = el.value;
  if (el.dataset.mask === 'tel') { v = maskTel(v); el.value = v; }
  if (el.dataset.mask === 'cnpj') { v = maskCnpj(v); el.value = v; }
  if (el.dataset.mask === 'card') { v = maskCard(v); el.value = v; }
  if (el.dataset.mask === 'mmaa') { v = maskMMAA(v); el.value = v; }
  if (el.dataset.mask === 'digits') { v = v.replace(/\D/g, '').slice(0, 4); el.value = v; }
  if (el.type === 'number') v = el.value === '' ? '' : Number(el.value);
  setPath(el.dataset.bind, v);
  if (el.dataset.bind.startsWith('evDraft.postos.')) { const t = document.getElementById('ev-total'); if (t) t.textContent = 'Total: ' + plural(S.evDraft.postos.reduce((s, p) => s + (Number(p.vagas) > 0 ? Number(p.vagas) : 0), 0), 'vaga', 'vagas'); }
  const k = el.dataset.bind.split('.').pop();
  const f = el.closest('.field');
  if (S.errors[k] && f) { delete S.errors[k]; f.classList.remove('err'); f.querySelector('.msg-err')?.remove(); }
});
document.addEventListener('change', e => {
  const el = e.target; if (!el.dataset || !el.dataset.bind) return;
  if (el.dataset.rerender) render(false);
});
/* Teclado do menu de escolha: setas, Home/End, Enter/Espaço, Esc, Tab e busca pela primeira letra */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && S.notif) { e.preventDefault(); S.notif = false; render(false); $app.querySelector('.bell')?.focus(); return; }
  const btn = e.target.closest?.('.dd-btn');
  if (btn) {
    if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) { e.preventDefault(); ddOpen(btn); }
    return;
  }
  const opt = e.target.closest?.('.dd-list [role="option"]'); if (!opt) return;
  const opts = [...opt.parentElement.children], i = opts.indexOf(opt);
  const to = n => { e.preventDefault(); opts[Math.max(0, Math.min(opts.length - 1, n))].focus(); };
  if (e.key === 'ArrowDown') to(i + 1);
  else if (e.key === 'ArrowUp') to(i - 1);
  else if (e.key === 'Home') to(0);
  else if (e.key === 'End') to(opts.length - 1);
  else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); opt.click(); }
  else if (e.key === 'Escape') { e.preventDefault(); ddClose(true); }
  else if (e.key === 'Tab') ddClose(true);
  else if (e.key.length === 1) {
    const ch = e.key.toLocaleLowerCase('pt-BR');
    const j = [...opts.slice(i + 1), ...opts.slice(0, i + 1)].find(o => o.textContent.trim().toLocaleLowerCase('pt-BR').startsWith(ch));
    if (j) to(opts.indexOf(j));
  }
});

document.addEventListener('fullscreenchange', renderGuide);
render(true);
})();
