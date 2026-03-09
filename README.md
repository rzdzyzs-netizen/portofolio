# 🚀 Portfolio — Setup Guide

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Buka [http://localhost:3000](http://localhost:3000) di browser lo.

---

## 📝 Cara Edit Konten

Semua konten ada di file-file component. Tinggal cari bagian yang ada comment `EDIT ...` atau `GANTI ...`:

### 1. Nama & Metadata
- **`app/layout.tsx`** → Edit `YOUR_NAME` dan `YOUR_TAGLINE`

### 2. Navbar Logo
- **`components/Navbar.tsx`** → Edit `LOGO_TEXT` (inisial lo)

### 3. Hero Section
- **`components/Hero.tsx`** → Edit object `HERO_DATA`:
  - `name` → nama lo
  - `roles` → array role/titel lo (bakal jalan otomatis typewriter)
  - `description` → deskripsi singkat
  - `greeting` → opener sebelum nama

### 4. About Section
- **`components/About.tsx`** → Edit object `ABOUT_DATA`:
  - `bio` → array paragraf tentang lo
  - `stats` → angka-angka keren (projects, years, dll)
  - `techStack` → tech yang lo kuasai per kategori

### 5. Projects Section
- **`components/Projects.tsx`** → Edit array `PROJECTS`:
  - `title` → nama project
  - `description` → deskripsi singkat
  - `tags` → tech yang dipake
  - `liveUrl` → link live demo (wajib)
  - `repoUrl` → link github (isi `""` kalau ga mau tampil)
  - `featured: true` → tampil lebih besar (recommended max 2 featured)

### 6. Contact Section
- **`components/Contact.tsx`** → Edit object `CONTACT_DATA`:
  - `email` → email lo
  - `headline` → headline section
  - `subtext` → deskripsi
  - `socials` → social media lo

---

## 🎨 Ganti Warna

Warna ada di `app/globals.css` bagian `:root {}`:
```css
--neon: #00ff94;      /* warna hijau neon utama */
--neonBlue: #00d4ff;  /* biru accent */
--neonPink: #ff006e;  /* pink accent */
```

---

## 🚀 Deploy ke Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy production
vercel --prod
```

Atau push ke GitHub dan connect ke Vercel di dashboard.

---

Made with 🔥 by Eziel
