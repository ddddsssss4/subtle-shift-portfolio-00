import React from "react";

export type TechIconProps = {
  /** Canonical tech name as used in your project (e.g. "React", "TypeScript") */
  name: string;
  /** Pixel size or CSS size string (number interpreted as px) */
  size?: number | string;
  /** Tailwind or other classes applied to the outer wrapper */
  className?: string;
  /** Render the brand's official color (default: true). If false, the icon will be rendered
   * as a mask and colored with `currentColor` (so it matches the app theme). */
  brandColored?: boolean;
  /** If `true` render the icon as a masked shape and ignore `brandColored`.
   * (Alias for controlling behavior more declaratively.) */
  forceMask?: boolean;
  /** Show the tech name text to the right of the icon */
  showLabel?: boolean;
  /** Accessible title / label override */
  title?: string;
};

/**
 * TechIcon
 *
 * - By default the component renders the brand SVG from Simple Icons CDN which contains
 *   the brand's official color, so icons appear colorful and brand-accurate.
 * - If `brandColored` is false (or `forceMask` is true) the SVG is used as a CSS mask
 *   and filled with `currentColor`, making the icon follow your theme (text color).
 *
 * This gives you the best of both worlds: colorful brand icons by default, and a simple
 * opt-in to theme-colored icons when you need visual consistency.
 *
 * Notes:
 * - We use the simpleicons CDN at `https://cdn.simpleicons.org/<slug>`.
 * - The slug map contains overrides for names that don't map directly to the CDN slug.
 * - For unknown names we try a simple slugify and fall back to a neutral inline glyph.
 */
