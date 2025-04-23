import Head from "next/head";
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
  openGraph: {
    title: "Scale Up Your Business with Electroplix",
    description: "Discover how Electroplix can help you scale your business to new heights with innovative strategies and cutting-edge technology.",
    url: "https://www.electroplix.com/scale-up-your-business",
    type: "website",
    siteName: "Electroplix",
    images: [
      {
        url: "https://www.electroplix.com/assets/scale-up-business-banner.png",
        width: 1200,
        height: 630,
        alt: "Scale Up Your Business with Electroplix",
      }
    ]
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
    "@type": "WebPage",
    name: "Scale Up Your Business with Electroplix",
    description: "Discover how Electroplix can help you scale your business to new heights with innovative strategies and cutting-edge technology.",
    url: "https://www.electroplix.com/scale-up-your-business",
    provider: {
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
        "https://www.linkedin.com/company/electroplix"
      ]
    },
    mainEntity: {
      "@type": "Service",
      name: "Business Scaling Solutions",
      offers: {
        "@type": "Offer",
        description: "Comprehensive business scaling services including growth acceleration, performance optimization, custom solutions, and expert support"
      },
      serviceType: ["Business Growth", "Performance Optimization", "Custom Solutions", "Expert Support"],
      provider: {
        "@type": "Organization",
        name: "Electroplix"
      }
    },
    potentialAction: {
      "@type": "ContactAction",
      name: "Get Started",
      target: "https://www.electroplix.com/contact"
    },
    mainContentOfPage: {
      "@type": "WebPageElement",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: [".intro-section", ".services-section", ".cta-section"]
      }
    },
    specialty: [
      "Advanced analytics and reporting",
      "Digital marketing strategies",
      "Resource management tools",
      "Growth guidance"
    ],
    audience: {
      "@type": "Audience",
      audienceType: "Businesses seeking growth"
    }
  }
};

export default function ScaleUpYourBusinessLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author.name} />
        
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
      </Head>
      {children}
    </>
  );
}