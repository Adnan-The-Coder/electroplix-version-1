import type { ReactNode } from 'react';

export const metadata = {
  title: "Electroplix Privacy Policy - Your Data Security Matters",
  description: "Read the Electroplix Privacy Policy to understand how we collect, use, and protect your personal information. Your privacy is our priority.",
  keywords: "privacy policy, data security, personal information, Electroplix, user privacy, data collection, information protection",
  author: {
    name: "Syed Adnan Ali",
    url: "https://www.linkedin.com/in/syedadnanali99"
  },
  og: {
    title: "Electroplix Privacy Policy - Protecting Your Information",
    description: "Discover how Electroplix safeguards your personal data and what measures we take to ensure your privacy.",
    url: "https://www.electroplix.com/privacy-policy",
    type: "website",
    image: "https://www.electroplix.com/Electroplix_logo.jpeg",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Electroplix_", 
    title: "Electroplix Privacy Policy - Your Information Matters",
    description: "Learn how we handle your personal data and ensure your privacy at Electroplix.",
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

export default function PrivacyPolicyLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
