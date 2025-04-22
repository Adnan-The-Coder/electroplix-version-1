import Head from "next/head";
import type { ReactNode } from 'react';
import './home.css';

export const metadata = {
  title: "Electroplix - Custom Software & AI-Powered IT Solutions",
  description: "Electroplix delivers premium custom software development, website builds, security solutions, and SaaS models with AI integrations for businesses of all sizes.",
  keywords: "custom software development, AI integration, website development, security software, SaaS solutions, SHADCN components, web templates, IT solutions, business website, custom website design",
  author: {
    name: "Syed Adnan Ali",
    url: "https://www.linkedin.com/in/syedadnanali99"
  },
  og: {
    title: "Electroplix - Advanced IT Solutions & Custom Software Development",
    description: "Transform your business with Electroplix's custom software development, AI-powered solutions, and visually stunning website templates.",
    url: "https://www.electroplix.com",
    type: "website",
    image: "https://www.electroplix.com/Electroplix_logo.jpeg",
  },
  openGraph: {
    title: "Electroplix - Advanced IT Solutions & Custom Software Development",
    description: "Transform your business with Electroplix's custom software development, AI-powered solutions, and visually stunning website templates that rival custom builds at competitive prices.",
    url: "https://www.electroplix.com", 
    type: "website",
    siteName: "Electroplix",
    images: [
      {
        url: "https://www.electroplix.com/assets/website-banner.png",
        width: 1200,
        height: 630,
        alt: "Electroplix IT Solutions & Custom Development Services",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@Electroplix_", 
    title: "Electroplix - Advanced IT Solutions & AI Integration",
    description: "Discover premium yet affordable custom software development, security solutions, and visually stunning websites with SHADCN components.",
    image: "https://www.electroplix.com/Electroplix_Cover_Photo.png", 
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Electroplix",
    provider: {
      "@type": "Organization",
      name: "Electroplix",
      url: "https://www.electroplix.com"
    },
    description: "Electroplix provides custom software development, website builds, security solutions, and SaaS models with AI integrations for businesses of all sizes.",
    url: "https://www.electroplix.com",
    logo: "https://www.electroplix.com/Electroplix_logo.jpeg",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "Official.Electroplix@gmail.com",
      areaServed: "Global",
      availableLanguage: "English"
    },
    serviceType: "Software Development and IT Solutions",
    areaServed: {
      "@type": "Global",
    },
    availableLanguage: "English",
    sameAs: [
      "https://www.facebook.com/profile.php?id=61565564645521",
      "https://twitter.com/Electroplix_",
      "https://www.instagram.com/electroplixofficial",
    ],
    image: "https://www.electroplix.com/assets/website-service.jpg"
  }
};

export default function HomeLayout({ children }: { children: ReactNode }) {
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