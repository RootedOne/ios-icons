import type { IconProps } from "./types";
import { createSfIcon } from "./createSfIcon";

interface RepeatIconProps extends IconProps {
  /** SF Symbol: repeat.1 */
  one?: boolean;
}

const RepeatAllIcon = createSfIcon("repeat");
const RepeatOneIcon = createSfIcon("repeat.1");

/** SF Symbol: repeat / repeat.1 */
export function RepeatIcon({ size = 24, one = false, ...props }: RepeatIconProps) {
  const Icon = one ? RepeatOneIcon : RepeatAllIcon;
  return <Icon size={size} {...props} />;
}
