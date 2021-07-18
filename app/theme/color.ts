import { palette } from "./palette"

/**
 * Roles for colors.  Prefer using these over the palette.  It makes it easier
 * to change things.
 *
 * The only roles we need to place in here are the ones that span through the app.
 *
 * If you have a specific use-case, like a spinner color.  It makes more sense to
 * put that in the <Spinner /> component.
 */
export const color = {
  /**
   * The palette is available to use, but prefer using the name.
   */
  palette,
  /**
   * A helper for making something see-thru. Use sparingly as many layers of transparency
   * can cause older Android devices to slow down due to the excessive compositing required
   * by their under-powered GPUs.
   */
  transparent: "rgba(0, 0, 0, 0)",

  overlay: "rgba(0, 0, 0, 0.3)",
  /**
   * The screen background.
   */
  background: palette.white,

  primary: "#00879B",
  primaryShade1: "#005F73",
  primaryShade2: "#339FAF",
  primaryShade3: "#66B7C3",
  primaryShade4: "#80C3CD",
  primaryShade5: "#A6D5CD",
  primaryShade6: "#CCE7EB",
  primaryShade7: "#EDF7F8",

  darkShade: palette.dark,
  darkShade1: "#344559",
  darkShade2: "#677482",
  darkShade3: "#808B97",
  darkShade4: "#A6AEB6",
  darkShade5: "#CCD1D5",
  darkShade6: "#EDEEF0",
  darkShade7: "#F7F7F7",
  darkShade8: "#FAFAFA",

  line: palette.offWhite,

  text: palette.dark,

  error: palette.angry,

  /**
   * Storybook background for Text stories, or any stories where
   * the text color is color.text, which is white by default, and does not show
   * in Stories against the default white background
   */
  storybookDarkBg: palette.black,

  /**
   * Storybook text color for stories that display Text components against the
   * white background
   */
  storybookTextColor: palette.black,

  lightTeal: {
    color:palette.lightTeal,
  }
}

export const NBColorScheme = {
  darkText: color.darkShade,
  primary: {
    50: color.primaryShade7,
    100: color.primaryShade6,
    200: color.primaryShade5,
    300: color.primaryShade4,
    400: color.primaryShade3,
    500: color.primary,
    600: color.primary,
    700: color.primary,
    800: color.primary,
    900: color.primary,
  },
  primaryLight: {
    50: color.primaryShade7,
    100: color.primaryShade1,
    200: color.primaryShade2,
    300: color.primaryShade3,
    400: color.primaryShade4,
    500: color.primaryShade5,
    600: color.primaryShade6,
    700: color.primaryShade7,
    800: color.primary,
    900: color.primary,
  },
  secondary: {
    50: color.darkShade6,
    100: color.darkShade4,
    200: color.darkShade3,
    300: color.darkShade2,
    400: color.darkShade1,
    500: color.darkShade,
    600: color.darkShade,
    700: color.darkShade,
    800: color.darkShade,
    900: color.darkShade,
  },
  secondaryLight: {
    50: color.darkShade1,
    100: color.darkShade1,
    200: color.darkShade2,
    300: color.darkShade3,
    400: color.darkShade4,
    500: color.darkShade5,
    600: color.darkShade6,
    700: color.darkShade7,
    800: color.darkShade8,
    900: color.darkShade,
  }
}