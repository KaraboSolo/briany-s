# Briany's Cleaning Services — Website

Professional cleaning company website built with Next.js 15, Tailwind CSS v4, and TypeScript.

## Quick Start

### 1. Copy the Logo

Copy the no-background logo PNG file to:
```
public/images/logo.png
```

The no-background version of the logo is the one to use (white background looks fine for the navbar; the footer uses CSS `brightness-0 invert` to make it white automatically).

### 2. Install Dependencies

Open your terminal **directly** in this folder (not through Cursor's agent) and run:

```bash
npm install
```

### 3. Start Dev Server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout — SEO meta, JSON-LD schema
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About page
│   ├── services/page.tsx   # Services page
│   ├── blog/page.tsx       # Blog page
│   └── contact/page.tsx    # Contact page
└── components/
    ├── Navbar.tsx          # Sticky responsive navbar
    ├── Hero.tsx            # Full-viewport hero section
    ├── TrustBar.tsx        # Animated stats bar
    ├── Services.tsx        # 6-card services grid
    ├── WhyUs.tsx           # USP section
    ├── HowItWorks.tsx      # 3-step process
    ├── Testimonials.tsx    # Client reviews
    ├── ServiceAreas.tsx    # Gauteng coverage
    ├── CtaBanner.tsx       # CTA gradient band
    ├── Contact.tsx         # Contact form + details
    └── Footer.tsx          # 4-column footer
```

## Before Going Live

1. **Update contact details** in:
   - `src/app/layout.tsx` (schema telephone, email)
   - `src/components/Navbar.tsx` (phone number)
   - `src/components/Hero.tsx` (phone number)
   - `src/components/Contact.tsx` (phone, WhatsApp, email)
   - `src/components/CtaBanner.tsx` (phone number)
   - `src/components/Footer.tsx` (phone, email, socials)

2. **Set your domain** in `next-sitemap.config.js`:
   ```js
   siteUrl: "https://www.brianyscleaningservices.co.za",
   ```

3. **Convert logo to WebP** for optimal performance:
   - Use [Squoosh](https://squoosh.app) or [CloudConvert](https://cloudconvert.com)
   - Replace `public/images/logo.png` with `public/images/logo.webp`
   - Update the `src` attribute in `Navbar.tsx` and `Footer.tsx`

4. **Add an OG image** at `public/images/og-image.webp` (1200×630px)

5. **Add a favicon** at `public/favicon.ico`

## Build & Deploy

```bash
npm run build   # Builds + generates sitemap.xml and robots.txt
npm run start   # Runs production server
```

For static hosting (Netlify, Vercel, etc.):
- Vercel: Zero config, just push to GitHub
- Netlify: Set build command to `npm run build`, publish dir to `.next`

## Colour Palette

| Colour | Hex |
|--------|-----|
| Brand Blue | `#1D8FD8` |
| Brand Green | `#7DC242` |
| Dark Navy | `#0D2137` |
| Light Grey | `#F4F7FA` |
| Text | `#2D3748` |
