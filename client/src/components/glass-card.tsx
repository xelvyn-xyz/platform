import React from "react";
import { cn } from "@lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  glowVariant?: boolean;
}

export function GlassCard({
  children,
  className,
  hoverable = true,
  glowVariant = false,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-morphism p-6",
        hoverable && "transition-transform duration-300 hover:scale-105",
        glowVariant && "border-glow-blue",
        className
      )}
      style={{ borderRadius: "2px" }}
    >
      {children}
    </div>
  );
}
