# Next.js 13 Legacy Rendering Implementations

- **Client-Side Rendering:** fully rendered on the user's browser if fetching with `useEffect`.
- **Static Site Generation:** the default, pre-generating at build time with `getStaticProps` to fetch. Uses `getStaticPaths` for dynamic routes.
- **Server-Side Rendering:** when fetching data on the server. Uses `getServerSideProps`.
- **Incremental Static Regeneration:** renders static pages with `getStaticProps` and `revalidate` to update on a schedule after build time.

### Demo: https://thiagoow-web-rendering-patterns.vercel.app

## 🚀 Setup guide

```bash
# Install dependencies
bun install

# Run development server
bun dev

# Build for production
bun run build

# Start production server
bun start
```
