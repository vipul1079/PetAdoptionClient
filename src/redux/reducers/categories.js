import { GET_ALL_CATEGORIES ,SET_CATEGORIES_LOADER} from "../actionTypes/categories";

const initialState = {
  categoriesLoader: false,
  allCategories: [],
};

const categoriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        allCategories: payload,
      };
    case SET_CATEGORIES_LOADER:
      return {
        ...state,
        categoriesLoader: payload,
      };

    default:
      return state;
  }
};

export default categoriesReducer;
