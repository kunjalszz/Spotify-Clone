import React, { useEffect } from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/constant";

function Current_Track() {
  const [{ token, current_track }, dispatch] = useStateProvider();

  useEffect(() => {
    const getCurrentTrack = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);
      if (response.data && response.data.item) {
        const { item } = response.data;
        const current_track = {
          id: item.id,
          name: item.name,
          artists: item.artists.map((artist) => artist.name).join(", "),
          image: item.album.images[2].url,
        };

        // console.log(playlists);
        dispatch({ type: reducerCases.SET_CURRENT_TRACK, current_track });
      } else dispatch({ type: reducerCases.SET_CURRENT_TRACK, current_track });
    };
    getCurrentTrack();
  }, [token, dispatch]);
  return (
    <Container>
      {current_track && (
        <div className="track">
          <div className="track__image">
            <img src={current_track.image} alt="current track" />
          </div>
          <div className="track__info">
            <h4>{current_track.name}</h4>
            <h6>{current_track.artists}</h6>
          </div>
        </div>
      )}
    </Container>
  );
}

export default Current_Track;

const Container = styled.div`
  .track {
    display: flex;
    align-items: center;
    gap: 1rem;
    .track__info {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      h4 {
        color: white;
      }
      h6 {
        color: #b3b3b3;
      }
    }
  }
`;
