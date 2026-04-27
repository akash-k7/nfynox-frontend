# Nfynox Headless Website (Next.js + WordPress)

This project is a headless website built using:

* **Frontend:** Next.js (App Router)
* **CMS:** WordPress (Headless via GraphQL)
* **Styling:** Tailwind CSS

---

##  Project Overview

This is a scalable, high-performance corporate website architecture designed for enterprise use cases like:

* Data centre services
* Cloud infrastructure platforms
* B2B service providers

The frontend (Next.js) consumes content from WordPress using GraphQL, allowing full separation of content and presentation.

---

##  Architecture

```
Next.js (Frontend) → GraphQL API → WordPress (CMS) → Database
```

---

##  Project Structure

```
app/
  layout.tsx
  page.tsx
  services/
    page.tsx
    [slug]/page.tsx
  contact/
    page.tsx
  api/
    contact/route.ts

components/
  Header.tsx
  Footer.tsx
  Hero.tsx
  ServicesGrid.tsx
  CTA.tsx

lib/
  graphql.ts
  queries.ts

styles/
  globals.css
```

---

##  Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/your-username/nfynox-frontend.git
cd nfynox-frontend
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Configure GraphQL Endpoint

Edit:

```
/lib/graphql.ts
```

Replace:

```ts
"https://yourdomain.com/graphql"
```

with your WordPress GraphQL endpoint.

---

### 4. Run Development Server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

##  WordPress Setup (Headless)

Install the following plugins in WordPress:

* WPGraphQL
* Advanced Custom Fields (ACF)
* WPGraphQL for ACF

Ensure your GraphQL endpoint is working:

```
https://yourdomain.com/graphql
```

---

##  Example GraphQL Query

```graphql
{
  services {
    nodes {
      title
      slug
    }
  }
}
```

---

##  Features

* Dynamic services pages
* Headless CMS integration
* API-based contact form
* Modular component structure
* SEO-ready architecture

---

##  API Integration

Contact form API:

```
/app/api/contact/route.ts
```

You can integrate this with:

* Zoho CRM
* Email services
* Webhooks

---

##  Performance Features

* Server-side rendering (SSR)
* Static generation (SSG)
* Incremental Static Regeneration (ISR)
* Optimized images (Next.js)

---

##  Deployment

### Frontend

Deploy using:

* Vercel (recommended)

```bash
git push → auto deploy
```

---

### WordPress CMS

Deploy on:

* VPS (DigitalOcean / AWS)
* Enable SSL + CDN

---

##  Important Notes

* Do NOT use WordPress themes (headless mode only)
* Structure content properly using ACF
* Avoid hardcoding content in frontend

---

## Future Improvements

* Full UI/UX implementation
* SEO metadata automation
* Authentication (portal login)
* Advanced animations
* Caching strategies

---

## Contributing

Feel free to fork and extend the project.

---

## License

This project is for development and demonstration purposes.

---

## Author

Developed for enterprise-grade headless architecture implementation.

---
