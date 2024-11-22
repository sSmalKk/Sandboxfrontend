const sidenavCollapseStyles = (theme, ownerState) => {
  const { active, darkMode, whiteSidenav } = ownerState;
  const { palette, functions, transitions, borders } = theme;
  const { white, grey, gradients } = palette;
  const { linearGradient, pxToRem } = functions;
  const { borderRadius } = borders;

  return {
    background: active
      ? linearGradient(gradients.primary.main, gradients.primary.state)
      : "transparent",
    color: active
      ? white.main
      : darkMode
      ? grey[300]
      : whiteSidenav
      ? grey[800]
      : grey[700],
    borderRadius: borderRadius.md,
    padding: `${pxToRem(8)} ${pxToRem(16)}`,
    cursor: "pointer",
    transition: transitions.create(["background-color", "color"], {
      easing: transitions.easing.easeInOut,
      duration: transitions.duration.shorter,
    }),
    "&:hover": {
      background: active
        ? linearGradient(gradients.primary.main, gradients.primary.state)
        : grey[200],
    },
  };
};

export default sidenavCollapseStyles;
