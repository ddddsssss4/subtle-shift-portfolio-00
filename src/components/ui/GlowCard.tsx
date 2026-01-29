import * as React from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function GlowCard({ className, children, ...props }: GlowCardProps) {
  return (
    <div className={cn("glow-card-wrapper", className)} {...props}>
      <div className="glow-card-border" />
      <div className="glow-card-content">
        {children}
      </div>
    </div>
  );
}
