import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import StarRating from "../StarRating";

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    margin: "auto",
    height: "100%",
    border: "none",
    boxShadow: "none",
  },
  media: {
    height: 175,
  },
  bold: {
    fontWeight: "bold",
    color: "default",
  },
  content: {
    backgroundColor: "#52575d",
    height: "100%",
    color: "#fddb3a",
  },
});
const CardCerveceria = (props) => {
  let history = useHistory();
  const handleClick = (slug) => {
    history.push(`/cervecerias/${slug}`);
  };

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea
        style={{ height: "100%" }}
        onClick={(e) => handleClick(props.slug)}>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.name}
        />
        <CardContent className={classes.content}>
          <Typography
            className={classes.bold}
            gutterBottom
            variant="body2"
            component="h4">
            {props.name} <br />
            <span style={{ fontWeight: "400" }}>
              {props.address} - {props.zone}
            </span>
          </Typography>
          <Typography variant="body2" component="p">
            {!props.reviews ? (
              <span className={classes.bold}>Sin reseñas</span>
            ) : (
              <>
                <StarRating rating={props.rating_avg} />
              </>
            )}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardCerveceria;
