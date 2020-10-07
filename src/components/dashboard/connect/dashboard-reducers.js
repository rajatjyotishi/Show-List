const initailState = {
  items: [],
  partialItems: [],
  isLoading: true,
  favoriteShows: [],
};

const dashBoardReducer = (state = initailState, action = {}) => {
  switch (action.type) {
    case "SET_SHOWS_DATA":
      return {
        ...state,
        items: [...state.items, ...action.items],
        isLoading: false,
      };
    case "SET_PARTIAL_SHOWS_DATA":
      return {
        ...state,
        partialItems: [
          ...state.partialItems,
          ...state.items.slice(action.index, action.index + 50),
        ],
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
