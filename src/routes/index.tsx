import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Andi Krasniqi | Senior Full-Stack Developer & Conversion Specialist" },
      {
        name: "description",
        content:
          "Senior full-stack developer specializing in conversion-optimized web apps, e-commerce, and pixel-perfect landing pages.",
      },
      { name: "theme-color", content: "#09090b" },
      { property: "og:title", content: "Andi Krasniqi | Senior Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Conversion-focused full-stack engineering — landing pages, custom apps, and e-commerce that ship measurable ROI.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  // The portfolio is a self-contained HTML document (CDN Tailwind + custom scripts).
  // Serving it via a full-viewport iframe isolates its CSS/JS from the TanStack
  // shell's Tailwind v4 build and lets every original animation and script run intact.
  return (
    <iframe
      src="/portfolio.html"
      title="Andi Krasniqi — Portfolio"
      className="fixed inset-0 h-screen w-screen border-0"
      style={{ colorScheme: "dark", backgroundColor: "#09090b" }}
    />
  );
}
