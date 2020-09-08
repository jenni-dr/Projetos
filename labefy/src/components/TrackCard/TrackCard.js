// este arquivo é parte do cards na musica que da play e pausa

import React from "react";
import styled from "styled-components";


const TrackCardContainer = styled.h4`
  margin: 20px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  div {
  display: flex;
  align-items: center;
}
`;
const TrackContainer = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  text-align:center;
`;

const DeleteContainer = styled.p`
  margin-top:100px;
  text-align:center;
`;

const ArtistContainer = styled.p`
  text-align:center;
`;

const Imagem =styled.img`
  text-align:center;
  width: 150%;
`;
// na frente do onClick nesse caso não precisamos passar props , pq é um component dentro de outro
// essa função faz que quando clicamos em abrir playlist ela redirecionada para o detalhe da playlist
const TrackCard = (props) => {
  return (
    <TrackCardContainer>
      <div>
        <TrackContainer>{props.trackName} -</TrackContainer>
        <ArtistContainer>{props.artist}</ArtistContainer>
        <DeleteContainer
        onClick={() => props.removeTracksPlaylist(props.trackId)}>
          <Imagem src="./imagens/delete.png" alt ="logo"/>
        </DeleteContainer>
      </div>
      <audio autoplay="autoplay" controls="controls">
        <source src={props.url} type="audio/mp3" />
      </audio>
    </TrackCardContainer>
  );
};
export default TrackCard;
