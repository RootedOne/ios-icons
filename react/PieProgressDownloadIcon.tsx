import type { IconProps } from "./types";
import { renderIconSize } from "./types";

interface PieProgressDownloadIconProps extends IconProps {
  /** Fraction from 0 to 1 representing readyCount / totalCount */
  progress?: number;
}

export function PieProgressDownloadIcon({
  size = 24,
  progress = 0.5,
  className = "",
  ...props
}: PieProgressDownloadIconProps) {
  const px = renderIconSize(size);
  const radius = 8.5;
  const circumference = 2 * Math.PI * radius;
  const clampedProgress = Math.min(Math.max(progress, 0.05), 0.95);
  const strokeDashoffset = circumference - clampedProgress * circumference;

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
      {/* Background track circle */}
      <circle cx="12" cy="12" r={radius} stroke="currentColor" strokeOpacity="0.25" strokeWidth="2" />

      {/* Radial progress arc */}
      <circle
        cx="12"
        cy="12"
        r={radius}
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        transform="rotate(-90 12 12)"
        className="transition-all duration-300 ease-out"
      />

      {/* Centered downward arrow */}
      <path d="M12 7.5v7" />
      <path d="m9 11.5 3 3 3-3" />
    </svg>
  );
}
