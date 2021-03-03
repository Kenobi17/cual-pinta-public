import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ReviewsAPI from "../apis/ReviewsAPI";
import { notify } from "react-notify-toast";

const AddReview = ({ cerveceria, addReseña }) => {
  const [inputsValues, setInputsValues] = useState({
    reviewBody: "",
    reviewRating: "1",
  });

  const handleChange = (e) => {
    const { value, name, type, checked } = e.currentTarget;
    type === "checkbox"
      ? setInputsValues({ ...inputsValues, [name]: checked })
      : setInputsValues({ ...inputsValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await ReviewsAPI.post(
        "/new",
        {
          brewery_id: cerveceria.brewery_id,
          body: inputsValues.reviewBody,
          rating: inputsValues.reviewRating,
        },
        {
          headers: {
            token: localStorage.token,
          },
        }
      );
      window.location.reload();
    } catch (error) {
      notify.show(error.response.data, "error", 3500);
    }
  };
  return (
    <Grid item container xs={12} justify="center" id="addReviewGrid">
      <Typography variant="subtitle1" component="h3" align="center">
        Compartí tu opinión acerca de {cerveceria.name}
      </Typography>
      <form autoComplete="off">
        <div className="textDiv">
          <textarea
            id="reviewTextArea"
            placeholder="Dejá tu opinión acerca de la comida, birra, servicio, etc..."
            onChange={handleChange}
            value={inputsValues.reviewBody}
            minLength="15"
            name="reviewBody"></textarea>
        </div>
        <Typography variant="subtitle1" component="h3">
          Puntaje
        </Typography>
        <div className="ratingDiv">
          <label className="container">
            <input
              type="radio"
              onChange={handleChange}
              value="1"
              checked={inputsValues.reviewRating === "1"}
              name="reviewRating"
            />
            <span className="radioButton"></span> 1
          </label>
          <label className="container">
            <input
              type="radio"
              onChange={handleChange}
              value="2"
              checked={inputsValues.reviewRating === "2"}
              name="reviewRating"
            />
            <span className="radioButton"></span> 2
          </label>
          <label className="container">
            <input
              type="radio"
              onChange={handleChange}
              value="3"
              checked={inputsValues.reviewRating === "3"}
              name="reviewRating"
            />
            <span className="radioButton"></span> 3
          </label>
          <label className="container">
            <input
              type="radio"
              onChange={handleChange}
              value="4"
              checked={inputsValues.reviewRating === "4"}
              name="reviewRating"
            />
            <span className="radioButton"></span> 4
          </label>
          <label className="container">
            <input
              type="radio"
              onChange={handleChange}
              value="5"
              checked={inputsValues.reviewRating === "5"}
              name="reviewRating"
            />
            <span className="radioButton"></span> 5
          </label>
        </div>
        <Button
          type="submit"
          variant="contained"
          id="submitReview"
          size="small"
          onClick={handleSubmit}
          startIcon={<i className="fas fa-beer"></i>}>
          Enviar
        </Button>
      </form>
    </Grid>
  );
};

export default AddReview;
