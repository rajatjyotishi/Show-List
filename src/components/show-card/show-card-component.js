import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Fab from "@material-ui/core/Fab";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import TheatersIcon from "@material-ui/icons/Theaters";
import StarIcon from "@material-ui/icons/Star";
import { includes, findIndex, get } from "lodash";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    width: "81%",
    height: "100%",
    backgroundSize: "100%",
    backgroundPosition: "center",
  },
  cardContent: {
    flexGrow: 1,
    paddingBottom: theme.spacing(1),
  },
}));

const CardInfo = ({
  favoriteShows,
  showItem,
  handleRemoveFav,
  handleAddFav,
}) => {
  const { name, genres, rating, id, runtime } = showItem;

  return (
    <React.Fragment>
      <Typography gutterBottom variant="h5" component="h2">
        {name}
      </Typography>
      <Box>
        {genres &&
          genres.map((genre) => (
            <Chip size="small" label={genre} style={{ marginRight: "5px" }} />
          ))}
      </Box>
      <Box display="flex" alignItems="center">
        <StarIcon
          fontSize="large"
          style={{ color: "yellow", paddingRight: "10px" }}
        />
        <Typography>{get(rating, "average", "-")}</Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <TheatersIcon fontSize="large" style={{ paddingRight: "10px" }} />
        <Typography>{runtime}</Typography>
      </Box>
      <Fab
        aria-label="like"
        style={{
          float: "right",
          width: "45px",
          height: "45px",
        }}
        fontSize="small"
      >
        {includes(favoriteShows, showItem) ? (
          <FavoriteOutlinedIcon
            style={{ color: "red" }}
            onClick={() => handleRemoveFav(id)}
          />
        ) : (
          <FavoriteBorderIcon onClick={() => handleAddFav(showItem)} />
        )}
      </Fab>
    </React.Fragment>
  );
};

const renderRow = ({
  items,
  classes,
  favoriteShows,
  handleRemoveFav,
  handleAddFav,
  history,
}) => {
  return items.map((showItem) => {
    const { id, name, officialSite, image } = showItem;

    return (
      <Grid item key={id} lg={6} md={6} xs={12}>
        <Card className={classes.card}>
          <Grid
            conatiner
            className={classes.card}
            style={{ flexDirection: "row" }}
          >
            <Grid item lg={3} xs={3}>
              <CardMedia
                className={classes.cardMedia}
                image={get(image, "medium", "")}
                title={name}
              />
            </Grid>
            <Grid item lg={9} xs={9}>
              <CardContent className={classes.cardContent}>
                <CardInfo
                  favoriteShows={favoriteShows}
                  showItem={showItem}
                  handleRemoveFav={handleRemoveFav}
                  handleAddFav={handleAddFav}
                />
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => history.push(officialSite)}>
                  Visit Website
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    );
  });
};

const ShowCard = (props) => {
  const {
    items,
    history,
    actions,
    favoriteShows,
    emptyText,
    showEmptyMesaage = true,
  } = props;
  const classes = useStyles();

  const handleAddFav = (item) => {
    actions.addFavorites(item);
  };

  const handleRemoveFav = (id) => {
    const index = findIndex(favoriteShows, (item) => item.id === id);

    actions.removeFavorites(index);
  };

  if (showEmptyMesaage && !items.length) {
    return (
      <Box display="flex" justifyContent="center">
        <Typography>{emptyText}</Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={4} style={{ paddingTop: "4px" }}>
      {renderRow({
        items,
        classes,
        favoriteShows,
        handleRemoveFav,
        handleAddFav,
        history,
      })}
    </Grid>
  );
};

export default ShowCard;
