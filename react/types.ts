import type { SVGProps } from "react";

/** Global knob — one constant shrinks every SF icon render. */
export const ICON_RENDER_SCALE = 0.85;

export function renderIconSize(size: number): number {
  return Math.max(10, Math.round(size * ICON_RENDER_SCALE));
}

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}
