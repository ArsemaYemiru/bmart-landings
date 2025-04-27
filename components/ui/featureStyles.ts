export const featureStyles = {
  title: {
    fontSize: 34,
    fontWeight: 900,

    "@media (max-width: $mantine-breakpoint-sm)": {
      fontSize: 24,
    },
  },

  description: {
    maxWidth: 600,
    margin: "auto",

    "&::after": {
      content: "''",
      display: "block",
      backgroundColor: "var(--mantine-color-blue-filled)",
      width: 45,
      height: 2,
      marginTop: "var(--mantine-spacing-sm)",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  cardTitle: {
    "&::after": {
      content: "''",
      display: "block",
      backgroundColor: "var(--mantine-color-blue-filled)",
      width: 45,
      height: 2,
      marginTop: "var(--mantine-spacing-sm)",
    },
  },
};
