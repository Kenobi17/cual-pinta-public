import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    backgroundColor: "#f6c90e",
    "&:hover": {
      backgroundColor: "#b09110",
    },
    marginTop: 25,
  },
});

const RegisterForm = () => {
  const classes = useStyles();
  const [inputsValues, setInputsValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setInputsValues({ ...inputsValues, [name]: value });
  };

  return (
    <Grid
      item
      container
      md={8}
      sm={10}
      xs={12}
      justify="center"
      id="registerGrid">
      <div id="registerDiv">
        <form autoComplete="off">
          <Typography variant="h4" component="h3" align="center">
            Registrate
          </Typography>
          <input
            onChange={handleChange}
            value={inputsValues.firstName}
            type="text"
            name="firstName"
            placeholder="Nombre *"
            className="registerInput"
          />
          <input
            onChange={handleChange}
            value={inputsValues.lastName}
            type="text"
            name="lastName"
            placeholder="Apellido *"
            className="registerInput"
          />
          <input
            onChange={handleChange}
            value={inputsValues.email}
            type="email"
            name="email"
            placeholder="Email *"
            className="registerInput"
          />
          <input
            onChange={handleChange}
            value={inputsValues.password}
            type="password"
            name="password"
            placeholder="Contraseña *"
            className="registerInput"
          />
          <Button
            type="submit"
            variant="contained"
            className={classes.button}
            size="medium">
            Registrarse
          </Button>
        </form>
      </div>
    </Grid>
  );
};

export default RegisterForm;
