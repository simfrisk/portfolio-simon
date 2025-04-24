const breakpoints = {
  smallPhone: "340px",
  desktop: "1024px",
};

export const theme = {
  media: {
    smallPhone: `(max-width: ${breakpoints.smallPhone})`,
    desktop: `(min-width: ${breakpoints.desktop})`,
  },
};