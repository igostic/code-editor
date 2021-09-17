import { codeConstants } from "../actions";

const initialState = {
  html: "",
  css: "",
  js: "",
  error: null,
};

const codeReducer = (state = initialState, action) => {
  switch (action.type) {
    case codeConstants.SET_HTML:
      state = {
        ...state,
        html: action.payload.html,
      };
      break;
    case codeConstants.SET_CSS:
      state = {
        ...state,
        css: action.payload.css,
      };
      break;
    case codeConstants.SET_JS:
      state = {
        ...state,
        js: action.payload.js,
      };
      break;

    default:
      break;
  }
  return state;
};

export default codeReducer;
