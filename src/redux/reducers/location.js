import * as type from "../types";

const initialState = {
  locations: [],
  loading: false,
  error: null,
};

const sort = (data) => {
  return data.sort((a, b) => (a.title < b.title ? 1 : -1));
};

const removeItem = (data, item) => {
  return data.filter((d) => d.id !== item.id);
};

export default function locations(state = initialState, action) {
  switch (action.type) {
    case type.GET_LOCATIONS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_LOCATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        locations: sort(action.locations),
      };

    case type.GET_LOCATIONS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };

    case type.POST_LOCATIONS_SUCCESS:
      return {
        ...state,
        locations: [action.payload, ...state.locations],
      };

    case type.POST_LOCATIONS_FAILED:
      return {
        ...state,
        message: action.message,
      };

    case type.DELETE_LOCATIONS_SUCCESS:
      return {
        ...state,
        locations: removeItem(state.locations, action.payload),
      };

    case type.DELETE_LOCATIONS_FAILED:
      return {
        ...state,
        message: action.message,
      };

    default:
      return state;
  }
}
