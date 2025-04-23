import Head from "next/head";
import type { ReactNode } from 'react';

export const metadata = {
  title: "Electroplix Custom Plans & Web Bundles - Affordable Business Solutions",
  description: "Choose from Electroplix's pre-designed web bundles starting at $189 or build your own custom plan with flexible hosting, marketing, SEO, and social media services.",
  keywords: "web bundles, starter plan, advanced plan, ultimate plan, custom pricing, web hosting, email marketing, social media ads, SEO, SMO, reputation management, lead follow-up, chatbots, custom website, Electroplix",
  author: {
    name: "Syed Adnan Ali",
    url: "https://www.linkedin.com/in/syedadnanali99"
  },
  og: {
    title: "Electroplix Custom Plans & Web Bundles - Build Your Perfect Solution",
    description: "Choose ready-made web bundles or create your custom plan with flexible pricing on hosting, marketing, SEO, and social media services.",
    url: "https://www.electroplix.com/custom-plan",
    type: "website",
    image: "https://www.electroplix.com/Electroplix_logo.jpeg",
  },
  openGraph: {
    title: "Electroplix Custom Plans & Web Bundles - Build Your Perfect Solution",
    description: "Choose ready-made web bundles or create your custom plan with flexible pricing on hosting, marketing, SEO, and social media services.",
    url: "https://www.electroplix.com/custom-plan", 
    type: "website",
    siteName: "Electroplix",
    images: [
      {
        url: "https://www.electroplix.com/assets/pricing-banner.png",
        width: 1200,
        height: 630,
        alt: "Electroplix Custom Plans and Web Bundle Options",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@Electroplix_", 
    title: "Electroplix Custom Plans & Web Bundles - Affordable Service Pricing",
    description: "Find affordable web bundles starting at $189 or build your own custom plan with our flexible pricing options.",
    image: "https://www.electroplix.com/Electroplix_Cover_Photo.png", 
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Electroplix Custom Plans and Web Bundles",
    description: "Choose from pre-designed web bundles or create your custom plan with flexible hosting, marketing, SEO, and social media services at competitive prices.",
    url: "https://www.electroplix.com/custom-plan",
    provider: {
      "@type": "Organization",
      name: "Electroplix",
      url: "https://www.electroplix.com"
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      highPrice: "500",
      lowPrice: "8",
      offerCount: "20",
      offers: [
        {
          "@type": "Offer",
          name: "Starter Web Bundle",
          "description": "5 Page conversion driven mobile-friendly website with technical and on-page SEO, integration of reviews, unlimited changes, and monthly support",
          price: "189",
          priceCurrency: "USD",
          url: "https://www.electroplix.com/custom-plan#starter-bundle"
        },
        {
          "@type": "Offer",
          name: "Advanced Web Bundle",
          "description": "All Starter features plus 5 additional pages, social media integration, photo gallery, and weekly support",
          price: "279",
          priceCurrency: "USD",
          url: "https://www.electroplix.com/custom-plan#advanced-bundle"
        },
        {
          "@type": "Offer",
          name: "Ultimate Web Bundle",
          "description": "All Advanced features plus e-commerce functionality, advanced SEO, analytics integration, interactive forums, and priority support",
          price: "499",
          priceCurrency: "USD",
          url: "https://www.electroplix.com/custom-plan#ultimate-bundle"
        },
        {
          "@type": "Offer",
          name: "Basic Hosting",
          "description": "Essential web hosting service for small websites",
          price: "8",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "8",
            priceCurrency: "USD",
            unitText: "month"
          },
          url: "https://www.electroplix.com/custom-plan#basic-hosting"
        },
        {
          "@type": "Offer",
          name: "Advanced Hosting",
          "description": "Premium web hosting with enhanced performance and features",
          price: "15",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "15",
            priceCurrency: "USD",
            unitText: "month"
          },
          url: "https://www.electroplix.com/custom-plan#advanced-hosting"
        },
        {
          "@type": "Offer",
          name: "SEO Services",
          "description": "Comprehensive search engine optimization services",
          price: "90",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "90",
            priceCurrency: "USD",
            unitText: "month"
          },
          url: "https://www.electroplix.com/custom-plan#seo"
        },
        {
          "@type": "Offer",
          name: "Social Media Optimization",
          "description": "Social media optimization and management services",
          price: "50",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "50",
            priceCurrency: "USD",
            unitText: "month"
          },
          url: "https://www.electroplix.com/custom-plan#smo"
        }
      ]
    },
    mainEntity: [
      {
        "@type": "Product",
        name: "Web Bundles",
        "description": "Pre-designed website packages with varying features and support levels",
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "USD",
          lowPrice: "189",
          highPrice: "499",
          offerCount: "3"
        }
      },
      {
        "@type": "Product",
        name: "Custom Pricing Plans",
        "description": "Build your own plan by selecting from various service components",
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "USD",
          lowPrice: "8",
          highPrice: "500",
          offerCount: "15"
        }
      }
    ],
    potentialAction: {
      "@type": "ViewAction",
      name: "View Pricing Plans",
      target: "https://www.electroplix.com/custom-plan"
    },
    mainContentOfPage: {
      "@type": "WebPageElement",
      speakable: {
        "@type": "SpeakableSpecification",
        "cssSelector": [".pricing-table", ".web-bundles", ".custom-pricing"]
      }
    },
    specialty: [
      "Web Bundles",
      "Custom Pricing Plans",
      "Web Hosting",
      "Email Marketing",
      "SEO Services",
      "Social Media Management",
      "Chatbot Solutions"
    ],
    audience: {
      "@type": "Audience",
      "audienceType": "Small to Medium Businesses"
    },
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
      "https://www.linkedin.com/company/electroplix"
    ]
  }
};

export default function CustomPlanLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author.name} />
        
        {/* Open Graph */}
        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:url" content={metadata.og.url} />
        <meta property="og:type" content={metadata.og.type} />
        <meta property="og:image" content={metadata.og.image} />
        
        {/* Twitter */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        
      </Head>
      {children}
    </>
  );
}