import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
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
        <h1>
            <PlaylistCollection
            />
        </h1>
      </div>
    );
  }
}

export default App;
