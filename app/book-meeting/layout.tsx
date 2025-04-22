import Head from "next/head";

export const metadata = {
  title: "Book Meeting with Electroplix | Custom Software & Website Development",
  description:
    "Schedule a meeting with Electroplix experts to discuss your custom website needs. Get professional web solutions with advanced features, AI integration, and SHADCN components at competitive prices.",
  keywords:
    "book meeting, website consultation, custom software development, affordable website, business website, AI integration, SHADCN components, web templates, responsive design, competitive pricing, advanced web solutions, Electroplix",
  og: {
    title: "Book a Meeting | Electroplix IT Solutions",
    description:
      "Schedule a consultation with our experts to get a custom-built website or software solution that perfectly meets your business requirements at an affordable price.",
    url: "https://www.electroplix.com/book-meeting", 
    type: "website",
    image:
      "https://www.electroplix.com/assets/book-meeting-website-banner.png", 
  },
  openGraph: {
    title: "Book a Meeting with Electroplix | Premium Web Solutions at Competitive Prices",
    description:
      "Schedule a consultation to discuss your website needs with Electroplix experts. We offer visually stunning websites with advanced animations and SHADCN components at prices competing with WordPress.",
    url: "https://www.electroplix.com/book-meeting", 
    type: "website",
    siteName: "Electroplix",
    areaServed: "Global",
    images: [
      {
        url: "https://www.electroplix.com/assets/book-meeting-website-banner.png",
        width: 1200,
        height: 630,
        alt: "Book a Meeting with Electroplix for Custom Website Development",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@Electroplix_",
    title: "Book a Meeting with Electroplix | Custom Web Development",
    description:
      "Schedule a free consultation to discuss your website needs. Get premium custom websites with advanced features at affordable prices from Electroplix.",
    image:
      "https://www.electroplix.com/assets/book-meeting-banner.png", 
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Website & Software Development Consultation",
    provider: {
      "@type": "Organization",
      name: "Electroplix",
      url: "https://www.electroplix.com"
    },
    description:
      "Schedule a meeting with Electroplix experts to discuss your website and software development needs. We offer custom solutions with advanced features at competitive prices.",
    offers: {
      "@type": "Offer",
      price: "Free",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock"
    },
    serviceType: "Web Development Consultation",
    areaServed: {
      "@type": "Global"
    },
    serviceOutput: "Custom designed website with components and advanced features",
    image: "https://www.electroplix.com/assets/book-meeting-service.jpg"
  },
};

export default function BookMeetingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:url" content={metadata.og.url} />
        <meta property="og:type" content={metadata.og.type} />
        <meta property="og:image" content={metadata.og.image} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.image} />
      </Head>
      <div>{children}</div>
    </>
  );
}