const setUseSites = (state = { useSites: [] }, action) => {
  // localStorage.setItem("store", JSON.stringify(state.useSites));
  switch (action.type) {
    case "ADD_NEW_SITE": {
      return { useSites: [...state.useSites, ...action.payload.useSites] };
    }
    case "EDIT_SITE": {
      const afterEditState = state.useSites.find(
        (useSite) => useSite.id === action.payload
      );
      return {
        useSites: [afterEditState],
      };
    }
    case "DELETE_SITE": {
      const afterDeleteState = state.useSites.filter(
        (useSite) => useSite.id !== action.payload
      );
      return {
        useSites: afterDeleteState,
      };
    }
    default:
      return state;
  }
};

export default setUseSites;
