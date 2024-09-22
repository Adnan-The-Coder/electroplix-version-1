import type { ReactNode } from 'react';

export const metadata = {
  title: "Scale Up Your Business with Electroplix - Innovative Solutions",
  description: "Discover how Electroplix helps businesses scale with advanced strategies, performance optimization, and expert support. Unlock your business potential today.",
  keywords: "scale up business, business growth, performance optimization, custom solutions, expert support, digital marketing, Electroplix",
  author: {
    name: "Syed Adnan Ali",
    url: "https://www.linkedin.com/in/syedadnanali99"
  },
  og: {
    title: "Scale Up Your Business with Electroplix",
    description: "Unlock your business potential with innovative strategies and cutting-edge technology from Electroplix.",
    url: "https://www.electroplix.com/scale-up-your-business",
    type: "website",
    image: "https://www.electroplix.com/Electroplix_logo.jpeg",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Electroplix_", 
    title: "Scale Up Your Business with Electroplix",
    description: "Learn how Electroplix can help your business grow and optimize performance.",
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

export default function ScaleUpYourBusinessLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
