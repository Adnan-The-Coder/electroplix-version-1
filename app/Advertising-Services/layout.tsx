import type { ReactNode } from 'react';

export const metadata = {
  title: "Electroplix Advertising Services - Elevate Your Brand",
  description: "Discover comprehensive advertising solutions at Electroplix. Maximize your reach with our email marketing, social media ads, SEO, and more.",
  keywords: "advertising services, email marketing, social media ads, SEO, SMO, automated posting, lead follow-up, chatbots, AI, reputation management, Electroplix",
  author: {
    name: "Syed Adnan Ali",
    url: "https://www.linkedin.com/in/syedadnanali99"
  },
  og: {
    title: "Electroplix Advertising Services - Maximize Your Digital Impact",
    description: "Elevate your brand with Electroplix's innovative advertising solutions tailored to your needs.",
    url: "https://www.electroplix.com/advertising-services",
    type: "website",
    image: "https://www.electroplix.com/Electroplix_logo.jpeg",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Electroplix_", 
    title: "Electroplix Advertising Services",
    description: "Explore how Electroplix can elevate your brand through effective advertising solutions.",
    image: "https://www.electroplix.com/Electroplix_Cover_Photo.png", 
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Electroplix",
    url: "https://www.electroplix.com",
    logo: "https://www.electroplix.com/Electroplix_logo.jpeg",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "Official.Electroplix@gmail.com",
      areaServed: "Global",
      availableLanguage: "English"
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=61565564645521",
      "https://twitter.com/Electroplix_",
      "https://www.instagram.com/electroplixofficial",
    ],
  }
};

export default function AdvertisingServicesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
