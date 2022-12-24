import { aushTypes } from "../types/auth.types";

export const fetcReg = (post) => async (dispatch) => {
  try {
    return dispatch({
      type: aushTypes.AUTH_TITELE1,
      payload: 55555,
    });
  } catch (error) {
    return dispatch({
      type: aushTypes.AUTH_TITELE5,
      payload: 33333,
    });
  }
};
