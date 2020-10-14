import React from "react";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<StarIcon key={i} style={{ color: "#ffce76" }} />);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<StarHalfIcon key={i} style={{ color: "#ffce76" }} />);
    } else {
      stars.push(<StarBorderIcon key={i} style={{ color: "#ffce76" }} />);
    }
  }
  return <>{stars}</>;
};

export default StarRating;
