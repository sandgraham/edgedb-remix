import { darkTheme, globalCss } from "~/styles/stitches.config";

export const global = globalCss({
  // FOUC-less dark mode - not supporting user theme switching ATM
  "@media (prefers-color-scheme: dark)": {
    ":root": {
      colorScheme: "dark",
      ...Object.values(darkTheme.colors).reduce((acc: any, cur) => {
        acc[cur.variable] = cur.value;
        return acc;
      }, {}),
    },
  },

  // Allow adding a border to an element by just adding a border-width
  "*, ::before, ::after": {
    borderWidth: 0,
    borderStyle: "solid",
    borderColor: "currentColor",
  },

  html: {
    fontFamily: "$sans",
  },

  body: {
    backgroundColor: "$bg",
    color: "$fg",
  },

  // Reset the default placeholder opacity in Firefox
  "input::placeholder, textarea::placeholder": {
    opacity: 1,
    color: "#9ca3af",
  },
});
