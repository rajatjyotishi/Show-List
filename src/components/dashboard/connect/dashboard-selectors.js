export function select(state) {
  const { dashboardReducers = {} } = state;
  const {
    items = [],
    isLoading = true,
    favoriteShows,
    partialItems = [],
  } = dashboardReducers;
  return Object.assign(
    {},
    {
      items,
      isLoading,
      favoriteShows,
      partialItems,
    }
  );
}
