import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, Outlet } from "react-router-dom";
import logo from "../assets/logo.svg";
import * as SVG from "../assets/svgs";
import useToken from "../hooks/use-token";
import Accounting from "../pages/accounting";
import CreatePanel from "../pages/create-panel";
import CustomerService from "../pages/customer-services";
import EmployeePortal from "../pages/employe-portal";

const drawerWidth = 240;
const local = localStorage.getItem('accessTo')
console.log("🚀 ~ file: drawer.js:31 ~ local:", local)

const accessTo = local;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({

  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "users",
    icon: "dash",
    route: "/dashboard",
    component: <EmployeePortal />,
  },
  accessTo.includes('Accounting') && {
    type: "collapse",
    name: "Accounting",
    key: "FilterEarning",
    icon: "accounting",
    route: "/accounting",
    component: <Accounting />,
  },

  accessTo.includes('CreatorsPanel') && {
    type: "collapse",
    name: "Creators Panel",
    key: "CreatorPanel",
    icon: "creator",
    route: "/createPanel",
    component: <CreatePanel />,
  },

  accessTo.includes('CustomerService') && {
    type: "collapse",
    name: "Customer Service",
    key: "customerService",
    icon: "customerService",
    route: "/customerService",
    component: <CustomerService />,
  },
  {
    type: "collapse",
    name: "Employees Portal",
    key: "EmployeePortal",
    icon: "employeePortal",
    route: "/employeePortal",
    component: <EmployeePortal />,
  },
];
export default function PersistentDrawerLeft() {
  const theme = useTheme();
  // const navigation = useNavigation();
  // const match = useMatch();
  // console.log('match=>>', match);
  const loc = useLocation();

  const [open, setOpen] = React.useState(false);
  const [route, setRoute] = React.useState("users");
  const { token, setToken } = useToken();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline backgroundColor="#0e1a2e" /> */}
      <AppBar open={open} >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" align="center">
            Videhope
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,

          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#0E1A2E",
            paddingX: "10px",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon color={"primary"} />
            ) : (
              <ChevronRightIcon color={"primary"} />
            )}
          </IconButton>
        </DrawerHeader>
        <img
          src={logo}
          alt={" image hare"}
          className={"logo"}
          style={{ height: "70px" }}
        />
        <Divider />
        <List style={{ flex: 1 }}>
          {routes?.map(
            (
              { type, name, icon, title, noCollapse, key, href, route },
              index
            ) => {
              const iconName = SVG[icon];
              return (
                <Link key={index} style={{ textDecoration: "none" }} to={route}>
                  <ListItem key={index} disablePadding>
                    <ListItemButton
                      style={{
                        width: "200px",
                        borderRadius: "10px",
                        backgroundColor:
                          route === loc.pathname ? "#014BC3" : null,
                      }}
                    >
                      <ListItemIcon>
                        <img src={iconName} />
                      </ListItemIcon>
                      <ListItemText sx={{ color: "white" }} primary={name} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              );
            }
          )}
          <Box position={"absolute"} bottom={"30px"} width={"100%"}>
            <Link style={{ textDecoration: "none" }} to={"/earnings"}>
              <ListItem key={6} disablePadding>
                <ListItemButton style={{ width: "200px" }}>
                  <ListItemIcon>
                    <img src={SVG.settings} />
                  </ListItemIcon>
                  <ListItemText sx={{ color: "white" }} primary={"Setting"} />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link onClick={() => { setToken('') }} style={{ textDecoration: "none" }} to={"/"}>
              <ListItem key={6} disablePadding>
                <ListItemButton style={{ width: "200px" }}>
                  <ListItemIcon>
                    <img src={SVG.logout} />
                  </ListItemIcon>
                  <ListItemText sx={{ color: "white" }} primary={"Sign out"} />
                </ListItemButton>
              </ListItem>
            </Link>
          </Box>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
}