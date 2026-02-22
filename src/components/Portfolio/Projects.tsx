import { GlowCard } from "@/components/ui/GlowCard";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

/**
 * ICON_SLUGS can now contain either:
 * - a simpleicon slug (e.g. "react", "typescript") which will be requested
 *   from https://cdn.simpleicons.org/<slug> and used as a CSS mask (keeps coloring)
 * - or a full image URL (starts with http(s):// or data:) which will be rendered
 *   as an <img /> (useful for icons not available on simpleicons)
 *
 * When matching, tech names are trimmed before lookup so entries like " TypeScript"
 * will still match "TypeScript".
 */
const ICON_SLUGS: Record<string, string> = {
  
  React: "react",
  "LM Studio":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAZlBMVEX///8AAACysrL29vbOzs5iYmJQUFB0dHTAwMDLy8usrKzu7u7Hx8fn5+fExMS9vb3Z2dl6enqFhYWenp4eHh6Pj487OzuYmJhHR0fg4OA0NDRbW1sWFhZvb29VVVVpaWknJycODg4z+HfQAAADcElEQVR4nO2b25aiMBBFuamQgFy8orbo///kYPc8yXG11Clap6f2D7BXKJLKSQgCwzAMwzAMwzDenqRZyKlXWZbfk1Wkkj+HHOtNNMBFlJY/kE49u6FV5BirPe8UXh2yasVOqYJTGM5KYBWJpWoVqQtyigqhU3xUkVqvkJS0quK5itRJV2qmIrVGlS6fFTYqUltY6F4qValINcgplToFwUrBaQ8/vlguFTS00xZWlHRC+KLkin394YZECTNON+I2T8VUrS8GeFbJ+M34KhFTFR5A11tbr5kv8zSb4MssKaUbF7hUixegQGcNOsCZVT5WOs3WDEktxVKJhlMYwgZePFQ7HSndvc5CR6oBzZZLpFJ8//AlpTpSkY4UmhScuLEpLhpOB/T1EXOCyvvTfXs9bPbR06EyzwinIKY30B1Qkn96f6k23UxM15TZ8p6c7pRvo0XAP9345yl2cznnbpWm5R1pwnR0PTG9h98P+xTncqrgFWI9tIV3KWGlsgDvdWdwrxEUP2gKxEOVqzjBpPjl7dMcjFSUS6XchFLi3YtOzh8eUf4prvSK3g5/UqOaksd6KqcPV/T2SrFT4DWkYPfL5J8VPVNd0SaPzGQLcquw30TD6CcnV+SeNhNT+XiCiMwwWFoi+I0nKeqWnMDPK5D8ZpxXQkcqB9DOuZcHvzjNJKzeMfhtNZzwIbt89dU4pO0BV2+IflwpY4UN3auD3xqNlFhKaecCc3vxbaBYxQkfs8vnT5UjDtj6MoFmxzudUZkT9zYChVpfACU6+G2bMxGQ1W6Qj/EBmfE7eb8sv9h9EKcetRueeiwTbn8cxPSUCnPY8h3T4YixUonyUDpMXI6dMh0W19WE6bA8iJ0yHRZHeVOmw+JSL3WkUEMjv4haqVxD0O78PlSk0NuTn80EXiNI190K9iT8Txjq9zX6sWq4ukLpcLQkV+TbDUoiHW4nuUFp/E/4qvzuZviyKn70arjfPTWvHRpwXhORie0jiuuzEwVMIcmjLYzfPj99oWyNu0D8gDH9PP4BiYtCICOcYBZCrdIPGHevGP6BRC6JgHEdIfzVjo6NBixHScELqPpS407mj1BKf1IYtUlEnR+xQ33ImPe3hQOlXufBmG3iD5X5J+70nNMenQtO5NSzqr//zbxxCfrN3PpRwzAMwzAMw3hf/gD1qVgMVlunIQAAAABJRU5ErkJggg==",
  Shadcn: "shadcnui",
  Zustand:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAZlBMVEX///8AAACysrL29vbOzs5iYmJQUFB0dHTAwMDLy8usrKzu7u7Hx8fn5+fExMS9vb3Z2dl6enqFhYWenp4eHh6Pj487OzuYmJhHR0fg4OA0NDRbW1sWFhZvb29VVVVpaWknJycODg4z+HfQAAADcElEQVR4nO2b25aiMBBFuamQgFy8orbo///kYPc8yXG11Clap6f2D7BXKJLKSQgCwzAMwzAMwzDenqRZyKlXWZbfk1Wkkj+HHOtNNMBFlJY/kE49u6FV5BirPe8UXh2yasVOqYJTGM5KYBWJpWoVqQtyigqhU3xUkVqvkJS0quK5itRJV2qmIrVGlS6fFTYqUltY6F4qValINcgplToFwUrBaQ8/vlguFTS00xZWlHRC+KLkin394YZECTNON+I2T8VUrS8GeFbJ+M34KhFTFR5A11tbr5kv8zSb4MssKaUbF7hUixegQGcNOsCZVT5WOs3WDEktxVKJhlMYwgZePFQ7HSndvc5CR6oBzZZLpFJ8//AlpTpSkY4UmhScuLEpLhpOB/T1EXOCyvvTfXs9bPbR06EyzwinIKY30B1Qkn96f6k23UxM15TZ8p6c7pRvo0XAP9345yl2cznnbpWm5R1pwnR0PTG9h98P+xTncqrgFWI9tIV3KWGlsgDvdWdwrxEUP2gKxEOVqzjBpPjl7dMcjFSUS6XchFLi3YtOzh8eUf4prvSK3g5/UqOaksd6KqcPV/T2SrFT4DWkYPfL5J8VPVNd0SaPzGQLcquw30TD6CcnV+SeNhNT+XiCiMwwWFoi+I0nKeqWnMDPK5D8ZpxXQkcqB9DOuZcHvzjNJKzeMfhtNZzwIbt89dU4pO0BV2+IflwpY4UN3auD3xqNlFhKaecCc3vxbaBYxQkfs8vnT5UjDtj6MoFmxzudUZkT9zYChVpfACU6+G2bMxGQ1W6Qj/EBmfE7eb8sv9h9EKcetRueeiwTbn8cxPSUCnPY8h3T4YixUonyUDpMXI6dMh0W19WE6bA8iJ0yHRZHeVOmw+JSL3WkUEMjv4haqVxD0O78PlSk0NuTn80EXiNI190K9iT8Txjq9zX6sWq4ukLpcLQkV+TbDUoiHW4nuUFp/E/4qvzuZviyKn70arjfPTWvHRpwXhORie0jiuuzEwVMIcmjLYzfPj99oWyNu0D8gDH9PP4BiYtCICOcYBZCrdIPGHevGP6BRC6JgHEdIfzVjo6NBixHScELqPpS407mj1BKf1IYtUlEnR+xQ33ImPe3hQOlXufBmG3iD5X5J+70nNMenQtO5NSzqr//zbxxCfrN3PpRwzAMwzAMw3hf/gD1qVgMVlunIQAAAABJRU5ErkJggg==",
  Framer: "framer",
  "Mermaid.js": "mermaid",
  TypeScript: "typescript",
  Shiki:"https://raw.githubusercontent.com/shikijs/shiki/main/docs/public/logo.svg",
  "Tailwind CSS": "tailwindcss",
  Stripe: "stripe",
  "Next.js": "nextdotjs",
  Prisma: "prisma",
  PostgreSQL: "postgresql",
  "Socket.io": "socketdotio",
  Storybook: "storybook",
  Figma: "figma",
  "CSS-in-JS": "styled-components",
  MongoDB: "mongodb",
  Redis: "redis",
  MySQL: "mysql",
  Express: "express",
  "Node.js": "nodedotjs",
  "React Native": "react",
  Vite: "vite",
  CSS: "css",
  Javascript: "javascript",
  "React.js": "react",
  "JSON-RPC": "json",
  "Solana Web3.js": "solana",
  BIP39: "bitcoin",
  ED25519: "gnuprivacyguard",
  TweetNacl: "javascript",
  "Database TypeScript": "typescript",
  ReactFlow: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAZlBMVEVHcEz////////////////s7O1ZWWA1NT8sKzeGhor/7PL/VI//LXn/H3X/kbO1tbewsLIAABH/sMj/AGiWlprS0tPg4OH/w9ReXWT2e6HAwMIAAAD/AFxjYmhfX2X/1ODKxcl1dXo00rsiAAAABXRSTlMALsf/xvdFxI4AAADqSURBVHgBfZIFEoQwEAQDg7sTw/7/SGzPydHoVCPJVBizbBhxrN3hLxZz4Hr+SRACiOLkJM0AmwGelxcnZQ7EcUXUFbBLPwfhNUBagYgzkgWItgP6yCxdnyNKhVlKpXJRa7NEkwNZfyPFjwyKn9FG/VuG5cB3Rk+1QFbHU6KzLNbTKZE3RIudKptiXe1nkLwwgzDJLnxLl/tEiCMEc6CaMDgCFU8cxXMvdxcl56IsrsUHz8Cba/Gz+37yu/gRXbAYJBUvQ6WMkrpt5I0M57f8Lf4rUPHcO1HtT2A2ULyL/wrO/aJmlmNWtsU20pYXfVgY6z0AAAAASUVORK5CYII=",
  "ethers.js": "ethereum",
  "@solana/web3.js": "solana",
  Hono: "hono",
  "Qwen AI":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAn1BMVEVHcExHOud5cO9iL+WZie9fS+tgTutLR+ZhVu2FevBbR+p8dfBbUu1fJOSTkPNsYu5fVexVJuZoWeygnvWGgvFiNuVhPudhVez///9hNOZgSuqxpvRhUOtePOhhROl7cO9ZJeX9/f9ZR+tzZe5rX+16WuqomfLy7/2ekfKTee3SzPnAuPa3sfbj4vzd2PpSNun49/5mU+vr5vxUFOTMxPepwbKqAAAAGHRSTlMAE7z57TiICv3+pewjuvtfzmzinNTf98REC/sNAAABU0lEQVQoka2SWZOCMBCEgRIJrHjtNYQkhHCDXOr//207qOBq4cNWbfOWj4HunmjaP2hpGMbmBTP9IAoCfR7uoWRxZGjWoCe2OwPYfRy9oRbr9wdm2QBH2vdxjN+27bU5EV23nBogaJWijFz4x8g2ge/nGWSpf9EBVa1XN0jiDkIffqszxnxE5QDnKgvvMB0Ht4Qo/GMhElQURXae5/spPSE0QK/S8zjnoi3ruq6WI3UIazFlPlDBUwjxscceLMJojyfeMCpC6DBz7UyVM8rRbXXyPFkB+G2JlqYa9kzwDMJEeglAJmjcNOX2xlaMCl4AlFI2aJtTqpQaLX0P8NTgKL7RSEEpY2QcRENBmh4gKzKAhIuBTmvfshZPIWwGV5ILx9LvSzfV4VpaBx3G+XrctbO4CCtOsYnd0z243g33eMSon9qs9KLAQXMeajvXdZcv2J/0Az/6Kq8slQAfAAAAAElFTkSuQmCC",
  Tailwind: "tailwindcss",
  "Cloudflare Workers": "cloudflare",
  // Example of how you could put a direct URL for an icon not present on simpleicons:
  // "My Custom Icon": "https://example.com/path/to/icon.svg",
};

