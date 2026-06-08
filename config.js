// ============================================================
//  LAHI Event Kiosk — Central Configuration
//  Edit ONLY this file when URLs change.
//  Used by: index.html (Check-In) and gift.html (Gift Desk)
// ============================================================

// Your Google Apps Script Web App URL
// Deploy via: Apps Script → Deploy → New deployment → Web App
// Execute as: Me | Who has access: Anyone
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby58ffAQg0xZJ--bIZCJboFNkfonKu9-eRYA57Zj_XxNLE7C8CmRki1sm3VwuGXGaIh/exec';

// Your Google Sheet "Publish to web" CSV URL
// Get via: Google Sheet → File → Share → Publish to web → CSV
const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQppAQITDVf3sWVrwF_yxWdfhGXar9lW6ZPj7SMybS2BE2Qltp8hExEamHfSVggFiKuravuStfIauNE/pub?output=csv';

// How often each tablet silently re-syncs with the sheet (seconds)
// Lower = more real-time, more requests. 20s is recommended.
const SYNC_INTERVAL_SEC = 20;
