import React from 'react';
import ReactDOM from 'react-dom';

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state {
      board: {
        0: [0,0,0,0,0,0,0],
        1: [0,0,0,0,0,0,0],
        2: [0,0,0,0,0,0,0],
        3: [0,0,0,0,0,0,0],
        4: [0,0,0,0,0,0,0],
        5: [0,0,0,0,0,0,0]
      },
      turn: 0,
      winner: false,
    }
  }

  render(){
    return(
      <h1>Board goes here</h1>
    )
  }

}

export default Board;
