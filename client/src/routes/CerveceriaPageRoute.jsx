import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import CerveceriaDataGrid from "../components/CerveceriaDataGrid";
import AddReview from "../components/AddReview";
import Review from "../components/Review";
import CerveceriasAPI from "../apis/CerveceriasAPI";
import ReviewsAPI from "../apis/ReviewsAPI";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import "../css/CerveceriaPage.css";

const CerveceriaPageRoute = ({ isAuthenticated }) => {
  let history = useHistory();
  const { id } = useParams();
  const [checkForReview, setCheckForReview] = useState({});
  const [cerveceriaData, setCerveceriaData] = useState({});
  const [reseñas, setReseñas] = useState([]);
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
        setReseñas(response.data.data.reseñas);
      } catch (error) {
        console.log(error);
      }
    };
    const checkReview = async () => {
      try {
        const response = await ReviewsAPI.post(
          "/check",
          {
            brewery_id: id,
          },
          {
            headers: {
              token: localStorage.token,
            },
          }
        );
        setCheckForReview(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    FetchData();
    checkReview();
  }, [id, history]);
  return (
    <div className="CerveceriaPageRoute">
      <Grid container justify="center" className="mainContainer">
        {cerveceriaData.cerveceria ? (
          <>
            <CerveceriaDataGrid cerveceria={cerveceriaData.cerveceria} />
            {isAuthenticated && !checkForReview.hasReview ? (
              <AddReview cerveceria={cerveceriaData.cerveceria} />
            ) : isAuthenticated && checkForReview.hasReview ? null : (
              <Typography
                variant="subtitle2"
                component="h2"
                style={{ marginTop: "20px" }}
                align="center">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    history.push("/login");
                  }}
                  href="/login"
                  style={{ color: "#F6C90E" }}
                  underline="always">
                  Iniciá sesión
                </a>
                <span style={{ color: "#F6C90E" }}> ó </span>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    history.push("/register");
                  }}
                  href="/register"
                  style={{ color: "#F6C90E" }}
                  underline="always">
                  registrate
                </a>
                <span style={{ color: "#F6C90E" }}>
                  {" "}
                  para dejar tu opinion acerca de{" "}
                  {cerveceriaData.cerveceria.name}
                </span>
              </Typography>
            )}
            <Grid item xs={12} style={{ marginTop: 35 }}>
              {reseñas.map((reseña) => {
                return (
                  <Review
                    key={reseña.review_id}
                    reseña={reseña}
                    reviewId={checkForReview.review_id}
                    ReviewsAPI={ReviewsAPI}
                  />
                );
              })}
            </Grid>
          </>
        ) : (
          <CircularProgress style={{ color: "#F6C90E" }} />
        )}
      </Grid>
    </div>
  );
};

export default CerveceriaPageRoute;
