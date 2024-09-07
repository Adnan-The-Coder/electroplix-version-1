import type { ReactNode } from 'react';
import './home.css';

export const metadata = {
  title: "Electroplix",
  description: "Crafting Outstanding Digital Experiences",
};

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
