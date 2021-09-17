import { layoutConstants } from "../actions";

const initialState = {
  theme: "material",
  view: "top",
  error: null,
};

const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case layoutConstants.SET_THEME:
      state = {
        ...state,
        theme: action.payload.theme,
      };
      break;
    case layoutConstants.SET_VIEW:
      state = {
        ...state,
        view: action.payload.view,
      };
      break;

    default:
      break;
  }
  return state;
};


export default layoutReducer;