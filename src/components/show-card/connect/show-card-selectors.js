export function select(state) {
  const { favoriteShows = [] } = state.dashboardReducers;
  return Object.assign(
    {},
    {
      favoriteShows,
    }
  );
}
