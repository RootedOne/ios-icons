import type { IconProps } from "./types";
import { renderIconSize } from "./types";
import { SYMBOLS, type SymbolName } from "./symbols";

export function createSfIcon(name: SymbolName) {
  const { viewBox, paths } = SYMBOLS[name];

  function SfIcon({ size = 24, ...props }: IconProps) {
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
        {paths.map((d, i) => (
          <path key={i} d={d} fill="currentColor" />
        ))}
      </svg>
    );
  }

  SfIcon.displayName = name;
  return SfIcon;
}