/** small utility to detect if a string is a URL (http(s) or data URL) */
function isUrl(value: string) {
  return /^(https?:\/\/|data:)/i.test(value);
}

/** Resolves an icon source for a given tech name.
 * Returns { type: 'cdn' | 'url' | 'fallback', src: string }
 */
function resolveIconSource(rawName: string) {
  const name = rawName.trim();
  const mapped = ICON_SLUGS[name];

  // If mapping exists and looks like a URL, use it directly
  if (mapped && isUrl(mapped)) {
    return { type: "url" as const, src: mapped };
  }

  // If mapping exists and looks like a slug, use CDN
  if (mapped) {
    return { type: "cdn" as const, src: mapped };
  }

  // If the provided tech name itself is a URL, use it
  if (isUrl(name)) {
    return { type: "url" as const, src: name };
  }

  // Fallback: generate a slug suitable for simpleicons.org
  const slug = name
    .toLowerCase()
    .replace(/\+/g, "plus")
    .replace(/\./g, "dot")
    .replace(/[@\/]/g, "")
    .replace(/[^a-z0-9-]/g, "");

  return { type: "cdn" as const, src: slug };
}

/** Renders an icon using either:
 * - the simpleicons CDN (mask-based so it inherits currentColor), or
 * - an <img> for arbitrary URLs, or
 * - a simple text-initials fallback when nothing else works
 */
