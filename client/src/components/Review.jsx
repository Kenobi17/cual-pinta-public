import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import EditReview from "./EditReview";
import StarRating from "./StarRating";
import { notify } from "react-notify-toast";

const getModalStyle = () => {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};

const useStyles = makeStyles({
  root: {
    backgroundColor: "black",
    color: "#F6C90E",
    width: "100%",
    maxWidth: 500,
    margin: "auto",
  },
  content: {
    overflowWrap: "break-word",
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
  paper: {
    color: "#f6c90e",
    position: "absolute",
    maxWidth: 600,
    width: "85%",
    backgroundColor: "#000",
    border: "1px solid #F6C90E",
    boxShadow: "none",
    outline: 0,
    padding: 20,
  },
});

const Review = ({ reseña, reviewId, ReviewsAPI, breweryId }) => {
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await ReviewsAPI.delete("/delete", {
        headers: {
          token: localStorage.token,
          review_id: reseña.review_id,
        },
      });
      window.location.reload();
    } catch (error) {
      notify.show(error.response.data, "error", 3500);
    }
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Typography
        align="left"
        id="editar-reseña"
        variant="h5"
        component="h3"
        style={{ marginBottom: 20 }}>
        Editar reseña
      </Typography>
      <EditReview
        body={reseña.body}
        rating={reseña.rating}
        breweryId={breweryId}
        reviewId={reseña.review_id}
        id="simple-modal-description"
      />
    </div>
  );
  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
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
        {reseña.review_id === reviewId ? (
          <>
            <Button
              onClick={handleDelete}
              size="small"
              style={{ color: "#961d1d" }}>
              Eliminar
            </Button>
            <Button
              onClick={handleOpen}
              size="small"
              style={{ color: "#00a12b" }}>
              Editar
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="editar-reseña"
              aria-describedby="simple-modal-description">
              {body}
            </Modal>
          </>
        ) : null}
      </CardActions>
    </Card>
  );
};
export default Review;
