import React, { useEffect, useState } from "react";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/constant";
import styled from "styled-components";

function Playlists() {
  const [{ token, playlists }, dispatch] = useStateProvider();

  useEffect(() => {
    const getPlaylistsData = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/playlists",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      //   console.log(response);
      const { items } = response.data;
      const playlists = items.map(({ name, id }) => {
        return { name, id };
      });
      //   console.log(playlists);
      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
    };
    getPlaylistsData();
  }, [token, dispatch]);
  return (
    <Container>
      <ul>
        {playlists.map(({ name, id }) => {
          return <li key={id}>{name}</li>;
        })}
      </ul>
    </Container>
  );
}

export default Playlists;

const Container = styled.div`
  height: 100%;
  overflow: hidden;
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0;
    height: 52vh;
    max-height: 100%;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 0.7rem;
      cursor: pointer;
      &-thumb {
        background-color: rgba(255, 255, 255, 0.6);
        /* border-radius: 10px; */
      }
    }
    li {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 18px;
      cursor: pointer;
      transition: 0.3s ease-in-out;
      svg {
        font-size: 24px;
      }
      &:hover {
        color: white;
      }
    }
  }
`;
