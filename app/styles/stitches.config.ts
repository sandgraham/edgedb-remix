import * as Stitches from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  theme,
  createTheme,
  getCssText,
  config,
} = Stitches.createStitches({
  theme: {
    fonts: {
      serif: "Newsreader",
      sans: "Inter",
    },
    colors: {
      bg: "hsl(210deg 10% 98%)",
      fg: "hsl(210deg 10% 25%)",
    },
  },
});

export const darkTheme = createTheme("dark", {
  colors: {
    bg: "hsl(210deg 10% 10%)",
    fg: "hsl(210deg 10% 80%)",
  },
});

export type CSS = Stitches.CSS<typeof config>;

export const box = (_css: CSS) => css()({ css: _css });
