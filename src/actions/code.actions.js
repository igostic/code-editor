import { codeConstants } from "./constants";

export const setHtml = (html) => {
  return (dispatch) => {
    dispatch({
      type: codeConstants.SET_HTML,
      payload: {
        html,
      },
    });
  };
};

export const setCss = (css) => {
  return (dispatch) => {
    dispatch({
      type: codeConstants.SET_CSS,
      payload: {
        css,
      },
    });
  };
};

export const setJs = (js) => {
  return (dispatch) => {
    dispatch({
      type: codeConstants.SET_JS,
      payload: {
        js,
      },
    });
  };
};
