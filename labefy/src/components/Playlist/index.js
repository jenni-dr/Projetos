import React from "react";
import styled from "styled-components";
import PlaylistCard from "../PlaylistCard";
import axios from "axios";
import { baseUrl, axiosConfig } from "../constants";

//playlist e playlistDetail vão ser renderizados dentro da pasta PlaylistMenegerPage

const PlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//  as informaões no estate é quando eu moco as informações da API estaticamente  se quisermos
//criar  uma playlist do zero é só manter state playlist:[].
class Playlist extends React.Component {
  state = {
    playlists: []
  };
  // faz que quando criamos uma  nova playnlist e apareça na tela
  componentDidMount = () => {
    this.getPlaylist();
  };

  getPlaylist = () => {
    axios
      .get(baseUrl, axiosConfig)
      .then((response) => {
        //console.log(response.data.result.list)
        this.setState({ playlists: response.data.result.list });
      })
      .catch((erro) => {
        // console.log(erro)
      });
  };

  // depois é só chamar no PlaylistCard a função

  deletePlaylist = (playlistId) => {
    axios
      .delete(`${baseUrl}/${playlistId}`, axiosConfig)
      .then((response) => {
        this.getPlaylist();
      })
      .catch((erro) => {
        console.log(erro);
      });
  };
  // isolando dentro de uma função
  //aqui passamos uma props dentro de outa props que é o PlaylistCard e onChange
  render() {
    const listaPlaylist = this.state.playlists.map((item) => {
      return (
        <PlaylistCard
          key={item.id}
          changePage={this.props.changePage}
          name={item.name}
          playlistId={item.id}
          deletePlaylist={this.deletePlaylist}
        />
      );
    });

    // chamamos a função listaPlaylist dentro do return para fazer aparecer a lista
    return <PlaylistContainer>{listaPlaylist}</PlaylistContainer>;
  }
}
export default Playlist;

//nesse caso não precisamos colocar o botão aqui pq ele foi pro outro arquivo PlaylistCard
// quando clicado ele vai ser renzerizado para o detalhe da musicas
//<button onClick={() =>this.props.changePage("playlistDetail")}>Abrir Playlist</button>
