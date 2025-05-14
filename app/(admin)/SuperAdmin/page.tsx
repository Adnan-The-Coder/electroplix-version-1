"use client";
import React, { useState, useEffect } from "react";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconUserBolt,
  IconChartBar,
  IconUsers,
  IconCalendar,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";

import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/Sidebar";

export function SidebarDemo() {
  const links = [
    { label: "Dashboard", href: "#dashboard", icon: <IconBrandTabler className="size-5" />, id: "dashboard" },
    { label: "Analytics", href: "#analytics", icon: <IconChartBar className="size-5" />, id: "analytics" },
    { label: "Users", href: "#users", icon: <IconUsers className="size-5" />, id: "users" },
    { label: "Calendar", href: "#calendar", icon: <IconCalendar className="size-5" />, id: "calendar" },
    { label: "Profile", href: "#profile", icon: <IconUserBolt className="size-5" />, id: "profile" },
    { label: "Logout", href: "#logout", icon: <IconArrowLeft className="size-5" />, id: "logout" },
  ];

  const [activeView, setActiveView] = useState("dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileOpen && !isMobile) {
        const target = event.target as Element;
        if (!target.closest(".sidebar-mobile") && !target.closest(".mobile-menu-button")) {
          setMobileOpen(false);
        }
      }
    };

    document.addEventListener("click", handleClickOutside);
    
    return () => document.removeEventListener("click", handleClickOutside);
  }, [mobileOpen, isMobile]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen, isMobile]);

  const handleLinkClick = (id: string) => {
    setActiveView(id);
    if (id === "logout") {
      alert("Logout functionality would be implemented here");
    }
    // Always close mobile menu when a link is clicked
    setMobileOpen(false);
  };

  return (
    <div className="relative h-screen overflow-hidden bg-white dark:bg-neutral-900">
      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-button fixed left-4 top-4 z-50 rounded-md bg-white p-2 shadow-lg dark:bg-neutral-800 md:hidden"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? 
          <IconX size={24} className="text-black dark:text-white" /> : 
          <IconMenu2 size={24} className="text-black dark:text-white" />
        }
      </button>
      {mobileOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/50 md:hidden" 
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
      <div
        className={`sidebar-mobile fixed z-40 h-full bg-white shadow-lg transition-all duration-300 dark:bg-neutral-950 ${
          isMobile
            ? mobileOpen
              ? "left-0 w-64"
              : "-left-64 w-64"
            : hovered || mobileOpen
            ? "w-64"
            : "w-16"
        }`}
        onMouseEnter={() => !isMobile && setHovered(true)}
        onMouseLeave={() => !isMobile && setHovered(false)}
      >
        <Sidebar open={isMobile ? mobileOpen : (hovered || mobileOpen)} setOpen={() => {}}>
          <SidebarBody className="justify-between gap-10">
            <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
              {isMobile ? (
                mobileOpen ? <Logo /> : null
              ) : (
                hovered || mobileOpen ? <Logo /> : <LogoIcon />
              )}
              <div className="mt-8 flex flex-col gap-2">
                {links.map((link) => (
                  <div key={link.id} onClick={() => handleLinkClick(link.id)}>
                    <SidebarLink
                      link={link}
                      className={`cursor-pointer`}
                    />
                  </div>
                ))}
              </div>
            </div>
            {(isMobile ? mobileOpen : (hovered || mobileOpen)) && (
              <div className="mt-4 border-t pt-4">
                <SidebarLink
                  link={{
                    label: "Nazish Ahmed",
                    href: "#profile",
                    icon: (
                      <Image
                        src="https://cdn.pfps.gg/pfps/6080-muzan-kibutsuji.png"
                        className="size-7 shrink-0 rounded-full object-cover ring-2 ring-gray-200 dark:ring-gray-700"
                        width={28}
                        height={28}
                        alt="Nazish Ahmed"
                      />
                    ),
                  }}
                  className="cursor-pointer"
                />
              </div>
            )}
          </SidebarBody>
        </Sidebar>
      </div>
      <main
        className={`flex h-full flex-col overflow-y-auto transition-all duration-300 ${
          isMobile
            ? "ml-0"
            : hovered || mobileOpen
            ? "ml-64"
            : "ml-16"
        }`}
      >
        <div className="p-4 pt-16 md:p-10">
          <Dashboard activeView={activeView} />
        </div>
      </main>
    </div>
  );
}

const Logo = () => (
  <motion.a 
    href="#" 
    className="flex items-center space-x-2 py-1 text-sm font-normal"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="h-5 w-6 rounded-bl-sm rounded-br-lg rounded-tl-lg rounded-tr-sm bg-black dark:bg-white" />
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="whitespace-pre font-medium text-black dark:text-white"
    >
      Electroplix Admin
    </motion.span>
  </motion.a>
);

const LogoIcon = () => (
  <motion.a 
    href="#" 
    className="flex items-center justify-center py-1 text-sm font-normal"
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <div className="h-5 w-6 rounded bg-black dark:bg-white" />
  </motion.a>
);

const Dashboard = ({ activeView }: { activeView: string }) => {
  const getTitle = () => {
    switch (activeView) {
      case "dashboard": return "Dashboard";
      case "analytics": return "Analytics";
      case "users": return "Users";
      case "calendar": return "Calendar";
      case "notifications": return "Notifications";
      case "profile": return "Profile";
      case "settings": return "Settings";
      case "logout": return "Logging out...";
      default: return "Dashboard";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="ml-5"
    >
      <h1 className="mb-4 text-2xl font-bold text-black dark:text-white lg:text-3xl">
        {getTitle()}
      </h1>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        Content for "{getTitle()}" will appear here.
      </p>
    </motion.div>
  );
};

export default SidebarDemo;