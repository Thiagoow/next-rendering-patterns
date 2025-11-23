import Link from "next/link";

const pageLinks = [
  { href: "/CSR", label: "CSR: Client-Side Rendering" },
  { href: "/posts/1", label: "Dynamic SSG: Static Site Generation" },
  { href: "/SSR", label: "SSR: Server-Side Rendering" },
  { href: "/ISR", label: "ISR: Incremental Static Regeneration" },
];

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default function Home() {
  return (
    <main className="flex flex-col p-4 space-y-6">
      <h1 className="text-2xl font-bold">
        Next.js Pages Router Rendering Patterns
      </h1>
      <p>
        Since there&apos;s no fetch or React hooks, this page is also SSG by
        default!
      </p>

      {pageLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="underline font-semibold text-blue-400 hover:text-blue-500 transition-colors duration-200"
        >
          {label}
        </Link>
      ))}
    </main>
  );
}
