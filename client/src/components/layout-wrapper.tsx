import React from "react";
import { useLocation } from "wouter";
import { PublicLayout } from "./public-layout";
import { DashboardLayout } from "./dashboard-layout";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  if (location.startsWith("/dashboard")) {
    return <DashboardLayout>{children}</DashboardLayout>;
  }

  return <PublicLayout>{children}</PublicLayout>;
}
