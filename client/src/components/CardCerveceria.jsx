import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
  root: {
    maxWidth: 320,
  },
  media: {
    height: 320,
  },
  progress: {
    display: "flex",
    maxWidth: 320,
    height: 320,
    alignItems: "center",
    justifyContent: "center",
  },
  bold: {
    fontWeight: "bold",
    color: "default",
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
      <CardActionArea onClick={(e) => handleClick(props.slug)}>
        {props.image ? (
          <CardMedia
            className={classes.media}
            image={props.image}
            title={props.name}
          />
        ) : (
          <div className={classes.progress}>
            <CircularProgress />
          </div>
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h4">
            <span className={classes.bold}>Zona: </span>
            {props.zone}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h4">
            <span className={classes.bold}>Dirección: </span>
            {props.address}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h4">
            <span className={classes.bold}>Happy Hour: </span>
            {props.happy_hour}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h4">
            Rating stars
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardCerveceria;
