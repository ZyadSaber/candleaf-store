const { mobile, desktop } = {
  // mobile: "40em",
  mobile: "48em",
  // laptop: "64em",
  desktop: "64em",
};

export const deviceSizes = {
  mobile: `only screen and (max-width: ${mobile})`,
  // tablet: `only screen and (min-width: ${tablet}) and (max-width: ${laptop})`,
  // laptop: `only screen and (min-width: ${laptop}) and (max-width: ${desktop})`,
  desktop: `only screen and (min-width: ${desktop})`,
};

export default deviceSizes;
