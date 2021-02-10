import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import CerveceriasAPI from "../../apis/CerveceriasAPI";

const useStyles = makeStyles({
  button: {
    backgroundColor: "#f6c90e",
    "&:hover": {
      backgroundColor: "#b09110",
    },
  },
});

const Search = ({ filterBreweries }) => {
  const classes = useStyles();
  const [inputsValues, setInputsValues] = useState({
    searchName: "",
    searchZone: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.currentTarget;
    setInputsValues({ ...inputsValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await CerveceriasAPI.get(
        `/?name=${inputsValues.searchName}&zone=${inputsValues.searchZone}`
      );
      filterBreweries(response.data.data.cervecerias);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Hidden mdDown>
        <form
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          id="searchForm">
          <Typography variant="h2" component="h2">
            Nombre
          </Typography>
          <div className="search">
            <input
              type="text"
              className="searchTerm"
              onChange={handleChange}
              value={inputsValues.searchName}
              name="searchName"
            />
          </div>
          <Typography variant="h2" component="h2">
            Zona / Localidad
          </Typography>
          <div className="box">
            <select
              onChange={handleChange}
              value={inputsValues.searchZone}
              name="searchZone">
              <option value="">Todas</option>
              <option value="4 Avenidas y otros">4 Avenidas y otros</option>
              <option value="Aguilares">Aguilares</option>
              <option value="Barrio Norte">Barrio Norte</option>
              <option value="Barrio Sur">Barrio Sur</option>
              <option value="Concepción">Concepción</option>
              <option value="Famaillá">Famaillá</option>
              <option value="Monteros">Monteros</option>
              <option value="Tafí Viejo">Tafí Viejo</option>
              <option value="Yerba Buena">Yerba Buena</option>
            </select>
          </div>
          <Button
            type="submit"
            variant="contained"
            className={classes.button}
            size="medium">
            Buscar
          </Button>
        </form>
      </Hidden>
      <Hidden lgUp>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#f6c90e" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header">
            <Typography>Buscar</Typography>
          </AccordionSummary>
          <AccordionDetails id="panel1a-details">
            <form
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
              id="searchForm">
              <Typography variant="h2" component="h2">
                Nombre
              </Typography>
              <div className="search">
                <input
                  type="text"
                  className="searchTerm"
                  onChange={handleChange}
                  value={inputsValues.searchName}
                  name="searchName"
                />
              </div>
              <Typography variant="h2" component="h2">
                Zona / Localidad
              </Typography>
              <div className="box">
                <select
                  onChange={handleChange}
                  value={inputsValues.searchZone}
                  name="searchZone">
                  <option value="">Todas</option>
                  <option value="4 Avenidas y otros">4 Avenidas y otros</option>
                  <option value="Aguilares">Aguilares</option>
                  <option value="Barrio Norte">Barrio Norte</option>
                  <option value="Barrio Sur">Barrio Sur</option>
                  <option value="Concepción">Concepción</option>
                  <option value="Famaillá">Famaillá</option>
                  <option value="Monteros">Monteros</option>
                  <option value="Tafí Viejo">Tafí Viejo</option>
                  <option value="Yerba Buena">Yerba Buena</option>
                </select>
              </div>
              <Button
                type="submit"
                variant="contained"
                className={classes.button}
                size="medium">
                Buscar
              </Button>
            </form>
          </AccordionDetails>
        </Accordion>
      </Hidden>
    </>
  );
};

export default Search;
