import React, { useEffect, useState } from "react";
import CardCerveceria from "../components/CerveceriaRouteComponents/CardCerveceria";
import SearchByName from "../components/CerveceriaRouteComponents/SearchByName";
import Header from "../components/Header";
import CerveceriasAPI from "../apis/CerveceriasAPI";
import Grid from "@material-ui/core/Grid";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import "../css/Cervecerias.css";

const CerveceriasRoute = () => {
  const [cervecerias, setCervecerias] = useState([]);
  const filterByName = (cerveceriasFilter) => {
    setCervecerias(cerveceriasFilter);
  };
  const FetchData = async () => {
    try {
      const response = await CerveceriasAPI.get("/");
      setCervecerias(response.data.data.cervecerias);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FetchData();
  }, []);
  return (
    <div className="CerveceriasRoute">
      <Header />
      <Grid container justify="center" className="mainContainer">
        <Grid container item xs={10} spacing={1} justify="space-evenly">
          <Grid item xs={12}>
            <Typography variant="h3" component="h1" align="center">
              Cervecerias
            </Typography>
          </Grid>
          <Grid item container xs={12} spacing={3}>
            <Grid item container xs={12} justify="center">
              <Grid id="filterGrid" item xs={12} md={10}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography
                      variant="h4"
                      component="h2"
                      align="left"
                      justify-self="left">
                      Filtrar Cervecerias
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails id="accordionDetails">
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid id="searchForm" item xs={12} md={10}>
                <SearchByName filterByName={filterByName} />
              </Grid>
            </Grid>
            {cervecerias.map((cerveceria) => {
              return (
                <Grid key={cerveceria.brewery_id} item xs={12} sm={6} md={3}>
                  <CardCerveceria
                    image={cerveceria.image}
                    title={cerveceria.name}
                    {...cerveceria}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default CerveceriasRoute;
