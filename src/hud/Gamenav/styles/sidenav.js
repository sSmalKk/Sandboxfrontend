const sidenavStyles = (theme, ownerState) => {
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode } = ownerState;
  const { palette, transitions, functions, boxShadows } = theme;
  const { gradients, white, transparent, grey } = palette;
  const { linearGradient, pxToRem } = functions;

  let backgroundValue = darkMode
    ? linearGradient(gradients.dark.main, gradients.dark.state)
    : whiteSidenav
    ? white.main
    : transparentSidenav
    ? transparent.main
    : grey[100];

  return {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: miniSidenav ? pxToRem(80) : pxToRem(250),
    background: backgroundValue,
    boxShadow: transparentSidenav ? "none" : boxShadows.xxl,
    overflow: "hidden",
    transition: transitions.create(["width", "background-color"], {
      easing: transitions.easing.easeInOut,
      duration: transitions.duration.standard,
    }),
    "&:hover": {
      width: miniSidenav ? pxToRem(250) : undefined,
    },
  };
};

export default sidenavStyles;
