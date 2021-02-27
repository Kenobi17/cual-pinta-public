import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import CerveceriaDataGrid from "../components/CerveceriaDataGrid";
import AddReview from "../components/AddReview";
import CerveceriasAPI from "../apis/CerveceriasAPI";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import "../css/CerveceriaPage.css";

const CerveceriaPageRoute = ({ isAuthenticated }) => {
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
        console.log(response.data.data);
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
          <>
            <CerveceriaDataGrid cerveceria={cerveceriaData.cerveceria} />
            {isAuthenticated ? (
              <AddReview cerveceria={cerveceriaData.cerveceria} />
            ) : (
              <Typography
                variant="h6"
                component="h2"
                style={{ marginTop: "20px" }}>
                <Link
                  href={"/login"}
                  style={{ color: "#F6C90E" }}
                  underline="always">
                  Iniciá sesión
                </Link>
                <span style={{ color: "#F6C90E" }}> ó </span>
                <Link
                  href={"/register"}
                  style={{ color: "#F6C90E" }}
                  underline="always">
                  registrate
                </Link>
                <span style={{ color: "#F6C90E" }}>
                  {" "}
                  para dejar tu opinion acerca de{" "}
                  {cerveceriaData.cerveceria.name}
                </span>
              </Typography>
            )}
          </>
        ) : (
          <CircularProgress style={{ color: "#F6C90E" }} />
        )}
      </Grid>
    </div>
  );
};

export default CerveceriaPageRoute;
