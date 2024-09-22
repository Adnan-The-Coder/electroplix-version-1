import type { ReactNode } from 'react';
import './custom-plan.css';

export const metadata = {
  title: "Electroplix Custom Plans - Affordable Pricing for Your Business Needs",
  description: "Explore Electroplix's competitive pricing on web hosting, email marketing, social media ads, SEO, and more. Find the best plans for your budget.",
  keywords: "custom plans, web hosting, email marketing, social media ads, SEO, SMO, reputation management, lead follow-up, affordable pricing, Electroplix",
  author: {
    name: "Syed Adnan Ali",
    url: "https://www.linkedin.com/in/syedadnanali99"
  },
  og: {
    title: "Electroplix Custom Plans - Get the Best Prices for Your Services",
    description: "Discover the best prices for web hosting, email marketing, SEO, and more with exclusive discounts.",
    url: "https://www.electroplix.com/custom-plan",
    type: "website",
    image: "https://www.electroplix.com/Electroplix_logo.jpeg",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Electroplix_", 
    title: "Electroplix Custom Plans - Affordable Service Pricing",
    description: "Find affordable custom plans for web hosting, SEO, social media ads, and more at Electroplix.",
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

export default function CustomPlanLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
