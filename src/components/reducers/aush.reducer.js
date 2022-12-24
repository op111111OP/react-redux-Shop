import { aushTypes } from "../types/auth.types";
const initialState = {
  post: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case aushTypes.AUTH_TITELE1:
      return { post: 2222222 };
    case aushTypes.AUTH_TITELE2:
      return { ...action.payload };
    case aushTypes.AUTH_TITELE3:
      return { ...action.payload };
    case aushTypes.AUTH_TITELE4:
      return { ...action.payload };
    case aushTypes.AUTH_TITELE5:
      return { ...action.payload };
    default:
      return state;
  }
};
