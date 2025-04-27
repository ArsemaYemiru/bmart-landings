export const bunnaStyles = {
  wrapper: {
    position: "relative",
    paddingTop: "180px",
    paddingBottom: "130px",
    backgroundImage:
      "url(https://bunnabanksc.com/wp-content/uploads/2023/08/IMG_3345-scaled.webp)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",

    "@media (max-width: $mantine-breakpoint-xs)": {
      paddingTop: "80px",
      paddingBottom: "50px",
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    paddingLeft: "var(--mantine-spacing-md)",
    paddingRight: "var(--mantine-spacing-md)",
    color: "var(--mantine-color-white)",
    marginBottom: "var(--mantine-spacing-xs)",
    textAlign: "center",
    fontFamily: "Greycliff CF, var(--mantine-font-family)",

    "@media (max-width: $mantine-breakpoint-xs)": {
      fontSize: 28,
      textAlign: "left",
    },
  },

  highlight: {
    color: "var(--mantine-color-primary-4)",
  },

  description: {
    color: "var(--mantine-color-gray-0)",
    textAlign: "center",

    "@media (max-width: $mantine-breakpoint-xs)": {
      fontSize: "var(--mantine-font-size-md)",
      textAlign: "left",
    },
  },

  controls: {
    marginTop: "calc(var(--mantine-spacing-xl) * 1.5)",
    display: "flex",
    justifyContent: "center",
    paddingLeft: "var(--mantine-spacing-md)",
    paddingRight: "var(--mantine-spacing-md)",

    "@media (max-width: $mantine-breakpoint-xs)": {
      flexDirection: "column",
    },
  },

  control: {
    height: 42,
    fontSize: "var(--mantine-font-size-md)",

    "&:not(:first-of-type)": {
      marginLeft: "var(--mantine-spacing-md)",
    },

    "@media (max-width: $mantine-breakpoint-xs)": {
      "&:not(:first-of-type)": {
        marginTop: "var(--mantine-spacing-md)",
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: "var(--mantine-color-white)",
    backgroundColor: "rgba(255, 255, 255, 0.4)",

    "@mixin hover": {
      backgroundColor: "rgba(255, 255, 255, 0.45)",
    },
  },
} as const;
