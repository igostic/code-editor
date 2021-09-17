import { layoutConstants } from "./constants";

export const setTheme = (theme) => {
  return (dispatch) => {
    dispatch({
      type: layoutConstants.SET_THEME,
      payload: {
        theme,
      },
    });
  };
};

export const setView = (view) => {
  return (dispatch) => {
    dispatch({
      type: layoutConstants.SET_VIEW,
      payload: {
        view,
      },
    });
  };
};
