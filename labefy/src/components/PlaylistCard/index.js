// aqui manteremos as props

import React from "react";
import styled from "styled-components";

const PlaylistCardContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

const NameContainer = styled.p`
  margin: 10px;
`;
 
const DeleteContainer = styled.button`
  color: red;
  background-color:#009999;
  border-radius:10px;
  width:7vw;
  height:5vh;
  margin-left:10px;
`;

const Botao =styled.button`
  background-color:#009999;
  border-radius:10px;
  width:7vw;
  height:5vh;
`
// na frente do onClick nesse caso não precisamos passar props , pq é um component dentro de outro
// essa função faz que quando clicamos em abrir playlist ela redirecionada para o detalhe da playlist
const PlaylistCard = (props) => {
  return (
    <PlaylistCardContainer>
     <h2>Playlist</h2>
     <NameContainer>{props.name}</NameContainer>
      <Botao
        onClick={() => props.changePage("playlistDetail", props.playlistId)}>
        Info +
      </Botao>
      <DeleteContainer 
      onClick={() => props.deletePlaylist(props.playlistId)}>
        Delete
      </DeleteContainer>
    </PlaylistCardContainer>
  );
};
export default PlaylistCard;
