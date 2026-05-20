import { clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-body-small",
        "text-paragraph-headers-small",
        "text-body-medium",
        "text-body-large",
        "text-h5",
        "text-h4",
        "text-h3",
        "text-h2",
        "text-h1",
      ],
    },
  },
});

/** Utility: merge Tailwind classes safely */
const cn = (...inputs) => twMerge(clsx(inputs));

/**
 * Returns the icon element's size class based on variant + alone mode.
 *
 * From Figma:
 *  - Link alone → 24 px (size-6)
 *  - Pill        → 16 px (size-4)
 *  - Everything else → 18 px (size-[18px])
 */
const iconSizeFor = (variant, alone) => {
  if (variant === "link" && alone) return "size-6";
  if (variant === "pill") return "size-4";
  return "size-[18px]";
};

// ─── Style maps (from Figma token values) ────────────────────────────────────

const BASE =
  "inline-flex items-center justify-center relative " +
  "font-sans font-medium text-body-medium " +
  "transition-colors duration-150 ease-in-out " +
  "select-none focus:outline-none";

const VARIANT_STYLES = {
  // ── Primary ──────────────────────────────────────────────────────────────
  primary: {
    enabled: cn(
      "bg-primary-500 text-white shadow-button rounded-sm",
      "hover:bg-primary-600",
      "active:bg-primary-700",
      "focus-visible:ring-2 focus-visible:ring-primary-100 focus-visible:ring-offset-0"
    ),
    disabled:
      "bg-neutral-100 text-neutral-300 shadow-none rounded-sm pointer-events-none",
    alone: "px-sp16 py-sp8",
    withText: "px-sp16 py-sp8 min-w-[80px]",
    iconGap: "gap-sp8",
    noIconGap: "gap-sp4",
  },

  // ── Secondary ─────────────────────────────────────────────────────────────
  secondary: {
    enabled: cn(
      "bg-primary-50 text-neutral-700 border border-primary-200 rounded-sm",
      "hover:bg-primary-100 hover:border-transparent",
      "active:bg-primary-300 active:border-primary-300",
      "focus-visible:ring-2 focus-visible:ring-primary-200 focus-visible:ring-offset-0"
    ),
    disabled:
      "bg-neutral-100 text-neutral-300 border-transparent rounded-sm pointer-events-none",
    alone: "p-sp8",
    withText: "px-sp16 py-sp8 min-w-[80px]",
    iconGap: "gap-sp8",
    noIconGap: "gap-sp4",
  },

  // ── Link ──────────────────────────────────────────────────────────────────
  link: {
    enabled: cn(
      "text-primary-500 rounded-sm underline-offset-2",
      "hover:underline",
      "focus-visible:ring-1 focus-visible:ring-primary-500 focus-visible:ring-offset-1"
    ),
    disabled: "text-neutral-200 rounded-sm pointer-events-none",
    alone: "size-10",           // 40 × 40
    withText: "p-none",         // no padding — link buttons are borderless
    iconGap: "gap-sp4",
    noIconGap: "gap-none",
  },

  // ── Pill ──────────────────────────────────────────────────────────────────
  pill: {
    enabled: cn(
      "bg-white text-primary-500 border border-primary-200 rounded-lg",
      "hover:bg-primary-100 hover:border-transparent",
      "active:bg-primary-50 active:border-primary-200",
      "focus-visible:ring-2 focus-visible:ring-primary-200 focus-visible:ring-offset-0"
    ),
    disabled:
      "bg-neutral-100 text-neutral-200 border border-neutral-200 rounded-lg pointer-events-none",
    alone: "size-10",           // 40 × 40
    withText: "p-sp8",
    iconGap: "gap-sp8",
    noIconGap: "gap-sp4",
  },
};

// ─── Component ───────────────────────────────────────────────────────────────

/**
 * Button — design system primitive.
 *
 * Variants : primary | secondary | link | pill
 * Icon positions: none | left | right | alone
 *
 * Accepts either:
 *   icon      — any React node (SVG, img, <Icon />, …)
 *   iconName  — kebab-case string key from the Icon set (convenience shorthand)
 *
 * If both are provided, `icon` wins.
 */
const Button = ({
  variant = "primary",
  iconPosition = "none",
  icon,
  iconName,
  children,
  disabled = false,
  className,
  type = "button",
  ...rest
}) => {
  // Resolve the icon element: explicit node takes precedence over iconName string
  const resolvedIcon = icon ?? (iconName ? <Icon name={iconName} /> : null);
  const alone = iconPosition === "alone";
  const hasIcon = Boolean(resolvedIcon);
  const hasText = !alone && Boolean(children);
  const withIcon = hasIcon && !alone;

  const s = VARIANT_STYLES[variant];
  const stateClasses = disabled ? s.disabled : s.enabled;
  const paddingClasses = alone ? s.alone : s.withText;
  const gapClasses = withIcon ? s.iconGap : s.noIconGap;

  // Pill uses body-small + regular weight instead of body-medium + medium
  const typographyOverride =
    variant === "pill" ? "text-body-small font-regular" : "";

  const classes = cn(
    BASE,
    stateClasses,
    paddingClasses,
    gapClasses,
    typographyOverride,
    className
  );

  const iconEl = hasIcon && (
    <span
      className={cn(
        "shrink-0 flex items-center justify-center",
        iconSizeFor(variant, alone)
      )}
      aria-hidden="true"
    >
      {resolvedIcon}
    </span>
  );

  return (
    <button type={type} disabled={disabled} className={classes} {...rest}>
      {alone ? (
        iconEl
      ) : (
        <>
          {iconPosition === "left" && iconEl}
          {hasText && <span className="whitespace-nowrap">{children}</span>}
          {iconPosition === "right" && iconEl}
        </>
      )}
    </button>
  );
};

Button.propTypes = {
  /** Visual style of the button */
  variant: PropTypes.oneOf(["primary", "secondary", "link", "pill"]),
  /** Where to render the icon relative to the label */
  iconPosition: PropTypes.oneOf(["none", "left", "right", "alone"]),
  /** Icon element (any React node — SVG, img, icon component, etc.) — takes precedence over iconName */
  icon: PropTypes.node,
  /** Convenience shorthand: kebab-case icon name from the design system icon set */
  iconName: PropTypes.string,
  /** Button label */
  children: PropTypes.node,
  /** Disables interaction and applies disabled styling */
  disabled: PropTypes.bool,
  /** Extra Tailwind classes (merged safely via tailwind-merge) */
  className: PropTypes.string,
  /** Native button type */
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  /** Click handler */
  onClick: PropTypes.func,
};

export default Button;
