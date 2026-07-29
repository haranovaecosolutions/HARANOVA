# HaraViba Production Website

A multi-page React + TypeScript marketing website built from the HaraViba catalogue. The project uses Vite, React Router, Framer Motion, Lucide icons and a custom CSS design system.

## Page structure

Each route is a separate React page component using the requested `page.tsx` structure:

- `src/pages/home/page.tsx`
- `src/pages/about/page.tsx`
- `src/pages/products/page.tsx`
- `src/pages/product-detail/page.tsx`
- `src/pages/manufacturing/page.tsx`
- `src/pages/sustainability/page.tsx`
- `src/pages/branding/page.tsx`
- `src/pages/catalogue/page.tsx`
- `src/pages/bulk-enquiry/page.tsx`
- `src/pages/contact/page.tsx`

## Run locally

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

The repository includes `.github/workflows/deploy-pages.yml`.

1. Create a new GitHub repository.
2. Upload the complete project and push it to the `main` branch.
3. In GitHub, open **Settings > Pages**.
4. Select **GitHub Actions** as the deployment source.
5. The included workflow will install dependencies, build the Vite project and publish the `dist` folder.

The website uses `HashRouter` and `base: "./"`, which keeps all routes and static assets functional on GitHub Pages project URLs without requiring a server rewrite rule.

A manual deployment option is also included:

```bash
npm run deploy
```

## Static enquiry workflow

GitHub Pages does not provide a backend. The bulk-enquiry form therefore prepares the submitted data for:

- WhatsApp to `+91 63532 37802`
- Email to `info@haraviba.com`

This keeps the form functional on static hosting. It can later be connected to Formspree, Resend, EmailJS or a custom API by modifying `src/components/EnquiryForm.tsx`.

## Catalogue and product data

- Original PDF: `public/HaraViba-Catalogue.pdf`
- Catalogue page previews: `public/assets/catalogue/`
- Product data and specifications: `src/data/products.ts`
- Design system and responsive UI: `src/styles/globals.css`

## Production notes

Before final launch, confirm product-wise certification scope, validity, test reports, packing quantities, MOQ, commercial terms and any sustainability claims displayed for individual products.
