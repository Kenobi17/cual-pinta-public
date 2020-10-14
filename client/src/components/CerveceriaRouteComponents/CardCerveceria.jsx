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
  },
  media: {
    height: 250,
  },
  bold: {
    fontWeight: "bold",
    color: "default",
  },
  content: {
    backgroundColor: "#efefef",
    height: "100%",
  },
});
const CardCerveceria = (props) => {
  let history = useHistory();
  const handleClick = (slug) => {
    history.push(`/cervecerias/${slug}`);
  };

  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea
        style={{ height: "100%" }}
        onClick={(e) => handleClick(props.slug)}>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.name}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h4">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <span className={classes.bold}>Zona: </span>
            {props.zone}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <span className={classes.bold}>Dirección: </span>
            {props.address}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <span className={classes.bold}>Happy Hour: </span>
            {props.happy_hour}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {!props.reviews ? (
              <span className={classes.bold}>0 reseñas</span>
            ) : (
              <>
                <span className={classes.bold}>{props.reviews} reseñas</span> (
                {props.rating_avg})
                <br />
                <StarRating rating={props.rating_avg} />
                <br />
              </>
            )}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardCerveceria;
