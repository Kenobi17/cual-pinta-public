import React, { useEffect, useState } from "react";
import CardCerveceria from "../components/CerveceriaRouteComponents/CardCerveceria";
import Search from "../components/CerveceriaRouteComponents/Search";
import CerveceriasAPI from "../apis/CerveceriasAPI";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import "../css/Cervecerias.css";

const CerveceriasRoute = () => {
  const [cervecerias, setCervecerias] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const filterBreweries = (cerveceriasFilter) => {
    setCervecerias(cerveceriasFilter);
  };
  const FetchData = async () => {
    try {
      const response = await CerveceriasAPI.get("/");
      setCervecerias(response.data.data.cervecerias);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FetchData();
  }, []);
  return (
    <div className="CerveceriasRoute">
      <Grid container justify="center" className="mainContainer">
        <Grid container item xs={10} justify="center">
          <Grid item xs={12}>
            <Typography variant="h3" component="h1" align="center">
              Cervecerias
            </Typography>
          </Grid>
          <Grid item container xs={12} spacing={3}>
            <Grid item container xs={12} lg={3}>
              <Grid item xs={12}>
                <Search filterBreweries={filterBreweries} />
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={12}
              lg={9}
              spacing={3}
              style={{ margin: 0 }}>
              {isLoading ? (
                <CircularProgress style={{ color: "#F6C90E" }} />
              ) : cervecerias.length === 0 ? (
                <Typography variant="h6" component="h4" align="center">
                  No se a encontrado ninguna cerveceria
                </Typography>
              ) : (
                cervecerias.map((cerveceria) => {
                  return (
                    <Grid
                      key={cerveceria.brewery_id}
                      item
                      xs={12}
                      sm={6}
                      md={3}>
                      <CardCerveceria {...cerveceria} />
                    </Grid>
                  );
                })
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default CerveceriasRoute;
