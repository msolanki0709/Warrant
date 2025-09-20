# 📌 Google Apps Script – Warrant Form Project

## 📖 Overview
This project is a **Google Apps Script web app** for handling multiple warrant forms (जनता समंस, जनता जमानती वारंट, जनता गिरफ्तारी वारंट, स्थाई वारंट, पुलिस समंस, पुलिस जमानती वारंट, पुलिस गिरफ्तारी वारंट).  

When a user submits the form, the data is automatically appended to a connected **Google Sheet**.

---

## 📂 Project Structure
- `Code.gs` → Backend (Apps Script code)
- `Index.html` → Frontend form (71 fields + थाना)
- `appsscript.json` → Manifest file
- `README.md` → Documentation

---

## 🚀 Deployment

1. Open **Google Apps Script Editor**: [script.google.com](https://script.google.com/)
2. Create a new project and upload:
   - `Code.gs`
   - `Index.html`
   - `appsscript.json`
3. Link it with your Google Sheet.
4. Go to **Deploy → New Deployment → Web App**:
   - Execute as: **Me**
   - Access: **Anyone with the link**
5. Copy the web app URL and share with users.

---

## 📝 Notes
- The backend expects fields from **f2 → f71** plus `thana`.
- All entries are appended with a timestamp (IST).
- Update the sheet URL inside `Code.gs` if needed.
