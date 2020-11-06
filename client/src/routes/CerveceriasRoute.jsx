import React, { useEffect, useState } from "react";
import CardCerveceria from "../components/CerveceriaRouteComponents/CardCerveceria";
import CerveceriasAPI from "../apis/CerveceriasAPI";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const CerveceriasRoute = () => {
  const [cervecerias, setCervecerias] = useState([]);
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
    <Grid container justify="center">
      <Grid item xs={12}>
        <Typography variant="h3" component="h1" align="center">
          Cervecerias
        </Typography>
      </Grid>
      <Grid container item xs={10} spacing={1} justify="space-evenly">
        <Grid style={{ backgroundColor: "red" }} item xs={12} sm={4}></Grid>
        <Grid item container xs={12} sm={8}>
          {cervecerias.map((cerveceria) => {
            return (
              <Grid
                key={cerveceria.brewery_id}
                item
                xs={12}
                sm={6}
                md={4}
                xl={3}>
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
  );
};

export default CerveceriasRoute;
