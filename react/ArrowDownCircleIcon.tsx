import type { IconProps } from "./types";
import { renderIconSize } from "./types";

export function ArrowDownCircleIcon({ size = 24, className = "", ...props }: IconProps) {
  const px = renderIconSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v8" />
      <path d="m8 12 4 4 4-4" />
    </svg>
  );
}
