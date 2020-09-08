import React from "react";
import styled from "styled-components";
import Header from "./components/Header";

import PlaylistCreateForm from "./components/PlaylistCreateForm";
import PlaylistMenegerPage from "./components/PlaylistMenegerPage";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color:#669999;
  display: flex;
  flex-direction: column;
`;
// esse código renderiza a pagina PlaylistCreateForm para PlaylistMenegerPage
class App extends React.Component {
  state = {
    currentPage: "playlistCreateForm"
  };

  // essa funçao funciona como um interrupitor de botão alternando de página, pra outra página
  changePage = (currentPage) => {
    this.setState({ currentPage: currentPage });
  };

  // essa função faz com rederize a pagina
  render() {
    const renderCurrentPage = () => {
      if (this.state.currentPage === "playlistCreateForm") {
        return <PlaylistCreateForm />;
      } else if (this.state.currentPage === "playlistMenegerPage") {
        return <PlaylistMenegerPage />;
      }
    };
    return (
      <AppContainer>
        <Header
          changePage={this.changePage} //aquipassamos a função e criamos uma props para mandar para o header a onde está os botões
        />
        {renderCurrentPage()}
      </AppContainer>
    );
  }
}
export default App;
