import React from 'react';
import Song from './Song';

class SongCollection extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    let className;
    let selectedSongId = this.props.selectedSongId;

    let songs = this.props.songs.map(song => {
      if(selectedSongId === song.id){
        className = 'selected'
      } else {
        className=" "
      }
      let handleSongSelect  = () => {this.props.handleSongSelect(song.id)};

      return (
        <Song
            key={song.id}
            id={song.id}
            name={song.name}
            artist={song.artist}
            album={song.album}
            className={className}
            handleSongSelect={handleSongSelect}
          />
        )
      }
    )
      return(
        <div className="small-4 columns">
          <h3>Songs</h3>
            <ul>
              {songs}
            </ul>
        </div>
      )
    }
}

export default SongCollection;
