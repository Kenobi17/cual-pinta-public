import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import CerveceriasAPI from "../apis/CerveceriasAPI";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const CerveceriaPageRoute = () => {
  let history = useHistory();
  const { id } = useParams();
  const [cerveceria, setCerveceria] = useState({});
  useEffect(() => {
    if (isNaN(id) === true) {
      history.push("/cervecerias");
    }
    const FetchData = async () => {
      try {
        const response = await CerveceriasAPI.get(`/${id}`);
        typeof response.data.data.cerveceria === "undefined"
          ? history.push("/cervecerias")
          : setCerveceria(response.data.data.cerveceria);
      } catch (error) {
        console.log(error);
      }
    };
    FetchData();
  }, [id, history]);
  return (
    <div className="CerveceriaPageRoute">
      <Grid container justify="center" className="mainContainer">
        <Grid container item xs={10} justify="center">
          <Grid item xs={12}>
            <Typography variant="h3" component="h1" align="center">
              {cerveceria.name}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default CerveceriaPageRoute;
