# Suggestion Plus + 🚀

## วิธี Deploy ขึ้น Netlify (ได้ลิงก์จริงใน 3 นาที)

### วิธีที่ 1: Netlify + GitHub (แนะนำ)
1. Push โฟลเดอร์นี้ขึ้น GitHub repo ใหม่
2. เข้า https://netlify.com → Sign up ฟรี
3. กด "Add new site" → "Import from Git" → เลือก repo
4. Build settings จะถูกตั้งอัตโนมัติจาก netlify.toml
5. กด Deploy → ได้ URL ภายใน 2-3 นาที ✅

### วิธีที่ 2: Netlify CLI
```bash
npm install -g netlify-cli
cd suggestion-plus
npm install
npm run build
netlify deploy --prod --dir=dist
```

### Login ทดสอบ
- Employee ID: EMP-10293  
- Password: password123
