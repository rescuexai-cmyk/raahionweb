# Get a demo link (test on phone & share)

Your app is ready to deploy. Use one of these to get a **public URL** you can open on your phone or share.

---

## Option 1: Vercel (recommended, ~2 minutes)

1. Open **https://vercel.com** and sign in (GitHub/Google/Email).
2. Click **“Add New…” → “Project”**.
3. **Import** your project:
   - If the project is on **GitHub**: connect GitHub, choose the `raahi-main` repo, then click **Deploy** (Vercel will detect Create React App).
   - If it’s **only on your PC**: install Vercel CLI and deploy from the project folder:
     ```bash
     cd c:\Users\Dhruv\Downloads\raahi-main
     npx vercel
     ```
     Follow the prompts (login if asked). You’ll get a link like `https://raahi-xxxx.vercel.app`.

4. Use the link Vercel gives you as your **demo link** (works on phone and for friends).

---

## Option 2: Netlify

1. Go to **https://app.netlify.com** and sign in.
2. Drag and drop your **`build`** folder onto the Netlify dashboard, **or**
3. Run in the project folder:
   ```bash
   npm run build
   npx netlify deploy --prod --dir=build
   ```
4. Use the URL Netlify shows (e.g. `https://something.netlify.app`) as your demo link.

---

## Option 3: Quick local preview on your phone (same Wi‑Fi)

1. On your PC, run:
   ```bash
   cd c:\Users\Dhruv\Downloads\raahi-main
   npm run build
   npx serve -s build
   ```
2. Note the **local URL** (e.g. `http://192.168.x.x:3000`). On your phone (on the same Wi‑Fi), open that URL in the browser.

For a **shareable link** that works from anywhere, use **Option 1 (Vercel)** or **Option 2 (Netlify)**.
