import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PersonIcon from "@material-ui/icons/Person";
import { makeStyles } from "@material-ui/core/styles";
import yellow from "@material-ui/core/colors/yellow";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import IndexHeaderLogo from "../assets/IndexHeaderLogo.svg";
import "../css/Index.css";

const useStyles = makeStyles({
  button: {
    backgroundColor: yellow[500],
    "&:hover": {
      backgroundColor: yellow[700],
    },
  },
});

const IndexRoute = () => {
  let history = useHistory();
  const classes = useStyles();
  return (
    <div className="IndexRoute">
      <Header />
      <Grid justify="center" container>
        <Grid item container justify="center" xs={10} sm={6} md={3}>
          <img id="IndexHeaderLogo" src={IndexHeaderLogo} alt="¿Cuál Pinta?" />
        </Grid>
        <Grid item xs={12}>
          <Typography
            id="tituloHeader"
            align="center"
            variant="h4"
            component="h1">
            Encontrá las mejores cervecerias de Tucumán
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
            startIcon={<PersonIcon />}>
            Iniciar Sesión
          </Button>
          <Button
            variant="contained"
            className={classes.button}
            size="medium"
            startIcon={<PersonAddIcon />}>
            Registrarse
          </Button>
        </Grid>
        <Grid container item xs={12} justify="center">
          <Button
            id="cerveceriasButton"
            variant="contained"
            className={classes.button}
            size="medium"
            startIcon={<i class="fas fa-beer"></i>}
            onClick={(e) => {
              history.push("/cervecerias");
            }}>
            Cervecerias
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default IndexRoute;
