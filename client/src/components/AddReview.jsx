import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ReviewsAPI from "../apis/ReviewsAPI";

const AddReview = ({ cerveceria }) => {
  return (
    <Grid item container xs={12} justify="center" id="addReviewGrid">
      <Typography variant="subtitle1" component="h3" align="center">
        Compartí tu opinión acerca de {cerveceria.name}
      </Typography>
      <form autoComplete="off">
        <div className="textDiv">
          <textarea id="reviewTextArea"></textarea>
        </div>
        <Typography variant="subtitle1" component="h3">
          Puntaje
        </Typography>
        <div className="ratingDiv">
          <label className="container">
            <input type="radio" name="rating" value="1" />
            <span className="radioButton"></span> 1
          </label>
          <label className="container">
            <input type="radio" name="rating" value="2" />
            <span className="radioButton"></span> 2
          </label>
          <label className="container">
            <input type="radio" name="rating" value="3" />
            <span className="radioButton"></span> 3
          </label>
          <label className="container">
            <input type="radio" name="rating" value="4" />
            <span className="radioButton"></span> 4
          </label>
          <label className="container">
            <input type="radio" name="rating" value="5" />
            <span className="radioButton"></span> 5
          </label>
        </div>
        <Button
          type="submit"
          variant="contained"
          id="submitReview"
          size="small"
          startIcon={<i className="fas fa-beer"></i>}>
          Listo
        </Button>
      </form>
    </Grid>
  );
};

export default AddReview;
