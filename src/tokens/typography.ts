/**
 * Typography tokens from Figma Design System.
 *
 * Collections:
 *   Base       – font family, font weight (string variables)
 *   Typography – font size, line height, paragraph spacing (float variables)
 */

export const fontFamily = {
  body:    "Inter, sans-serif",
  heading: "Inter, sans-serif",
} as const;

export const fontWeight = {
  regular:  "400",
  medium:   "500",
  semibold: "600",
  bold:     "700",
} as const;

export const fontSize = {
  heading: {
    h1: { size: "64px", lineHeight: "64px", weight: fontWeight.bold },
    h2: { size: "48px", lineHeight: "48px", weight: fontWeight.bold },
    h3: { size: "32px", lineHeight: "32px", weight: fontWeight.semibold },
    h4: { size: "24px", lineHeight: "24px", weight: fontWeight.semibold },
    h5: { size: "20px", lineHeight: "20px", weight: fontWeight.semibold },
  },
  body: {
    large:  { size: "16px", lineHeight: "24px", weight: fontWeight.regular },
    medium: { size: "14px", lineHeight: "20px", weight: fontWeight.regular },
    small:  { size: "12px", lineHeight: "16px", weight: fontWeight.regular },
  },
  paragraphHeadersSmall: {
    size: "12px",
    lineHeight: "20px",
    weight: fontWeight.semibold,
  },
} as const;

export const typography = {
  fontFamily,
  fontWeight,
  fontSize,
} as const;