function TechIcon({ tech, size = 16 }: { tech: string; size?: number }) {
  const { type, src } = resolveIconSource(tech);

  // Common inline styles for icon container
  const containerStyle: React.CSSProperties = {
    width: size,
    height: size,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  };

  if (type === "cdn") {
    const url = `https://cdn.simpleicons.org/${src}`;
    // Use CSS mask so icon can be colored with currentColor
    const style: React.CSSProperties = {
      ...containerStyle,
      backgroundColor: "currentColor",
      WebkitMaskImage: `url(${url})`,
      maskImage: `url(${url})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskSize: "contain",
      maskSize: "contain",
      WebkitMaskPosition: "center",
      maskPosition: "center",
    };
    return <span aria-hidden style={style} />;
  }

  if (type === "url") {
    // Render the provided image URL. Use object-fit: contain to keep aspect ratio.
    const imgStyle: React.CSSProperties = {
      width: size,
      height: size,
      display: "inline-block",
      objectFit: "contain",
    };
    // Mark as decorative since the tech label follows the icon
    return (
      
      <img src={src} aria-hidden style={imgStyle} />
    );
  }

  // fallback (this branch may not be hit with current resolveIconSource,
  // but kept for safety): simple circle with initials
  const initials = tech
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .slice(0, 2);

  const fallbackStyle: React.CSSProperties = {
    ...containerStyle,
    fontSize: Math.max(10, Math.floor(size * 0.6)),
    lineHeight: 1,
    color: "white",
    backgroundColor: "rgba(0,0,0,0.6)",
    borderRadius: 4,
    textAlign: "center",
    fontWeight: 600,
  };

  return (
    <span aria-hidden title={tech} style={fallbackStyle}>
      {initials || "?"}
    </span>
  );
}

const projects: Project[] = [
  {
    title: "PrepedAI",
    description:
      "Engineered an AI-driven system design architect using a Next.js/Express monorepo. Bypassed unpredictable LLM output structures by implementing a custom, on-the-fly JSON auto-repair engine that parses streamed Server-Sent Events (SSE) from a local LM Studio instance into structured data arrays. Built an interactive, Zustand-managed frontend that dynamically compiles the sanitized streams into live Mermaid.js architecture diagrams and multi-phase implementation blueprints.",
    tech: [
      "Next.js",
      "React",
      "Tailwind",
      "Shadcn",
      "Zustand",
      "Express",
      "Mermaid.js",
      "Turborepo",
      "Bun",
      "LM Studio",
      "Qwen AI"
    ],
    link: "https://github.com/ddddsssss4/prepedai",
  },
  {
    title: "n8nWeb3",
    description:
      "Built a React + Node.js workflow automation platform with drag-and-drop canvas, supporting 6+ node types for triggers and actions. Integrated Ethereum and Solana blockchain wallets with Uniswap V3 and Raydium SDK for automated token swaps. Developed executor service with 10s polling, Resend email automation, and real-time execution dashboard with status tracking.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "TypeScript",
      "ReactFlow",
      "ethers.js",
      "@solana/web3.js",
      "Express",
    ],
    link: "https://github.com/ddddsssss4/n8n_web3",
  },
  {
    title: "Sumzit",
    description:
      "Built a Next.js AI platform that extracts YouTube transcripts, bypassing API blocks via a custom Android innertube fetcher. Integrated local LLM inference using LM Studio, parsing raw Server-Sent Events (SSE) to stream real-time structured markdown summaries. Developed a robust Mermaid.js rendering engine with syntax auto-sanitization for tree-style flowcharts, packaged in a highly optimized 100MB multi-stage Docker container.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Mermaid.js",
      "LM Studio",
      "Docker",
      "Framer",
      "Qwen AI"
    ],
    link: "https://github.com/ddddsssss4/sumzit",
  },
  
  {
    title: "Snappy",
    description: "Built a TypeScript CLI utility using Oclif that generates highly customizable code snapshots, drastically reducing the installation footprint by dynamically resolving the host system's Chromium executable via Puppeteer-core. Integrated Shiki for deep syntax highlighting, extracting underlying theme tokens to dynamically style translucent CSS glassmorphism components. Developed a robust multi-file vertical stacking engine and implemented automated DOM evaluation to dynamically scale the browser viewport, preventing visual clipping on large scripts.",
    tech: [
    "TypeScript",
   "Node.js",
   "Oclif",
   "Puppeteer",
   "Shiki",
      "CSS",
   "Next.JS"],
    link:"https://github.com/ddddsssss4/snappy",
  },
  
  {
    title: "Web3 Wallet Management App",
    description:
      "Built a Web3 wallet app enabling multi-wallet management with secure key phrase generation. Integrated JSON-RPC and Solana Web3.js for real-time balances and key pair generation. Implemented BIP39 mnemonic-to-seed and ED25519 derivation for strong cryptographic security.",
    tech: [
      "Javascript",
      "React.js",
      "JSON-RPC",
      "Solana Web3.js",
      "BIP39",
      "ED25519",
      "TweetNacl",
    ],
    link: "https://wallet-interaction-playground.vercel.app/",
  },
  
  {
    title: "OpsCode Blog",
    description:
      "Developed a full-stack blogging platform enabling users to create, share, and interact with posts. Boosted retention by integrating comments, social sharing, and an intuitive React/Tailwind UI. Optimized backend using Prisma and Cloudflare Workers for performance and scalability.",
    tech: [
      "Javascript",
      "TypeScript",
      "React.js",
      "Hono",
      "MongoDB",
      "Prisma",
      "Tailwind",
      "Cloudflare Workers",
    ],
    link: "https://ops-codeblog.vercel.app/",
  },
];

export function Projects() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="animate-slide-up">
        <h2 className="text-2xl font-light mb-12 text-center">
          Selected Projects
        </h2>

        <div className="grid gap-8 md:gap-12">
          {projects.map((project, index) => (
            <GlowCard
              key={index}
              className="hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-medium mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground  mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => {
                        const trimmed = tech.trim();
                        return (
                          <span
                            key={trimmed + Math.random()}
                            className="px-3 py-1 text-xs bg-muted rounded-md text-muted-foreground font-medium inline-flex items-center"
                          >
                            <TechIcon tech={trimmed} size={16} />
                            <span className="ml-2">{trimmed}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {project.link && (
                    <div className="flex-shrink-0">
                      <a
                        href={project.link}
                        className="inline-flex items-center text-sm font-medium text-primary hover:text-secondary transition-colors duration-200"
                      >
                        View Project →
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
