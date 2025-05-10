/* eslint-disable react/jsx-no-useless-fragment */
import type { ReactNode } from 'react';

export const metadata = {
  title: "Electroplix Terms and Conditions - Understand Our Policies",
  description: "Read the Electroplix Terms and Conditions to understand the rules and guidelines governing our services. Your use of our platform implies acceptance of these terms.",
  keywords: "terms and conditions, user agreement, Electroplix policies, service terms, legal information, user rights, compliance",
  author: {
    name: "Syed Adnan Ali",
    url: "https://www.linkedin.com/in/syedadnanali99"
  },
  og: {
    title: "Electroplix Terms and Conditions",
    description: "Learn about the terms and conditions that govern your use of Electroplix services.",
    url: "https://www.electroplix.com/terms-and-conditions",
    type: "website",
    image: "https://www.electroplix.com/Electroplix_logo.jpeg",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Electroplix_", 
    title: "Electroplix Terms and Conditions",
    description: "Understand the rules governing your use of Electroplix services.",
    image: "https://www.electroplix.com/Electroplix_Cover_Photo.png", 
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms and Conditions",
    description: "Terms and conditions governing the use of Electroplix services.",
    url: "https://www.electroplix.com/terms-and-conditions",
  }
};

export default function TermsAndConditionsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
