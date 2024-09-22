import type { ReactNode } from 'react';
import './home.css';

export const metadata = {
  title: "Electroplix - Scale Your Business with Innovative Web Solutions",
  description: "Electroplix offers custom web development, SEO, digital marketing, and mobile app solutions. Scale your business with our web components, premium templates, and expert services.",
  keywords: "web development, SEO, digital marketing, web components, mobile apps, social media marketing, Electroplix, custom templates, hosting, responsive design, scalable solutions",
  author: {
    name: "Syed Adnan Ali",
    url: "https://www.linkedin.com/in/syedadnanali99"
  },
  og: {
    title: "Electroplix - Scale Your Business",
    description: "Join Electroplix to empower your business with cutting-edge web solutions and services tailored for growth.",
    url: "https://www.electroplix.com",
    type: "website",
    image: "https://www.electroplix.com/Electroplix_logo.jpeg", // Replace with your logo or relevant image URL
  },
  twitter: {
    card: "summary_large_image",
    site: "@Electroplix_", // Replace with your Twitter handle
    title: "Electroplix - Scale Your Business",
    description: "Empower your business with Electroplix's innovative web solutions.",
    image: "https://www.electroplix.com/Electroplix_Cover_Photo.png", // Replace with your logo or relevant image URL
  },
};

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
