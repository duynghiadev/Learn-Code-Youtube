const initValue = {
  search: "",
  priority: [],
};

const filtersReducer = (state = initValue, action) => {
  switch (action.type) {
    case "filters/searchFilterChange":
      return {
        ...state,
        search: action.payload,
      };

    default:
      return state;
  }
};

export default filtersReducer;
