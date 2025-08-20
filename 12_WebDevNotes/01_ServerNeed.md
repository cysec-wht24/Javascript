# Static Site vs Server-Side Setup

## 1. Static Multi-Page Site (MPA)
- Each page is its own `.html` file (e.g., `home.html`, `about.html`).
- Navigation works with:
  - `<a href="about.html">About</a>`  
  - or `window.location.href = "about.html"`.
- No server required, can be hosted on GitHub Pages / Netlify / Vercel.
- SEO-friendly, simple, reliable.

---

## 2. Single-Page Application (SPA)
- One `index.html` file, JS shows/hides different sections.
- Navigation handled in JavaScript (`route("Home")`).
- No server required if you use **hash routing**:
  - URLs look like `/index.html#/about`.
  - Browser never reloads the page.
- For **clean URLs** (`/about` instead of `/#/about`), you need server rewrites.

---

## 3. When a Server *Is* Needed
- **Clean pretty URLs** with History API (`/about`, `/blogs`) → requires server to redirect all routes to `index.html`.
- **Dynamic features**:
  - APIs, databases, authentication.
  - Form submissions that save data.
  - Blogs with posts stored in a DB.
- **Server-side rendering (SSR)** for SEO + speed.

---

## 4. Key Takeaways
- For a simple portfolio:  
  - ✅ Use static HTML files → no server needed.  
  - ✅ Or build SPA with hash routing.  
- You only need a server if:  
  - You want clean URLs without hashes.  
  - Or you need backend features (APIs, database, auth, SSR).
