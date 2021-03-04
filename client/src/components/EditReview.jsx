import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ReviewsAPI from "../apis/ReviewsAPI";
import { notify } from "react-notify-toast";

const EditReview = ({ body, rating, breweryId, reviewId }) => {
  const [inputsValues, setInputsValues] = useState({
    reviewBody: body,
    reviewRating: `${rating}`,
  });

  const handleChange = (e) => {
    const { value, name, type, checked } = e.currentTarget;
    type === "checkbox"
      ? setInputsValues({ ...inputsValues, [name]: checked })
      : setInputsValues({ ...inputsValues, [name]: value });
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      await ReviewsAPI.put(
        "/update",
        {
          brewery_id: breweryId,
          body: inputsValues.reviewBody,
          rating: inputsValues.reviewRating,
          review_id: reviewId,
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
    <form autoComplete="off">
      <div className="textDiv">
        <textarea
          id="reviewTextArea"
          onChange={handleChange}
          value={inputsValues.reviewBody}
          minLength="15"
          name="reviewBody"></textarea>
      </div>
      <Typography
        align="left"
        variant="subtitle1"
        component="h3"
        style={{ marginTop: 15 }}>
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
        onClick={handleEdit}
        startIcon={<i className="fas fa-beer"></i>}>
        Editar
      </Button>
    </form>
  );
};

export default EditReview;
