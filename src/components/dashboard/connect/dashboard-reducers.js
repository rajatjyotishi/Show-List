const initailState = { items: [], isLoading: false, favoriteShows: [] };

const dashBoardReducer = (state = initailState, action = {}) => {
  switch (action.type) {
    case "SET_SHOWS_DATA":
      return {
        ...state,
        items: [...state.items, ...action.items],
        isLoading: false,
      };
    case "ADD_TO_FAVORITES":
      return { ...state, favoriteShows: [...state.favoriteShows, action.item] };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favoriteShows: [
          ...state.favoriteShows.slice(0, action.index),
          ...state.favoriteShows.slice(action.index + 1),
        ],
      };
    case "SET_IS_LOADING":
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};

export default dashBoardReducer;
