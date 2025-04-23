import Head from "next/head";
import type { ReactNode } from 'react';

export const metadata = {
  title: "Electroplix Web Templates - Cutting-edge Designs with Neon Aesthetics",
  description: "Explore Electroplix's collection of free and premium web templates featuring cutting-edge designs with neon aesthetics and flawless functionality for various industries.",
  keywords: "web templates, free templates, premium templates, neon aesthetics, restaurant template, cafe template, medical template, fitness template, business template, handicrafts template, Electroplix",
  author: {
    name: "Syed Adnan Ali",
    url: "https://www.linkedin.com/in/syedadnanali99"
  },
  og: {
    title: "Electroplix Web Templates - Modern Designs for Your Business",
    description: "Discover our collection of cutting-edge web templates with neon aesthetics and flawless functionality for restaurants, cafes, medical practices, fitness gyms, and more.",
    url: "https://www.electroplix.com/templates",
    type: "website",
    image: "https://www.electroplix.com/Electroplix_logo.jpeg",
  },
  openGraph: {
    title: "Electroplix Web Templates - Modern Designs for Your Business",
    description: "Cutting-edge web designs with neon aesthetics and flawless functionality for restaurants, cafes, medical practices, fitness centers, and businesses.",
    url: "https://www.electroplix.com/templates",
    type: "website",
    siteName: "Electroplix",
    images: [
      {
        url: "https://www.electroplix.com/assets/templates-banner.png",
        width: 1200,
        height: 630,
        alt: "Electroplix Web Templates Collection",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@Electroplix_", 
    title: "Electroplix Web Templates - Cutting-edge Designs",
    description: "Explore our collection of free and premium web templates with neon aesthetics and flawless functionality.",
    image: "https://www.electroplix.com/Electroplix_Cover_Photo.png", 
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Electroplix Web Templates",
    description: "Cutting-edge web designs with neon aesthetics and flawless functionality",
    url: "https://www.electroplix.com/templates",
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
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Product",
            name: "Handicrafts Web Template",
            description: "Bringing Hyderabad's rich artisanal tradition to life through exquisite woodwork that combines heritage with modern aesthetics.",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock"
            },
            category: "Free"
          }
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Product",
            name: "Cafe Template",
            description: "Whether you're looking for your morning coffee fix, a place to work remotely, or a venue for your special occasion, we'd love to welcome you.",
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock"
            },
            category: "Premium"
          }
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Product",
            name: "Restaurant Website Template",
            description: "I hosted my book club here last month and everyone was impressed. The staff helped arrange the perfect corner for us, and their specialty drinks were the highlight of our discussion.",
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock"
            },
            category: "Premium"
          }
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "Product",
            name: "Slice of Heaven Pizza",
            description: "Founded in 2010, Slice of Heaven Pizza Cafe has been serving authentic Italian-style pizzas made with the freshest ingredients and traditional techniques.",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock"
            },
            category: "Free"
          }
        },
        {
          "@type": "ListItem",
          position: 5,
          item: {
            "@type": "Product",
            name: "Medical Based Template",
            description: "Providing expert cardiac care with over 15 years of experience in interventional cardiology and heart disease prevention.",
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock"
            },
            category: "Premium"
          }
        },
        {
          "@type": "ListItem",
          position: 6,
          item: {
            "@type": "Product",
            name: "Ultimate Type Cafe Template 2",
            description: "Indulge in the finest gourmet meals crafted with passion and love. Our menu is a blend of authentic flavors and modern culinary art.",
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock"
            },
            category: "Premium"
          }
        },
        {
          "@type": "ListItem",
          position: 7,
          item: {
            "@type": "Product",
            name: "Landscaping Website Template",
            description: "Professional Landscaping We Make Your Garden Beautiful Professional gardening and landscaping services tailored for homes and businesses.",
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock"
            },
            category: "Premium"
          }
        },
        {
          "@type": "ListItem",
          position: 8,
          item: {
            "@type": "Product",
            name: "Fitness Gym Template",
            description: "Cutting-Edge Equipment Train with the industry's most advanced machinery, designed for optimal performance and results.",
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock"
            },
            category: "Premium"
          }
        },
        {
          "@type": "ListItem",
          position: 9,
          item: {
            "@type": "Product",
            name: "Finance Website Template",
            description: "We believe everyone deserves a solid financial future. Our mission is to empower our clients through personalized financial strategies.",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock"
            },
            category: "Free"
          }
        }
      ]
    },
    potentialAction: {
      "@type": "ViewAction",
      name: "Explore Templates",
      target: "https://www.electroplix.com/templates"
    },
    mainContentOfPage: {
      "@type": "WebPageElement",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: [".templates-intro", ".templates-grid", ".filter-section"]
      }
    },
    specialty: [
      "Free Templates",
      "Premium Templates",
      "Food Industry Templates",
      "Business Templates",
      "Medical Templates",
      "Fitness Templates",
      "Web Design",
      "Neon Aesthetics"
    ],
    audience: {
      "@type": "Audience",
      audienceType: "Small to Medium Businesses"
    },
    isPartOf: {
      "@type": "WebSite",
      name: "Electroplix",
      url: "https://www.electroplix.com"
    }
  }
};

export default function TemplatesLayout({ children }: { children: ReactNode }) {
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