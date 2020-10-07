import { getShows } from "../../../service/shows-service";

export const addFavorites = (item) => ({
  type: "ADD_TO_FAVORITES",
  item,
});

export const removeFavorites = (index) => ({
  type: "REMOVE_FROM_FAVORITES",
  index,
});

export const setIsLoading = (isLoading) => ({
  type: "SET_IS_LOADING",
  isLoading,
});

export const getShowsData = (url) => (dispatch) => {
  return getShows(url).then((response) => {
    return dispatch({
      type: "SET_SHOWS_DATA",
      items: response,
    });
  });
};
