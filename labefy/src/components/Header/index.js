import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const ButtonContainer = styled.div`
  width: 300px; 
  display: flex;
  justify-content: space-around;
`;
const Botão =styled.button`
  border-radius:10px;
  background-color:#009999;
  height:5vh;
`;

const Header = (props) => {
  //não esquecer de passar a props como parametro
  return (
    <HeaderContainer>
      <h1>Labefy</h1>
      <ButtonContainer>
        <Botão onClick={() => props.changePage("playlistCreateForm")}>
          Cadastrar Playlist
        </Botão>
        <Botão onClick={() => props.changePage("playlistMenegerPage")}>
          Gerenciar Playlist
        </Botão>
      </ButtonContainer>
    </HeaderContainer>
  );
};
export default Header;
