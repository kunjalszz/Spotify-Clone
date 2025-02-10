import React from "react";
import styled from "styled-components";
import { FaPlay, FaPause } from "react-icons/fa";
import { FaShuffle, FaRepeat } from "react-icons/fa6";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/constant";

function Player_Controls() {
  const [{ token, player_state }, dispatch] = useStateProvider();

  const changeTrack = async (type) => {
    try {
      await axios.post(
        `https://api.spotify.com/v1/me/player/${type}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const response = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data && response.data.item) {
        const { item } = response.data;
        const current_track = {
          id: item.id,
          name: item.name,
          artists: item.artists.map((artist) => artist.name),
          image: item.album.images[2].url,
        };
        dispatch({ type: reducerCases.SET_CURRENT_TRACK, current_track });
      } else {
        dispatch({ type: reducerCases.SET_CURRENT_TRACK, current_track: null });
      }
    } catch (error) {
      console.error(
        "Error changing track:",
        error.response?.data || error.message
      );
    }
  };

  const changeState = async () => {
    if (!token) {
      console.error("no token available");
      return;
    }
    try {
      const state = player_state ? "pause" : "play";
      const deviceResponse = await axios.put(
        `https://api.spotify.com/v1/me/player/${state}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({ type: reducerCases.SET_PLAYER_STATE, state: !player_state });
    } catch (error) {
      console.error(
        "error changing player state",
        error.response?.data || error.message
      );
    }
  };

  return (
    <Container>
      <div className="shuffle">
        <FaShuffle />
      </div>
      <div className="previous">
        <CgPlayTrackPrev onClick={() => changeTrack("previous")} />
      </div>
      <div className="state">
        {player_state ? (
          <FaPause onClick={() => changeState()} />
        ) : (
          <FaPlay onClick={() => changeState()} />
        )}
      </div>
      <div className="next">
        <CgPlayTrackNext onClick={() => changeTrack("next")} />
      </div>
      <div className="repeat">
        <FaRepeat />
      </div>
    </Container>
  );
}

export default Player_Controls;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  svg {
    color: #b3b3b3;
    transition: 0.3s ease-in-out;
    &:hover {
      color: white;
    }
  }
  .state {
    svg {
      color: white;
    }
  }
  .previous .next .state {
    font-size: 2rem;
  }
`;
