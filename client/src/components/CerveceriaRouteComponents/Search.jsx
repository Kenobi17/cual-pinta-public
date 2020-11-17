import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CerveceriasAPI from "../../apis/CerveceriasAPI";

const Search = ({ filterBreweries }) => {
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
              <option value=""></option>
              <option value="4 Avenidas">4 Avenidas</option>
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
          <button type="submit" className="searchButton">
            Buscar
          </button>
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
                  <option value=""></option>
                  <option value="4 Avenidas">4 Avenidas</option>
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
              <button type="submit" className="searchButton">
                Buscar
              </button>
            </form>
          </AccordionDetails>
        </Accordion>
      </Hidden>
    </>
  );
};

export default Search;
