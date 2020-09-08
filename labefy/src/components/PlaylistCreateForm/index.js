import React from "react";
import styled from "styled-components";
import axios from "axios";
import { baseUrl, axiosConfig } from "../constants";

//formulario de criar playlist

const PlaylistCreateContainer = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormPlaylist = styled.form`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const Input = styled.input`
  background-color:#009999;
  border-radius:10px;
  height:4vh;
  width:30vw;
`;
const NewBotao = styled.button`
  background-color:#009999;
  border-radius:10px;
  height:5vh;
  width:17vw;
`;

class PlaylistCreateForm extends React.Component {
  state = {
    inputNameValue: ""
  };

  //input controlado para fazer funcionar os inputs

  changeInputNameValue = (e) => {
    this.setState({ inputNameValue: e.target.value });
  };

  // não esquecer de colocar preventDefault
  createPlaylist = (e) => {
    e.preventDefault();
    
    const body = {
      name: this.state.inputNameValue
    };
    axios
      .post(baseUrl, body, axiosConfig)
      .then((response) => {
        alert("Playlist Cadastrada com sucesso");
      })
      .catch((erro) => {
        //console.log(erro)
      });
    this.setState({ inputNameValue: "" });
  };

  //esse console da pra ver se está funcionando o input,
  render() {
    // console.log(this.state.inputNameValue)
    return (
      <PlaylistCreateContainer>
        <h1>Cadastrar nova PlayList</h1>
        <FormPlaylist onSubmit={this.createPlaylist}>
          <label>Nova playlist</label>
          <Input
            placeholder="Nome da Playlist"
            type="text"
            value={this.state.inputNameValue}
            onChange={this.changeInputNameValue}
          />
          <NewBotao type="submit">Cadastrar Playlist</NewBotao>
        </FormPlaylist>
      </PlaylistCreateContainer>
    );
  }
}
export default PlaylistCreateForm;
