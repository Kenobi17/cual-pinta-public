import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StarRating from "./StarRating";

const useStyles = makeStyles({
  root: {
    backgroundColor: "black",
    color: "#F6C90E",
    width: "100%",
    maxWidth: 500,
    margin: "auto",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    color: "#F6C90E",
    borderBottom: "1px solid rgba(246, 200, 14, 0.53)",
  },
  pos: {
    marginBottom: 12,
    color: "#F6C90E",
  },
});

const Review = ({ reseña }) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom>
          {reseña.first_name} {reseña.last_name} {bull}{" "}
          <StarRating rating={reseña.rating} />
        </Typography>
        <Typography variant="body1" component="p">
          {reseña.body}
        </Typography>
        <Typography variant="caption" component="p">
          {reseña.date}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{ color: "#961d1d" }}>
          Eliminar
        </Button>
      </CardActions>
    </Card>
  );
};
export default Review;
