import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import { useHistory } from "react-router-dom";
import RegisterLogo from "../assets/RegisterLogo.svg";
import RegisterForm from "../components/RegisterForm";
import "../css/Register.css";

const RegisterRoute = ({ setAuth }) => {
  let history = useHistory();
  return (
    <div className="RegisterRoute">
      <Grid
        justify="center"
        alignItems="center"
        container
        className="mainContainer">
        <Grid container item xs={10} justify="center">
          <Hidden smDown>
            <Grid item container xs={6} justify="center">
              <div id="registerLogo">
                <img src={RegisterLogo} alt="Registrarse" />
                <Typography variant="h3" component="h2" align="center">
                  Crea tu cuenta
                </Typography>
                <Typography variant="h6" component="p" align="center">
                  Y dejá tu opinión acerca de las mejores cervecerías de todo
                  Tucumán
                </Typography>
              </div>
            </Grid>
          </Hidden>
          <Grid item container md={6} xs={12} justify="center">
            <RegisterForm setAuth={setAuth} />
            <Typography
              variant="subtitle2"
              component="h2"
              align="center"
              style={{ color: "#F6C90E", marginTop: "-50px" }}>
              ¿Ya tenés una cuenta? Hace click{" "}
              <a
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/login");
                }}
                href="/login"
                style={{ color: "#F6C90E" }}
                underline="always">
                aquí
              </a>{" "}
              para iniciar sesión
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default RegisterRoute;
