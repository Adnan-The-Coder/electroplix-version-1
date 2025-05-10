import Head from "next/head";
import type { ReactNode } from 'react';

export const metadata = {
  title: "Contact Electroplix - Support, Partnerships & Scheduling Meetings",
  description: "Connect with Electroplix for technical support, business partnerships, or to schedule a consultation. Our team offers custom software development, AI integrations, and premium IT solutions.",
  keywords: "contact Electroplix, technical support, schedule meeting, business partnerships, software consultation, message Electroplix, IT support contact, book appointment, software development team, partnership opportunities",
  author: {
    name: "Syed Adnan Ali",
    url: "https://www.linkedin.com/in/syedadnanali99"
  },
  og: {
    title: "Contact Electroplix - Support, Partnerships & Meeting Scheduling",
    description: "Reach out for technical support, explore business partnerships, send us a message, or schedule a consultation with Electroplix's team of software and IT experts.",
    url: "https://www.electroplix.com/contact-us",
    type: "website",
    image: "https://www.electroplix.com/Electroplix_logo.jpeg",
  },
  openGraph: {
    title: "Contact Electroplix - Support, Partnerships & Meeting Scheduling",
    description: "Reach out for technical support, explore business partnerships, send us a message, or schedule a consultation with Electroplix's team of software and IT experts.",
    url: "https://www.electroplix.com/contact-us", 
    type: "website",
    siteName: "Electroplix",
    images: [
      {
        url: "https://www.electroplix.com/assets/contact-banner.png",
        width: 1200,
        height: 630,
        alt: "Connect with Electroplix - Support, Partnerships & Scheduling",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@Electroplix_", 
    title: "Contact Electroplix - Support, Partnerships & Schedule Meetings",
    description: "Get technical support, explore partnership opportunities, send us a message, or book a consultation for custom software development and IT solutions.",
    image: "https://www.electroplix.com/assets/contact-cover.png", 
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Electroplix",
    provider: {
      "@type": "Organization",
      name: "Electroplix",
      url: "https://www.electroplix.com"
    },
    description: "Contact Electroplix for technical support, partnership opportunities, sending messages, or scheduling consultations about custom software development and IT solutions.",
    url: "https://www.electroplix.com/contact-us",
    logo: "https://www.electroplix.com/Electroplix_logo.jpeg",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        email: "support@electroplix.com",
        telephone: "+91-8290393487",
        areaServed: "Global",
        availableLanguage: "English",
        contactOption: "TollFree",
        hoursAvailable: "Mo,Tu,We,Th,Fr 09:00-17:00"
      },
      {
        "@type": "ContactPoint",
        contactType: "Business Partnerships",
        email: "partnerships@electroplix.com",
        telephone: "+91-8290393487",
        areaServed: "Global",
        availableLanguage: "English"
      },
      {
        "@type": "ContactPoint",
        contactType: "General Inquiries",
        email: "Official.Electroplix@gmail.com",
        areaServed: "Global",
        availableLanguage: "English"
      }
    ],
    mainEntity: {
      "@type": "Organization",
      name: "Electroplix",
      potentialAction: [
        {
          "@type": "ReserveAction",
          name: "Book a Consultation",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.electroplix.com/schedule-meeting",
            inLanguage: "en-US",
            actionPlatform: [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform"
            ]
          },
          result: {
            "@type": "Reservation",
            name: "Consultation Booking"
          }
        },
        {
          "@type": "CommunicateAction",
          name: "Send Message",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.electroplix.com/contact-us#message-form",
            inLanguage: "en-US"
          }
        }
      ]
    },
    offers: {
      "@type": "Offer",
      name: "Business Partnership Program",
      description: "Join Electroplix's partnership program for software development and IT solutions collaboration opportunities.",
      url: "https://www.electroplix.com/partnerships"
    },
    serviceType: [
      "Technical Support",
      "Software Development Consultation",
      "Business Partnership",
      "Meeting Scheduling"
    ],
    areaServed: "Global",
    availableLanguage: "English",
    sameAs: [
      "https://www.facebook.com/profile.php?id=61565564645521",
      "https://twitter.com/Electroplix_",
      "https://www.instagram.com/electroplixofficial"
    ],
    image: "https://www.electroplix.com/assets/contact-page.jpg"
  }
};

export default function ContactUsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author.name} />
        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:url" content={metadata.og.url} />
        <meta property="og:type" content={metadata.og.type} />
        <meta property="og:image" content={metadata.og.image} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width.toString()} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height.toString()} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <link rel="canonical" href={metadata.og.url} />
      </Head>
      <div>{children}</div>
    </>
  );
}