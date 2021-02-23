import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import CerveceriaDataGrid from "../components/CerveceriaDataGrid";
import CerveceriasAPI from "../apis/CerveceriasAPI";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

const CerveceriaPageRoute = () => {
  let history = useHistory();
  const { id } = useParams();
  const [cerveceriaData, setCerveceriaData] = useState({});
  useEffect(() => {
    if (isNaN(id) === true) {
      history.push("/cervecerias");
    }
    const FetchData = async () => {
      try {
        const response = await CerveceriasAPI.get(`/${id}`);
        typeof response.data.data.cerveceria === "undefined"
          ? history.push("/cervecerias")
          : setCerveceriaData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    FetchData();
  }, [id, history]);
  return (
    <div className="CerveceriaPageRoute">
      <Grid container justify="center" className="mainContainer">
        {cerveceriaData.cerveceria ? (
          <CerveceriaDataGrid cerveceria={cerveceriaData.cerveceria} />
        ) : (
          <CircularProgress style={{ color: "#F6C90E" }} />
        )}
      </Grid>
    </div>
  );
};

export default CerveceriaPageRoute;
