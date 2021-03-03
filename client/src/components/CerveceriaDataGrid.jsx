import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import Hidden from "@material-ui/core/Hidden";
import StarRating from "./StarRating";

import RoomIcon from "@material-ui/icons/Room";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import InstagramIcon from "@material-ui/icons/Instagram";
import StarIcon from "@material-ui/icons/Star";
const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    margin: "auto",
    height: "100%",
  },
  media: {
    height: 445,
    border: "1px #F6C90E solid",
  },
  bold: {
    fontWeight: "bold",
    color: "default",
  },
  dividerRoot: {
    width: "100%",

    color: "#F6C90E",
    paddingTop: 0,
  },
  dividerRootMobile: {
    width: "100%",
    maxWidth: 500,
    margin: "auto",
    color: "#F6C90E",
    paddingTop: 0,
  },
  listItem: {
    border: "1px #F6C90E solid",
    borderRight: "none",
  },
  listItemMobile: {
    border: "1px #F6C90E solid",
  },
  avatar: {
    color: "#000",
    backgroundColor: "#F6C90E",
  },
});

const CerveceriaDataGrid = ({ cerveceria }) => {
  const classes = useStyles();

  return (
    <Grid item container justify="center" xs={12}>
      <Hidden mdDown>
        <Grid item container justify="center" xs={12} md={2} xl={2}>
          <List className={classes.dividerRoot}>
            <ListItem className={classes.listItem}>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <RoomIcon />
                </Avatar>
              </ListItemAvatar>
              <span>
                <Typography gutterBottom variant="body1" component="h4">
                  {cerveceria.zone}
                </Typography>
                <Typography gutterBottom variant="caption" component="h5">
                  {cerveceria.address}
                </Typography>
              </span>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem className={classes.listItem}>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <AccessTimeIcon />
                </Avatar>
              </ListItemAvatar>
              <span>
                <Typography gutterBottom variant="body1" component="h4">
                  Happy Hour
                </Typography>
                <Typography gutterBottom variant="caption" component="h5">
                  {cerveceria.happy_hour}
                </Typography>
              </span>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem className={classes.listItem}>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <InstagramIcon />
                </Avatar>
              </ListItemAvatar>
              <span>
                <Typography gutterBottom variant="body1" component="h4">
                  Instagram
                </Typography>
                <Typography gutterBottom variant="caption" component="h5">
                  <Link
                    href={cerveceria.instagram}
                    style={{ color: "#F6C90E" }}
                    target="_blank"
                    underline="always">
                    {cerveceria.name}
                  </Link>
                </Typography>
              </span>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem className={classes.listItem}>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <StarIcon />
                </Avatar>
              </ListItemAvatar>
              <span>
                <Typography gutterBottom variant="body1" component="h4">
                  Reseñas{" "}
                  {!cerveceria.reviews ? <></> : <>({cerveceria.reviews})</>}
                </Typography>
                <Typography gutterBottom variant="caption" component="h5">
                  {!cerveceria.reviews ? (
                    <>Sin reseñas</>
                  ) : (
                    <>
                      <StarRating rating={cerveceria.rating_avg} />
                    </>
                  )}
                </Typography>
              </span>
            </ListItem>
          </List>
        </Grid>
      </Hidden>
      <Grid item xs={12} style={{ maxWidth: 500 }}>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={cerveceria.image}
            title={cerveceria.name}
          />
        </Card>
      </Grid>
      <Hidden lgUp>
        <Grid item container justify="center" xs={12}>
          <List className={classes.dividerRootMobile}>
            <ListItem className={classes.listItemMobile}>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <RoomIcon />
                </Avatar>
              </ListItemAvatar>
              <span>
                <Typography gutterBottom variant="body1" component="h4">
                  {cerveceria.zone}
                </Typography>
                <Typography gutterBottom variant="caption" component="h5">
                  {cerveceria.address}
                </Typography>
              </span>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem className={classes.listItemMobile}>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <AccessTimeIcon />
                </Avatar>
              </ListItemAvatar>
              <span>
                <Typography gutterBottom variant="body1" component="h4">
                  Happy Hour
                </Typography>
                <Typography gutterBottom variant="caption" component="h5">
                  {cerveceria.happy_hour}
                </Typography>
              </span>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem className={classes.listItemMobile}>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <InstagramIcon />
                </Avatar>
              </ListItemAvatar>
              <span>
                <Typography gutterBottom variant="body1" component="h4">
                  Instagram
                </Typography>
                <Typography gutterBottom variant="caption" component="h5">
                  <Link
                    href={cerveceria.instagram}
                    style={{ color: "#F6C90E" }}
                    target="_blank"
                    underline="always">
                    {cerveceria.name}
                  </Link>
                </Typography>
              </span>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem className={classes.listItemMobile}>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <StarIcon />
                </Avatar>
              </ListItemAvatar>
              <span>
                <Typography gutterBottom variant="body1" component="h4">
                  Reseñas{" "}
                  {!cerveceria.reviews ? <></> : <>({cerveceria.reviews})</>}
                </Typography>
                <Typography gutterBottom variant="caption" component="h5">
                  {!cerveceria.reviews ? (
                    <>Sin reseñas</>
                  ) : (
                    <>
                      <StarRating rating={cerveceria.rating_avg} />
                    </>
                  )}
                </Typography>
              </span>
            </ListItem>
          </List>
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default CerveceriaDataGrid;
