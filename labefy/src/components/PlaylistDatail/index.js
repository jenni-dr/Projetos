import React from "react";
import styled from "styled-components";
import TrackCard from "../TrackCard/TrackCard";
import axios from "axios";
import { baseUrl, axiosConfig } from "../constants";

//playlist e playlistDetail vão ser renderizados dentro da pasta PlaylistMenegerPage
const PlaylistDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CreationForm = styled.form`
  width: 100vw;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  div {
  display: flex;
  flex-direction: column;
}
`;
const Input = styled.input`
  background-color:#009999;
  border-radius:10px;
  height:4vh;
  width:25vw;
`
const Bottom =styled.button`
  background-color:#009999;
  border-radius:10px;
  height:5vh;
  width:17vw;
`

class PlaylistDatail extends React.Component {
  state = {
    tracks: [],
    trackName:"",
    artist:"",
    url:""

  };

  componentDidMount = () => {
    this.getTracks();
  };

  getTracks = () => {
    axios
      .get(`${baseUrl}/${this.props.playlistId}/tracks`, axiosConfig)
      .then(response => {
        this.setState({ tracks: response.data.result.tracks });
      })
      .catch(erro => {
        console.log(erro);
      });
  };

  removeTracksPlaylist = (trackId) => {
    axios
      .delete(
        `${baseUrl}/${this.props.playlistId}/tracks/${trackId}`,
        axiosConfig
      )
      .then(response => {
        this.getTracks();
      })
      .catch(erro => {
        console.log(erro);
      });
  };

  changeInputValue = (e) =>{
    this.setState({[e.target.name]:e.target.value})
  };

  addTrackPlaylist = (e) => {
     e.preventDefault();
     
     const body ={
       name:this.state.trackName,
       artist:this.state.artist,
       url:this.state.url
     }
     axios
     .post(`${baseUrl}/${this.props.playlistId}/tracks`,body,axiosConfig)
     .then(response =>{
       this.getTracks();
       this.setState({trackName:"",artist:"",url:""})
     })
     .catch(erro => {
       console.log(erro)
     })
  }

  // não esquecer de importar a função TrackCard no return e as props
  render() {
   const listTracks = this.state.tracks.map(item => {
      return (
        <TrackCard
          key={item.id}
          trackName={item.name}
          artist={item.artist}
          url={item.url}
          trackId={item.id}
          removeTracksPlaylist={this.removeTracksPlaylist}
        />
      );
    });
    return (
      //aqui o parametro do changePage é ao contrario do usado nos botõe do header
      <PlaylistDetailContainer>
        <CreationForm onSubmit={this.addTrackPlaylist}>
          <div>
            <Input 
            placeholder="Nome da música"
            name="trackName"
            value={this.state.trackName}
            onChange={this.changeInputValue}
            />
          </div>
          <div>
            <Input
            placeholder="Nome do Artista"
            name="artist"
            value={this.state.artist}
            onChange={this.changeInputValue}
            />
          </div>
          <div>
            <Input
            placeholder="URL da música"
            name="url"
            value={this.state.url}
            onChange={this.changeInputValue}
            />
          </div>
          <Bottom type="submit">Adicionar Música</Bottom>
        </CreationForm>
        {listTracks}
        <Bottom onClick={() => this.props.changePage("playlist", "")}>
          Voltar para Playlist
        </Bottom>
      </PlaylistDetailContainer>
    );
  }
}
export default PlaylistDatail;
