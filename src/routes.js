/**
  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `        allowedRoles: [1, 2, 3], // Todos os tipos
component` key is used to store the         allowedRoles: [1, 2, 3], // Todos os tipos
component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import DevPage from "layouts/dev";
import GamePage from "layouts/GamePage";
import InventoryPage from "layouts/InventoryPage";
import Billing from "layouts/billing";
import RTL from "layouts/rtl";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import PeriodicTable from "layouts/Periodictable";
// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Game Page",
    key: "gamePage",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/game",
    allowedRoles: [1, 2, 3], // Todos os tipos
    component: <GamePage />,

  }, {
    type: "divider",
    name: "Inventory Page",
    key: "inventoryPage",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/inventory",
    allowedRoles: [1, 2, 3], // Todos os tipos
    component: <InventoryPage />,

  }, {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    allowedRoles: [1, 2, 3], // Todos os tipos
    component: <Dashboard />,
  }, {
    type: "collapse",
    name: "Periodic Table",
    key: "periodic-table",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/periodic-table",
    allowedRoles: [1, 2, 3], // Todos os tipos
    component: <PeriodicTable />,
  },
  {
    type: "collapse",
    name: "DevPage",
    key: "DevPage",
    icon: <Icon fontSize="small">code_icon</Icon>,
    route: "/DevPage",
    allowedRoles: [ 2, 3], // Todos os tipos
    component: <DevPage />,
  },

  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    allowedRoles: [1, 2, 3], // Todos os tipos
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "RTL",
    key: "rtl",
    icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
    route: "/rtl",
    allowedRoles: [1, 2, 3], // Todos os tipos
    component: <RTL />,
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    allowedRoles: [1, 2, 3], // Todos os tipos
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    allowedRoles: [1, 2, 3], // Todos os tipos
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    allowedRoles: [1, 2, 3], // Todos os tipos
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    allowedRoles: [1, 2, 3], // Todos os tipos
    component: <SignUp />,
  },
];

export default routes;
