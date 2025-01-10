"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeCom({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme(); // Use resolvedTheme to handle system defaults properly
  const [isMounted, setIsMounted] = useState(false);

  // Ensure the component is mounted before rendering
  useEffect(() => setIsMounted(true), []);

  // Avoid rendering anything before mounting to prevent hydration mismatches
  if (!isMounted) return null;

  return (
    <div className={`min-h-screen ${resolvedTheme === "dark" ? "dark" : ""}`}>
      <div className="bg-white text-gray-700 dark:text-gray-200 dark:bg-gray-900">
        {children}
      </div>
    </div>
  );
}
