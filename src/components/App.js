import React from 'react';
import PlaylistCollection from './PlaylistCollection';
import SongCollection from './SongCollection';

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        selectedSongId: props.data.selectedSongId,
        selectedPlaylistId: props.data.selectedPlaylistId
      };

    this.handleSongSelect = this.handleSongSelect.bind(this);
    this.handlePlaylistSelect = this.handlePlaylistSelect.bind(this);
  }

  handleSongSelect( id ) {
    this.setState({ selectedSongId: id });
  }

  handlePlaylistSelect( id ) {
    this.setState({ selectedPlaylistId: id })
  }


  render() {
    let data = this.props.data

    let selectedPlaylistSongIds = data.playlists[this.props.data.selectedPlaylistId-1].songs;

    let filterById = (obj) => {
      return selectedPlaylistSongIds.includes(obj.id);
    }

    let selectedPlaylistSongs = data.songs.filter(filterById);

    return (
      <div className="App row">

            <PlaylistCollection
                playlists={data.playlists}
                selectedPlaylistId={this.state.selectedPlaylistId}
                handlePlaylistSelect={this.handlePlaylistSelect}
            />

            <SongCollection
                songs={selectedPlaylistSongs}
                selectedSongId={this.state.selectedSongId}
                handleSongSelect={this.handleSongSelect}
            />
      </div>
    );
  }
}

export default App;
