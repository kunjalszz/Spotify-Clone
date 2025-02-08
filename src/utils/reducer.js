import { reducerCases } from "./constant";

export const initialState = {
  token: null,
  playlists: [],
  userInfo: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token, // ✅ Updates the token when action is dispatched
      };
    case reducerCases.SET_PLAYLISTS: {
      return {
        ...state,
        playlists: action.playlists,
      };
    }
    case reducerCases.SET_USER: {
      return {
        ...state,
        userInfo: action.userInfo,
      };
    }
    default:
      return state;
  }
};

export default reducer;
