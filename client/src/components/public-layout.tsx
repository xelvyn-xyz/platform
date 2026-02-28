import React from "react";
import { Navbar } from "./navbar";

export function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-white grid-overlay">
      <Navbar />
      <main className="pt-20 pb-8">
        {children}
      </main>
    </div>
  );
}
