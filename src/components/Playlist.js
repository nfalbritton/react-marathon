import React from 'react';

const Playlist = props => {
  return(
    <li> {props.key}</li>
    <li>{props.name}</li>
    <li>{props.songs}</li>
  )
}

export default Playlist;
