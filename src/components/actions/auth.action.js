import { aushTypes } from "../types/auth.types";

export const fetcReg = (onTrue, onId) => async (dispatch) => {
  try {
    if (onTrue) {
      return dispatch({
        type: aushTypes.AUTH_TITELE1,
        payload: fetch("https://fakestoreapi.com/products/" + onId)
          .then((res) => res.json())
          .then((result) => result),
      });
    }
  } catch (error) {
    return dispatch({
      type: aushTypes.AUTH_TITELE5,
      payload: 33333,
    });
  }
};
