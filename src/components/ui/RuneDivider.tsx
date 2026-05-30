import { RuneIcon } from "./RuneIcon";
import { cn } from "@/lib/utils";

interface RuneDividerProps {
  className?: string;
  light?: boolean;
}

export function RuneDivider({ className = "", light = false }: RuneDividerProps) {
  return (
    <div className={cn("flex items-center gap-4 my-4", className)}>
      <div
        className={cn(
          "flex-1 h-px",
          light ? "bg-white/20" : "bg-brand-gold/30"
        )}
      />
      <RuneIcon
        size={18}
        className={cn(light ? "text-white/50" : "text-brand-gold/60")}
      />
      <div
        className={cn(
          "flex-1 h-px",
          light ? "bg-white/20" : "bg-brand-gold/30"
        )}
      />
    </div>
  );
}
