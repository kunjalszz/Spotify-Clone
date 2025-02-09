import React from "react";
import styled from "styled-components";
import {
  IoHomeSharp,
  IoSearchOutline,
  IoLibraryOutline,
} from "react-icons/io5";
import Playlists from "./Playlists";

const Sidebar = () => {
  return (
    <Container>
      <div className="top__links">
        <div className="logo">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_White.png"
            alt="spotify logo"
          />
        </div>
        <ul>
          <li>
            <IoHomeSharp />
            <span>Home</span>
          </li>
          <li>
            <IoSearchOutline />
            <span>Search</span>
          </li>
          <li>
            <IoLibraryOutline />
            <span>Your Library</span>
          </li>
        </ul>
      </div>
      <Playlists />
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  background-color: black;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  padding: 1rem;
  .top__links {
    display: flex;
    flex-direction: column;
    .logo {
      text-align: center;
      margin: 1rem 0;
      img {
        max-inline-size: 80%;
        block-size: auto;
      }
    }
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 0;
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
  }
`;
