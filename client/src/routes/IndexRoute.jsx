import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PersonIcon from "@material-ui/icons/Person";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import IndexHeaderLogo from "../assets/IndexHeaderLogo.svg";
import "../css/Index.css";

const useStyles = makeStyles({
  button: {
    backgroundColor: "#f6c90e",
    "&:hover": {
      backgroundColor: "#b09110",
    },
  },
});

const IndexRoute = () => {
  let history = useHistory();
  const classes = useStyles();
  return (
    <div className="IndexRoute">
      <Grid justify="center" container className="mainContainer">
        <Grid item container justify="center" xs={10} sm={6} md={3}>
          <img id="IndexHeaderLogo" src={IndexHeaderLogo} alt="¿Cuál Pinta?" />
        </Grid>
        <Grid item xs={12}>
          <Typography
            id="tituloHeader"
            align="center"
            variant="h5"
            component="h1">
            Ingresá y compartí tu opinión acerca de las mejores cervecerías de
            Tucumán
          </Typography>
        </Grid>
        <Grid
          className="buttonGrid"
          container
          item
          xs={12}
          sm={6}
          lg={3}
          xl={2}
          justify="space-between">
          <Button
            variant="contained"
            className={classes.button}
            size="medium"
            startIcon={<PersonIcon />}
            href="/login"
            onClick={(e) => {
              e.preventDefault();
              history.push("/login");
            }}>
            Iniciar Sesión
          </Button>
          <Button
            variant="contained"
            className={classes.button}
            size="medium"
            startIcon={<PersonAddIcon />}
            href="/register"
            onClick={(e) => {
              e.preventDefault();
              history.push("/register");
            }}>
            Registrarse
          </Button>
        </Grid>
        <Grid container item xs={12} justify="center">
          <Button
            id="cerveceriasButton"
            variant="contained"
            className={classes.button}
            size="medium"
            startIcon={<i className="fas fa-beer"></i>}
            href="/cervecerias"
            onClick={(e) => {
              e.preventDefault();
              history.push("/cervecerias");
            }}>
            Cervecerías
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default IndexRoute;
