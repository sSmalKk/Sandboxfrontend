import { createContext, useContext, useReducer, useMemo } from "react";
import PropTypes from "prop-types";
import themeConfig from "assets/themeConfig.json"; // Tema padrão

const MaterialUI = createContext();
MaterialUI.displayName = "MaterialUIContext";

function reducer(state, action) {
  switch (action.type) {
    case "SET_TEMPORARY_THEME":
      return { ...state, ...action.value, isTemporary: true };
    case "RESET_THEME":
      return { ...themeConfig, isTemporary: false };
    case "SET_CONFIG":
      return { ...state, [action.key]: action.value };
    case "SET_SIDENAV_TYPE": {
      // Define propriedades com base no sidenavType
      const newState = { ...state, sidenavType: action.value };
      switch (action.value) {
        case "dark":
          newState.transparentSidenav = false;
          newState.whiteSidenav = false;
          newState.sidenavColor = "dark";
          break;
        case "transparent":
          newState.transparentSidenav = true;
          newState.whiteSidenav = false;
          break;
        case "white":
          newState.transparentSidenav = false;
          newState.whiteSidenav = true;
          break;
        default:
          break;
      }
      return newState;
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function MaterialUIControllerProvider({ children }) {
  const [controller, dispatch] = useReducer(reducer, { ...themeConfig, isTemporary: false });

  const value = useMemo(() => [controller, dispatch], [controller, dispatch]);

  return <MaterialUI.Provider value={value}>{children}</MaterialUI.Provider>;
}

function useMaterialUIController() {
  const context = useContext(MaterialUI);
  if (!context) {
    throw new Error("useMaterialUIController must be used within a MaterialUIControllerProvider.");
  }
  return context;
}

// Funções para gerenciar o estado
const setConfig = (dispatch, key, value) =>
  dispatch({ type: "SET_CONFIG", key, value });

const setTemporaryTheme = (dispatch, value) =>
  dispatch({ type: "SET_TEMPORARY_THEME", value });

const resetTheme = (dispatch) => dispatch({ type: "RESET_THEME" });

const setMiniSidenav = (dispatch, value) =>
  setConfig(dispatch, "miniSidenav", value);

const setOpenConfigurator = (dispatch, value) =>
  setConfig(dispatch, "openConfigurator", value);

const setTransparentSidenav = (dispatch, value) =>
  setConfig(dispatch, "transparentSidenav", value);

const setWhiteSidenav = (dispatch, value) =>
  setConfig(dispatch, "whiteSidenav", value);

const setSidenavColor = (dispatch, value) =>
  setConfig(dispatch, "sidenavColor", value);

const setFixedNavbar = (dispatch, value) =>
  setConfig(dispatch, "fixedNavbar", value);

const setDarkMode = (dispatch, value) =>
  setConfig(dispatch, "darkMode", value);

const setDirection = (dispatch, value) =>
  setConfig(dispatch, "direction", value);

const setLayout = (dispatch, value) =>
  setConfig(dispatch, "layout", value);

const setTransparentNavbar = (dispatch, value) =>
  setConfig(dispatch, "transparentNavbar", value);

const setSidenavType = (dispatch, value) =>
  dispatch({ type: "SET_SIDENAV_TYPE", value });

MaterialUIControllerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export {
  MaterialUIControllerProvider,
  useMaterialUIController,
  setTemporaryTheme,
  resetTheme,
  setConfig,
  setMiniSidenav,
  setOpenConfigurator,
  setTransparentSidenav,
  setWhiteSidenav,
  setSidenavColor,
  setFixedNavbar,
  setDarkMode,
  setDirection,
  setLayout,
  setTransparentNavbar,
  setSidenavType,
};
