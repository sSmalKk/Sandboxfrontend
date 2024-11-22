/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Icon from "@mui/material/Icon";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useMaterialUIController } from "context";

// Função para obter a cor de fundo com base no estado
const getBackgroundColor = (theme, ownerState) => {
  const { palette, functions } = theme;
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode } = ownerState;
  const { linearGradient, rgba } = functions;

  if (miniSidenav) return "transparent";
  if (transparentSidenav) return rgba(palette.background.default, 0.8);
  if (whiteSidenav) return palette.white.main;
  return darkMode
    ? palette.grey[900]
    : linearGradient(palette.gradients.light.main, palette.gradients.light.state);
};

// Função para obter o estilo do item ativo
const getActiveItemStyle = (theme, ownerState) => {
  const { palette, functions } = theme;
  const { sidenavColor, darkMode } = ownerState;
  const { linearGradient } = functions;

  return {
    background: linearGradient(
      palette.gradients[sidenavColor].main,
      palette.gradients[sidenavColor].state
    ),
    color: palette.white.main,
    "&:hover": {
      background: darkMode ? palette.grey[700] : palette.grey[300],
    },
  };
};

// Estilo do container da barra lateral
const SideBarRoot = styled(Box)(({ theme, ownerState }) => ({
  width: ownerState.miniSidenav ? theme.spacing(8) : theme.spacing(30),
  height: "100%",
  background: getBackgroundColor(theme, ownerState),
  boxShadow: theme.boxShadows.xxl,
  display: "flex",
  flexDirection: "column",
  transition: theme.transitions.create(["background-color", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.shorter,
  }),
  "&:hover": {
    width: theme.spacing(30),
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.standard,
    }),
  },
}));

// Estilo dos itens da barra lateral
const SideBarItem = styled(ListItem)(({ theme, active, ownerState }) => {
  const { palette, transitions, borders } = theme;
  const { darkMode } = ownerState;
  const { borderRadius } = borders;

  const baseStyle = {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1.5),
    borderRadius: borderRadius.md,
    background: darkMode ? palette.grey[800] : "transparent",
    color: darkMode ? palette.grey[300] : palette.text.primary,
    transition: transitions.create(["background-color", "color"], {
      easing: transitions.easing.easeInOut,
      duration: transitions.duration.shorter,
    }),
    "&:hover": {
      background: darkMode ? palette.grey[700] : palette.grey[200],
      color: palette.primary.main,
    },
  };

  const activeStyle = active ? getActiveItemStyle(theme, ownerState) : {};

  return { ...baseStyle, ...activeStyle };
});

// Título oculto até hover
const SideBarTitle = styled(Typography)(({ theme, ownerState }) => ({
  opacity: ownerState.miniSidenav ? 0 : 1,
  marginLeft: theme.spacing(2),
  whiteSpace: "nowrap",
  transition: theme.transitions.create("opacity", {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  visibility: ownerState.miniSidenav ? "hidden" : "visible",
}));

function SideBar({ routes }) {
  const [controller] = useMaterialUIController();
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;
  const ownerState = { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor };
  const location = useLocation();

  return (
    <SideBarRoot ownerState={ownerState}>
      <List>
        {routes.map(({ name, route, icon, type }, index) => {
          if (type === "divider")
            return (
              <Box
                key={index}
                sx={{
                  margin: "12px 0",
                  height: 1,
                  background: darkMode ? "gray" : "lightgray",
                }}
              />
            );

          const isActive = location.pathname === route;

          return (
            <SideBarItem
              key={index}
              active={isActive}
              ownerState={ownerState}
              component={NavLink}
              to={route}
            >
              <Icon sx={{ marginRight: "12px" }}>{icon}</Icon>
              <SideBarTitle variant="button" ownerState={ownerState}>
                {name}
              </SideBarTitle>
            </SideBarItem>
          );
        })}
      </List>
    </SideBarRoot>
  );
}

export default SideBar;
