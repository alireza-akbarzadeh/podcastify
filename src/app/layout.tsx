import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const inter = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Podcastify",
  description: "Generate your podcast using AI",
  authors: [{ name: "Podcastify Team" }],
  keywords: ["podcast", "AI", "audio", "podcast generation", "Podcastify"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.podcastify.com/",
    siteName: "Podcastify",
    title: "Podcastify - Generate your podcast using AI",
    description:
      "Transform your ideas into professional podcasts effortlessly with our AI-powered platform.",
    images: [
      {
        url: "https://www.podcastify.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Podcastify Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@podcastify",
    creator: "@podcastify",
    title: "Podcastify - Generate your podcast using AI",
    description:
      "Transform your ideas into professional podcasts effortlessly with our AI-powered platform.",
    images: ["https://www.podcastify.com/twitter-image.jpg"],
  },
} satisfies Metadata;

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata?.keywords.join(", ")} />
        <meta property="og:type" content={metadata?.openGraph.type} />
        <meta property="og:locale" content={metadata?.openGraph.locale} />
        <meta property="og:url" content={metadata?.openGraph.url} />
        <meta property="og:site_name" content={metadata?.openGraph.siteName} />
        <meta property="og:title" content={metadata?.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta
          property="og:image:width"
          content={metadata.openGraph.images[0].width.toString()}
        />
        <meta
          property="og:image:height"
          content={metadata.openGraph.images[0].height.toString()}
        />
        <meta
          property="og:image:alt"
          content={metadata.openGraph.images[0].alt}
        />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        <link rel="icon" href="/icons/logo.svg" />
        <title>{metadata.title}</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
