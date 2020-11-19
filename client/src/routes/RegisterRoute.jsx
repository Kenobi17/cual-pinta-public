import React from "react";
import Header from "../components/Header";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import RegisterLogo from "../assets/RegisterLogo.svg";
import RegisterForm from "../components/RegisterForm";
import "../css/Register.css";

const RegisterRoute = () => {
  return (
    <div className="RegisterRoute">
      <Header />
      <Grid
        justify="center"
        alignItems="center"
        container
        className="mainContainer">
        <Grid container item xs={10} justify="center">
          <Grid item container xs={6} justify="center">
            <div id="registerLogo">
              <img src={RegisterLogo} alt="Registrarse" />
              <Typography variant="h3" component="h2" align="center">
                Crea tu cuenta
              </Typography>
              <Typography variant="h6" component="p" align="center">
                Y dejá tu opinión acerca de las mejores cervecerias de todo
                Tucumán
              </Typography>
            </div>
          </Grid>
          <Grid item container md={6} xs={12} justify="center">
            <RegisterForm />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default RegisterRoute;
