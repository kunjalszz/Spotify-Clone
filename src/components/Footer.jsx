import React from "react";
import styled from "styled-components";
import Current_Track from "./Current_Track";
import Player_Controls from "./Player_Controls";
import Volume_Controls from "./Volume_Controls";
const Footer = () => {
  return (
    <Container>
      <Current_Track />
      <Player_Controls />
      <Volume_Controls />
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  background-color: #181818;
  height: 100%;
  width: 100%;
  border-top: 1px solid #282828;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`;
