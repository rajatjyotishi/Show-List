import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ShowCard from "../../show-card";
import InfiniteScroll from "react-infinite-scroll-component";

const AllShowsTab = ({ items, isLoading, fetchDataAfterScroll }) => {
  return (
    <React.Fragment>
      {isLoading && !items.length && (
        <Box display="flex" justifyContent="center">
          <Typography>Shows are loading...</Typography>
        </Box>
      )}
      {!isLoading && (
        <InfiniteScroll
          dataLength={items.length}
          next={fetchDataAfterScroll}
          hasMore={true}
          loader={
            <Box display="flex" justifyContent="center" m={3}>
              <Typography>More Awesome Shows loading...</Typography>
            </Box>
          }
          style={{ overflowX: "hidden" }}
          scrollThreshold={0.99}
        >
          <ShowCard
            items={items}
            emptyText="Ooops! No shows updated.. Please try again"
          />
        </InfiniteScroll>
      )}
    </React.Fragment>
  );
};

export default AllShowsTab;
