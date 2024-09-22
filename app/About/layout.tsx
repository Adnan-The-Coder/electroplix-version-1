import type { ReactNode } from 'react';
import './about.css';

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
    url: "https://www.electroplix.com/about",
    type: "website",
    image: "https://www.electroplix.com/Electroplix_logo.jpeg",
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

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
