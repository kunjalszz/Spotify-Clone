import React, { useEffect } from "react";
import Login from "./components/Login.jsx";
import { useStateProvider, useStateValue } from "./utils/StateProvider.jsx";
import Spotify from "./components/Spotify.jsx";
import { reducerCases } from "./utils/constant.js";
export default function App() {
  const [{ token }, dispatch] = useStateValue();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // console.log(hash);
      const token = hash.substring(1).split("&")[0].split("=")[1];
      // console.log(token);
      dispatch({ type: reducerCases.SET_TOKEN, token });
    }
  }, [token, dispatch]);
  return <div>{token ? <Spotify /> : <Login />}</div>;
}
