import { reducerCases } from "./constant";

export const initialState = {
  token: null,
  playlists: [],
  userInfo: null,
  selectedPlaylistId: "7jeqSi52K3DQ9gIt4Jgmrq",
  selectedPlaylist: null,
  current_track: null,
  player_state: false,
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
    case reducerCases.SET_CURRENT_PLAYLIST: {
      return {
        ...state,
        selectedPlaylist: action.selectedPlaylist,
      };
    }
    case reducerCases.SET_CURRENT_TRACK: {
      return {
        ...state,
        current_track: action.currentPlaying,
      };
    }
    case reducerCases.SET_PLAYER_STATE: {
      return {
        ...state,
        player_state: action.state,
      };
    }

    default:
      return state;
  }
};

export default reducer;
