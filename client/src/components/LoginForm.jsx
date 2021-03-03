import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import authentication from "../apis/authentication";
import { notify } from "react-notify-toast";
const useStyles = makeStyles({
  button: {
    backgroundColor: "#f6c90e",
    "&:hover": {
      backgroundColor: "#b09110",
    },
    marginTop: 25,
  },
});

const LoginForm = ({ setAuth }) => {
  const classes = useStyles();
  const [inputsValues, setInputsValues] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setInputsValues({ ...inputsValues, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authentication.post("/login", {
        email: inputsValues.email,
        password: inputsValues.password,
      });
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        setAuth(true);
      }
    } catch (error) {
      notify.show(error.response.data, "error", 2000);
    }
  };

  return (
    <Grid item container md={8} sm={10} xs={12} justify="center" id="loginGrid">
      <div id="loginDiv">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <Typography variant="h4" component="h3" align="center">
            Iniciar Sesión
          </Typography>
          <input
            onChange={handleChange}
            value={inputsValues.email}
            type="email"
            name="email"
            placeholder="Email"
            className="loginInput"
          />
          <input
            onChange={handleChange}
            value={inputsValues.password}
            type="password"
            name="password"
            placeholder="Contraseña"
            className="loginInput"
          />
          <Button
            type="submit"
            variant="contained"
            className={classes.button}
            size="medium">
            Iniciar
          </Button>
        </form>
      </div>
    </Grid>
  );
};

export default LoginForm;
