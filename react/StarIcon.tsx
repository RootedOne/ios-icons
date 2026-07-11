import type { IconProps } from "./types";
import { renderIconSize } from "./types";
import { SYMBOLS } from "./symbols";
import { createSfIcon } from "./createSfIcon";

interface StarIconProps extends IconProps {
  /** SF Symbol: star.fill — submodule has no star.fill; filled uses outer contour */
  filled?: boolean;
}

const StarOutlineIcon = createSfIcon("star");

/** SF Symbol: star / star.fill */
export function StarIcon({ size = 24, filled = false, ...props }: StarIconProps) {
  if (!filled) return <StarOutlineIcon size={size} {...props} />;

  const { viewBox, paths } = SYMBOLS.star;
  const solidPath = paths[0].split(/Z\s*M/i)[0] + "Z";

  const px = renderIconSize(size);

  return (
    <svg
      width={px}
      height={px}
      viewBox={viewBox}
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path d={solidPath} fill="currentColor" />
    </svg>
  );
}
