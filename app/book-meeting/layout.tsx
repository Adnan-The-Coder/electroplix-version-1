import Head from "next/head";

export const metadata = {
    title: "Book Meeting for Website Development | Electroplix | Modern Web Solutions",
    description:
    "Transform your online presence with Electroplix's website development services. We create stunning, responsive websites tailored to your business needs with cutting-edge technology.",
    keywords:
    "custom website,personalised needs, meetings to scale up business, ,  web development, responsive design, business website, e-commerce, portfolio website, Electroplix, web design, UI/UX, React, Next.js, Tailwind CSS, modern websites",
    og: {
        title: "Book a Meeting | Electroplix",
        description:
        "Get a professionally designed custom website that perfectly represents your brand. Our expert team creates responsive, high-performance websites tailored to your specific business needs.",
        url: "https://www.electroplix.com/Custom-Website", 
        type: "website",
        image:
        "https://www.electroplix.com/assets/book-meeting-website-banner.png", 
    },
    openGraph: {
    title: "Book Meeting for Website Development | Electroplix | Modern Web Solutions",
    description:
    "Transform your online presence with Electroplix's website development services. We create stunning, responsive websites tailored to your business needs with cutting-edge technology.",
    url: "https://www.electroplix.com/Custom-Website", 
    type: "website",
    siteName: "Electroplix",
    areaServed: "Global",
    images: [
        {
            url: "https://www.electroplix.com/assets/About-website-banner.png",
            width: 1200,
            height: 630,
            alt: "Electroplix About Website Development",
        }
    ]
},
twitter: {
    card: "summary_large_image",
    site: "@Electroplix",
    title: "Book Meeting for Website Development | Electroplix | Modern Web Solutions",
    description:
      "Transform your online presence with our custom website development services. From business websites to e-commerce platforms, we build solutions that drive results.",
    image:
      "https://www.electroplix.com/assets/About-website-banner.png", 
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Website Development",
    provider: {
      "@type": "Organization",
      name: "Electroplix",
      url: "https://www.electroplix.com/About"
    },
    description:
      "Transform your online presence with our custom website development services. From business websites to e-commerce platforms, we build solutions that drive results.",
    meetings: {
      "@type": "meeting",
      price: "Free",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock"
    },
    serviceType: "Web Development",
    areaServed: {
      "@type": "Country",
      name: "United States"
    },
    serviceOutput: "Custom designed and developed website",
    image: "https://www.electroplix.com/assets/custom-website-service.jpg"
  },
};

export default function CustomWebsiteLayout({
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