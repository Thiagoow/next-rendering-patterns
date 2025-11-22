# Next.js 16 Web Rendering Patterns

- **Client-Side Rendering:** fully rendered on the user's browser through JavaScript.
- **Static Site Generation:** works by default, fetch and return static files populated at build time.
- **Server-Side Rendering:** when disabling cache or using next revalidate on fetch options.
- **Incremental Static Regeneration:** when exporting const revalidate with how many seconds it takes.

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
