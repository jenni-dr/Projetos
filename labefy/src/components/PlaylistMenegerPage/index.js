import React from "react";
import styled from "styled-components";
import Playlist from "../Playlist";
import PlaylistDatail from "../PlaylistDatail";

const PlaylistMenegerContainer = styled.div``;
//renderiza a pagina para abrir playlist para voltar para playlist e vise versa
class PlaylistMenegerPage extends React.Component {
  state = {
    currentPage: "playlist",
    playlistId: ""
  };
  // a função de clicar faz o botão funcionar  como um interrupitor
  changePage = (currentPage, playlistId) => {
    this.setState({ currentPage: currentPage, playlistId: playlistId });
  };

  // a função para fazer funcionar a renderização
  // aqui nesse caso passamos o ChangePage como props dentro do Playlist e dentro do PlaylistDetail
  render() {
    const renderCurrentPage = () => {
      if (this.state.currentPage === "playlist") {
        return <Playlist changePage={this.changePage} />;
      } else if (this.state.currentPage === "playlistDetail") {
        return (
          <PlaylistDatail
            changePage={this.changePage}
            playlistId={this.state.playlistId}
          />
        );
      }
    };
    // não esquecer de chamar a função no retorno{renderCurrentPage()}
    return (
      <PlaylistMenegerContainer>{renderCurrentPage()}</PlaylistMenegerContainer>
    );
  }
}
export default PlaylistMenegerPage;
