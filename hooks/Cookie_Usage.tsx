// hooks/useCookie.ts

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

// TypeScript interface for the Cookie options (optional)
interface CookieOptions {
  expires?: number | Date;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: 'strict' | 'lax' | 'none';
}

// Custom hook to handle cookie read, set, and remove operations
export function useCookie(cookieName: string, initialValue: string | null = null) {
  // State to store the cookie value
  const [cookieValue, setCookieValue] = useState<string | null>(null);

  useEffect(() => {
    // Get the cookie value when the component mounts
    const value = Cookies.get(cookieName) || initialValue;
    setCookieValue(value);
  }, [cookieName, initialValue]);

  // Function to set a new cookie value
  const setCookie = (value: string, options?: CookieOptions) => {
    Cookies.set(cookieName, value, options);
    setCookieValue(value);
  };

  // Function to remove a cookie
  const removeCookie = (options?: CookieOptions) => {
    Cookies.remove(cookieName, options);
    setCookieValue(null);
  };

  return {
    cookieValue,
    setCookie,
    removeCookie,
  };
}
