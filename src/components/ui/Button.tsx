import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size    = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: Variant;
  size?:    Size;
  arrow?:   boolean;
  className?: string;
}

type ButtonProps =
  | (ButtonBaseProps & ComponentPropsWithoutRef<"button"> & { href?: undefined })
  | (ButtonBaseProps & ComponentPropsWithoutRef<typeof Link> & { href: string });

const base =
  "inline-flex items-center gap-2.5 font-semibold tracking-wide transition-all duration-[450ms] ease-in-out cursor-pointer select-none relative";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-green text-white rounded-full " +
    "hover:bg-[#0f3d1f] hover:shadow-xl hover:shadow-brand-green/20 active:scale-[0.98] active:duration-75",
  secondary:
    "border border-brand-green text-brand-green rounded-full " +
    "hover:bg-brand-green hover:text-white",
  ghost:
    "text-brand-gold underline-grow",
};

const sizes: Record<Size, string> = {
  sm: "text-[13px] px-5 py-2.5",
  md: "text-[14px] px-7 py-3.5",
  lg: "text-[15px] px-9 py-4",
};

export function Button({
  variant = "primary",
  size    = "md",
  arrow   = true,
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <svg
          width="16" height="16" viewBox="0 0 16 16" fill="none"
          className={cn(
            "transition-transform duration-[450ms] ease-in-out",
            variant !== "ghost" && "group-hover:translate-x-1.5"
          )}
          aria-hidden="true"
        >
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );

  if (href !== undefined) {
    type LinkRestProps = Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">;
    return (
      <Link href={href} className={cn(classes, "group")} {...(props as LinkRestProps)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cn(classes, "group")} {...(props as ComponentPropsWithoutRef<"button">)}>
      {content}
    </button>
  );
}
