// ============================================================
//  LAHI Event Kiosk — Central Configuration
//  Edit ONLY this file when URLs change.
//  Used by: index.html (Check-In Desk) and gift.html (Gift Desk)
// ============================================================

// Your Google Apps Script Web App URL
// Deploy via: Apps Script → Deploy → New deployment → Web App
// Execute as: Me  |  Who has access: Anyone
// NOTE: All live data sync goes through this URL — it's the single source of truth.
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzBrmcn1JpKxzElNRFyKrP17yuMkoQKZY_rHbLMG5-TTxjdNH_T_a0wl2R5aHm6Xqc4/exec';

// Your Google Sheet "Publish to web" CSV URL
// Still needed as a fallback reference — keep it updated.
// Get via: Google Sheet → File → Share → Publish to web → CSV
const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQppAQITDVf3sWVrwF_yxWdfhGXar9lW6ZPj7SMybS2BE2Qltp8hExEamHfSVggFiKuravuStfIauNE/pub?output=csv';

// How often each tablet silently re-syncs (seconds).
// 15s = snappy sync across all 4 tablets. Don't go below 10.
const SYNC_INTERVAL_SEC = 15;