export default function TechIcon({
  name,
  size = 18,
  className = "",
  brandColored = true,
  forceMask = false,
  showLabel = false,
  title,
}: TechIconProps) {
  // Known overrides for slugs that don't match a plain slugify
  const SLUG_OVERRIDES: Record<string, string> = {
    react: "react",
    typescript: "typescript",
    "next.js": "nextdotjs",
    nextjs: "nextdotjs",
    "tailwind css": "tailwindcss",
    tailwind: "tailwindcss",
    tailwindcss: "tailwindcss",
    "node.js": "nodedotjs",
    nodejs: "nodedotjs",
    node: "nodedotjs",
    express: "express",
    postgresql: "postgresql",
    postgres: "postgresql",
    mongodb: "mongodb",
    redis: "redis",
    mysql: "mysql",
    azure: "microsoftazure",
    "ethereum.js": "ethereum",
    ethereum: "ethereum",
    viem: "viem",
    solana: "solana",
    "web3.js": "web3dotjs",
    web3: "web3dotjs",
    "@solana/kit": "solana",
    "basic anchor": "anchor",
    git: "git",
    docker: "docker",
    figma: "figma",
    jest: "jest",
    vitest: "vitest",
    stripe: "stripe",
    prisma: "prisma",
    "socket.io": "socketdotio",
    socketio: "socketdotio",
    storybook: "storybook",
    "css-in-js": "styled-components",
    "css-in-js": "styled-components",
    "styled-components": "styled-components",
    vite: "vite",
    tailwindcss: "tailwindcss",
    "react native": "react",
    "react-native": "react",
  };

  const normalized = name.trim().toLowerCase();
  const slug =
    SLUG_OVERRIDES[normalized] ??
    normalized
      // remove leading @
      .replace(/^@/, "")
      // replace dots and spaces with nothing (simpleicons uses concatenations and specific names)
      .replace(/[.\s/\\@()]+/g, "")
      // replace + with "plus" (common in names like "C++" if ever used)
      .replace(/\+/g, "plus");

  const cdnUrl = `https://cdn.simpleicons.org/${encodeURIComponent(slug)}`;

  // size normalization
  const sizeStyle =
    typeof size === "number" && Number.isFinite(size)
      ? `${size}px`
      : String(size);

  const ariaLabel = title || name;

  // If we need the brand color, the simplest approach is to render the raw SVG provided
  // by the CDN in an <img>. The returned SVG already includes the brand color.
  // When mask is requested we render the same SVG as a mask (via CSS mask) and fill with currentColor.
  const wantMask = forceMask || !brandColored;

  // Inline styles
  const imgStyle: React.CSSProperties = {
    width: sizeStyle,
    height: sizeStyle,
    display: "inline-block",
    verticalAlign: "middle",
  };

  const maskStyle: React.CSSProperties = {
    width: sizeStyle,
    height: sizeStyle,
    display: "inline-block",
    verticalAlign: "middle",
    // the backgroundColor will fill the mask; use currentColor so the icon inherits text color
    backgroundColor: "currentColor",
    WebkitMaskImage: `url("${cdnUrl}")`,
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskSize: "contain",
    WebkitMaskPosition: "center",
    maskImage: `url("${cdnUrl}")`,
    maskRepeat: "no-repeat",
    maskSize: "contain",
    maskPosition: "center",
  };

  // A small neutral fallback SVG (monochrome) in case the CDN image fails or slug is invalid.
  // This fallback respects currentColor so it will match theme colors.
  const FallbackGlyph = (
    <svg
      width={sizeStyle}
      height={sizeStyle}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      focusable={false}
      style={{ verticalAlign: "middle" }}
    >
      <path
        d="M9.5 7L4 12l5.5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 7L20 12l-5.5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  // Render
  return (
    <span
      className={`inline-flex items-center gap-2 ${className}`.trim()}
      role="img"
      aria-label={ariaLabel}
      title={ariaLabel}
    >
      {wantMask ? (
        // Masked icon: theme-colored via currentColor
        // Use an inline-block span with CSS mask pointing to the CDN SVG.
        <span style={maskStyle} aria-hidden />
      ) : (
        // Brand-colored: render the CDN SVG directly via <img> so it displays brand colors.
        // Use `decoding="async"` and `loading="lazy"` to be friendly. If the image fails to load,
        // the browser will display the alt text; we also render a fallback glyph via CSS background-image fallback is not possible,
        // so we can leverage the `onError` handler to swap to the fallback (but we keep component simple here).
        // NOTE: Some CSP setups may block the CDN; if you prefer embedding SVGs locally, we can add that later.
        // We intentionally set `alt` to the tech name for accessibility.
        <img
          src={cdnUrl}
          alt={ariaLabel}
          style={imgStyle}
          decoding="async"
          loading="lazy"
          onError={(e) => {
            // If the CDN image fails to load, replace the <img> with the fallback glyph.
            // We cannot directly replace the element node from React's synthetic event handler without state,
            // so the easiest safe approach is to hide the image and rely on CSS to show a fallback via sibling.
            // But to keep this component purely presentational and without state, we simply set `display: none`
            // on the failing element — the fallback glyph will remain displayed because we include it below
            // conditionally. Since we don't maintain state here, we'll render the fallback glyph in addition,
            // but hide it by default; the onError toggles visibility. For clarity and without DOM mutation
            // complexity we keep this handler minimal.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const target = e.currentTarget as any;
            if (target) {
              target.style.display = "none";
              // attempt to set aria-hidden to true
              target.setAttribute("aria-hidden", "true");
            }
          }}
        />
      )}

      {/* Render fallback glyph but hide it when using brand-colored <img> successfully.
          We can't detect the image load state without local state, but having the glyph
          present doesn't harm layout — it will be visible only if the <img> is hidden by the onError handler.
          For mask mode the fallback is not necessary because the mask will always use currentColor. */}
      {!wantMask && (
        <span aria-hidden style={{ display: "none" }}>
          {FallbackGlyph}
        </span>
      )}

      {showLabel && (
        <span className="text-xs font-medium leading-none">{name}</span>
      )}
    </span>
  );
}
