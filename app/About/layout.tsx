import Head from "next/head";
import type { ReactNode } from 'react';

export const metadata = {
  title: "About Electroplix - Your Partner in Innovative Web Solutions",
  description: "Learn about Electroplix, your go-to partner for custom web development, SEO, and digital marketing solutions designed to empower your business growth.",
  keywords: "about Electroplix, web development, SEO, digital marketing, innovative solutions, business growth, custom web solutions, team Electroplix",
  author: {
    name: "Syed Adnan Ali",
    url: "https://www.linkedin.com/in/syedadnanali99"
  },
  og: {
    title: "About Electroplix - Innovating for Your Success",
    description: "Discover how Electroplix can help your business thrive with our expert web development and digital marketing services.",
    url: "https://www.electroplix.com/About",
    type: "website",
    image: "https://www.electroplix.com/Electroplix_logo.jpeg",
  },
  openGraph: {
    title: "About Electroplix - Innovating for Your Success",
    description: "Learn about Electroplix, your go-to partner for custom web development, SEO, and digital marketing solutions designed to empower your business growth.",
    url: "https://www.electroplix.com/About", 
    type: "website",
    siteName: "Electroplix",
    images: [
      {
        url: "https://www.electroplix.com/assets/about-website-banner.png",
        width: 1200,
        height: 630,
        alt: "Electroplix About Website Development",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@Electroplix_", 
    title: "About Electroplix - Your Web Solutions Partner",
    description: "Explore Electroplix's mission to empower businesses through innovative web solutions.",
    image: "https://www.electroplix.com/Electroplix_Cover_Photo.png", 
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Electroplix",
    provider: {
      "@type": "Organization",
      name: "Electroplix",
      url: "https://www.electroplix.com/About"
    },
    description: "Learn about Electroplix, your go-to partner for custom web development, SEO, and digital marketing solutions designed to empower your business growth.",
    url: "https://www.electroplix.com",
    logo: "https://www.electroplix.com/Electroplix_logo.jpeg",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "Official.Electroplix@gmail.com",
      areaServed: "Global",
      availableLanguage: "English"
    },
    serviceType: "Web Development",
    areaServed: {
      "@type": "Global",
    },
    availableLanguage: "English",
    sameAs: [
      "https://www.facebook.com/profile.php?id=61565564645521",
      "https://twitter.com/Electroplix_",
      "https://www.instagram.com/electroplixofficial",
    ],
    image: "https://www.electroplix.com/assets/about-website-service.jpg"
  }
};

export default function AboutLayout({ children }: { children: ReactNode }) {
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
