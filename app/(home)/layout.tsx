import type { ReactNode } from 'react';
import './home.css';

export const metadata = {
  title: "Electroplix - Innovative Web Solutions for Business Growth", 
  description: "Explore custom web development, SEO, and digital marketing services at Electroplix. Empower your business growth with expert solutions.", 
  keywords: "web development, SEO, digital marketing, web components, mobile apps, social media marketing, Electroplix, templates, hosting, responsive design, scalable solutions",
  author: {
    name: "Syed Adnan Ali",
    url: "https://www.linkedin.com/in/syedadnanali99"
  },
  og: {
    title: "Electroplix - Empower Your Business with Innovative Solutions",
    description: "Join Electroplix to access cutting-edge web solutions tailored for your business growth.",
    url: "https://www.electroplix.com",
    type: "website",
    image: "https://www.electroplix.com/Electroplix_logo.jpeg",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Electroplix_", 
    title: "Electroplix - Web Solutions for Business Growth",
    description: "Unlock business potential with Electroplix's innovative web solutions.",
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
      email:"Official.Electroplix@gmail.com",
      areaServed: "Global",
      availableLanguage: "English"
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=61565564645521", // Example social media profiles
      "https://twitter.com/Electroplix_",
      "https://www.instagram.com/electroplixofficial",
    ],
  }
};

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
