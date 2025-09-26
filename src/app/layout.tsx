"use client";
import { useState, useEffect } from "react";
import "../styles/global.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(true); // dark mode default

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col items-center justify-start p-6">
        {/* Toggle Button */}
        <button
          onClick={() => setDark(!dark)}
          className="mb-6 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          {dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>

        {children}
      </body>
    </html>
  );
}
