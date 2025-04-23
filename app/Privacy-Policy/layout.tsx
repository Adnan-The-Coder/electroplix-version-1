import Head from "next/head";
import type { ReactNode } from 'react';

export const metadata = {
  title: "Electroplix Privacy Policy - Your Data Security Matters",
  description: "Read the Electroplix Privacy Policy to understand how we collect, use, and protect your personal information. Your privacy is our priority.",
  keywords: "privacy policy, data security, personal information, Electroplix, user privacy, data collection, information protection, GDPR compliance, cookie policy, data rights",
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
  openGraph: {
    title: "Electroplix Privacy Policy - Protecting Your Information",
    description: "Discover how Electroplix safeguards your personal data and what measures we take to ensure your privacy.",
    url: "https://www.electroplix.com/privacy-policy",
    type: "website",
    siteName: "Electroplix",
    images: [
      {
        url: "https://www.electroplix.com/assets/privacy-policy-banner.png",
        width: 1200,
        height: 630,
        alt: "Electroplix Privacy Policy",
      }
    ]
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
    "@type": "WebPage",
    name: "Electroplix Privacy Policy",
    description: "Detailed information about how Electroplix collects, processes, and protects your personal data.",
    isPartOf: {
      "@type": "WebSite",
      name: "Electroplix",
      url: "https://www.electroplix.com"
    },
    publisher: {
      "@type": "Organization",
      name: "Electroplix",
      url: "https://www.electroplix.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.electroplix.com/Electroplix_logo.jpeg",
        width: "112",
        height: "112"
      },
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
        "https://www.linkedin.com/company/electroplix"
      ]
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.electroplix.com"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Privacy Policy",
          item: "https://www.electroplix.com/privacy-policy"
        }
      ]
    },
    mainContentOfPage: {
      "@type": "WebPageElement",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: [".privacy-intro", ".data-collection", ".cookie-policy", ".user-rights"]
      }
    },
    specialty: [
      "Privacy Protection",
      "Data Security",
      "GDPR Compliance",
      "Information Protection",
      "User Privacy Rights"
    ],
    audience: {
      "@type": "Audience",
      audienceType: "Users of Electroplix Services"
    },
    lastReviewed: "2025-04-01",
    datePublished: "2024-10-15",
    dateModified: "2024-10-15"
  }
};

export default function PrivacyPolicyLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author.name} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={metadata.openGraph.url} />
        
        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width.toString()} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height.toString()} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        
        {/* Twitter */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        
        {/* Additional Meta Tags for Privacy Pages */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="revisit-after" content="7 days" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
      </Head>
      {children}
    </>
  );
}