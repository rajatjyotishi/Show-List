import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import TheatersIcon from "@material-ui/icons/Theaters";
import ShowCard from "../show-card";
import AllShowsTab from "./components/all-shows-tab-component";

const useStyles = makeStyles((theme) => ({
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
  },
  tab: {
    width: "40%",
  },
  title: {
    paddingLeft: theme.spacing(1),
    fontWeight: 700,
  },
}));

export const Header = ({ handleTabChange, tabValue, classes }) => (
  <AppBar position="fixed">
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography variant="body1" className={classes.title}>
        {`SHOWS: ${tabValue ? "FAVORITES" : "ALL"}`}
      </Typography>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="off"
        aria-label="tab header"
      >
        <Tab
          icon={<TheatersIcon />}
          aria-label="all shows"
          className={classes.tab}
        />
        <Tab
          icon={<FavoriteOutlinedIcon />}
          aria-label="favorites"
          className={classes.tab}
        />
      </Tabs>
    </Box>
  </AppBar>
);

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </Box>
  );
};

export const DashBoard = (props) => {
  const classes = useStyles();
  const { actions, items, favoriteShows, isLoading } = props;
  const [tabValue, setTabValue] = useState(0);
  const [page, setPage] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const fetchDataAfterScroll = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    actions.getShowsData(`http://api.tvmaze.com/shows?page=${page}`);
  }, [page]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Header
        handleTabChange={handleTabChange}
        tabValue={tabValue}
        classes={classes}
      />
      <Container className={classes.cardGrid} maxWidth={false}>
        <TabPanel value={tabValue} index={0}>
          <AllShowsTab
            items={items}
            isLoading={isLoading}
            fetchDataAfterScroll={fetchDataAfterScroll}
          />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <ShowCard
            items={favoriteShows}
            emptyText="Ooops! No Favorite shows. Have you missed adding or didn't like any? Add shows to favorites in All section.."
          />
        </TabPanel>
      </Container>
    </React.Fragment>
  );
};

export default DashBoard;
