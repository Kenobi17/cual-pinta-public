import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import LogoAppBar from "../assets/LogoAppBar.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButtonTransparent: {
    marginRight: theme.spacing(2),
    color: "#f6c90e",
    transition: "color 500ms",
  },
  menuButtonSolid: {
    marginRight: theme.spacing(2),
    color: "#000000",
    transition: "color 500ms",
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    maxWidth: 200,
  },
  appBarTransparent: {
    backgroundColor: "transparent",
    boxShadow: "none",
    transition: "background-color 500ms",
    button: {
      marginRight: theme.spacing(2),
      color: "#f6c90e",
    },
  },
  appBarSolid: {
    backgroundColor: "#f6c90e",
    transition: "background-color 500ms",
  },
}));

const Header = ({ isAuthenticated, setAuth }) => {
  let history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [navStyle, setNavStyle] = useState("appBarTransparent");
  const navRef = React.useRef();
  navRef.current = navStyle;
  const [buttonStyle, setButtonStyle] = useState("menuButtonTransparent");
  const buttonRef = React.useRef();
  buttonRef.current = buttonStyle;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 70;
      if (show) {
        setNavStyle("appBarSolid");
        setButtonStyle("menuButtonSolid");
      } else {
        setNavStyle("appBarTransparent");
        setButtonStyle("menuButtonTransparent");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (route) => {
    history.push(`/${route}`);
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/");
    setAuth(false);
  };
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes[navRef.current]}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img
              src={LogoAppBar}
              alt="Cuál Pinta Tucumán"
              className={classes.logo}
              onClick={() => handleClick("")}
              style={{ cursor: "pointer" }}
            />
          </Typography>
          <div>
            <IconButton
              edge="start"
              className={classes[buttonRef.current]}
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}>
              {!isAuthenticated ? (
                <div>
                  <MenuItem onClick={() => handleClick("login")}>
                    Iniciar Sesión
                  </MenuItem>
                  <MenuItem onClick={() => handleClick("register")}>
                    Registrarse
                  </MenuItem>
                </div>
              ) : (
                <MenuItem onClick={handleLogout}>Cerrar Sesión</MenuItem>
              )}
              <MenuItem onClick={() => handleClick("cervecerias")}>
                Cervecerias
              </MenuItem>
              <MenuItem onClick={() => handleClick("contacto")}>
                Contacto
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
