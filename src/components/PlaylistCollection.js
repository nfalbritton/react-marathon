import React, { Component } from 'react';
import Playlist from './Playlist';

class PlaylistCollection extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    let className;
    let playlists = this.props.playlists.map(playlist => {
      if(this.props.selectedPlaylistId === playlist.id) {
        className = 'selected'
      } else {
        className = " "
      }

      let playlistOnClick = () => {this.props.handlePlaylistSelect(playlist.id)}

      return (
        <Playlist
            key={playlist.id}
            name={playlist.name}
            songs={playlist.songs}
            className={className}
            handlePlaylistSelect={playlistOnClick}
          />
        )
      }
    )
      return(
        <div className="small-4 columns">
          <h3>Playlists</h3>
            <ul>
              {playlists}
            </ul>
        </div>
      )
    }
}

  export default PlaylistCollection;
