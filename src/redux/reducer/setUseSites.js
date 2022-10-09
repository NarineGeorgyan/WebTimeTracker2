const setUseSites = (state = { useSites: [] }, action) => {
  switch (action.type) {
    case "ADD_NEW_SITE": {
      return { useSites: [...state.useSites, ...action.payload.useSites] };
    }
    default:
      return state;
  }
};

export default setUseSites;
