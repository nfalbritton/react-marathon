import React, { Component } from 'react';
import data from '..constants/data';
import App from './App';

class PlaylistCollection extends Component {
  constructor(props) {
    super(props);
  }
}

  render(){
    return(
      <div>
        <h3>Testing</h3>
        <PlaylistCollection data={data}/>,
      </div>
    )
  }
  return(
    <ul>
      {playlists}
    </ul>
  )


  export default PlaylistCollection;
