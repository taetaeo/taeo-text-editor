export type FontFamilyCSSType = {
  label?: string;
  style?: string;
  family?: string;
};

export type FontColorCSSType = {
  color?: string;
};

export type FontSizeCSSType = {
  fontSize?: string;
};

export type FontStyleOptionType = "fontFamily" | "fontSize" | "fontWeight" | "color";

export type FontCSSType = FontFamilyCSSType & FontColorCSSType & FontSizeCSSType;
