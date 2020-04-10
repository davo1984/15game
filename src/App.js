import React, { Component } from 'react';
import {Button, Row} from 'reactstrap';
import Board from './Components/Board.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numRows: 4,
      numCols: 4
    }
    this.resetTiles = this.resetTiles.bind(this);
  }
  // TODO due to scope must the reset function be here and not as a component.
  resetTiles() {
    // walk thru array moving tiles to finished position
    let tempTiles = this.state.tiles;
    console.log('inside resetBoard', tempTiles);
    // for (let i = 0; i < this.tempTiles.length; i++) {
    //   let findTileMethod = (element) => element.name === i + 1;
    //   let tileLocation = this.state.tiles.findIndex(findTileMethod);
    //   this.swapTiles(i, tileLocation);
    // }
  }
  
  componentDidMount() {
    for ( let i=0; i<16; i++ ) {
      let isSpace = false;
      if ( i === 15 ) {
        isSpace = true;
      }
      this.setState({
        name: i,
        location: i,
        isEmpty: isSpace,
        // display: ''   set slice of picture
      });
      }
  }
    
  render() {
    return (
      <div className="App container">
        <div className="row">
          <header className="App-header col text-center display-2">
            15 Game
          </header>
        </div>
        <div className="row align-items-center">
          <div className="col-6 offset-3 align-self-center">
            <Board 
              numRows={this.state.numRows}
              numCols={this.state.numCols}
              initTiles={this.state.initTiles}
            />
          </div>
        </div>
        <Row>
          <footer className="App-header col text-center display-2">
            <div className="text-center">

              {/* TODO random drunk walk */}
              <Button color="success" size="lg">Shuffle</Button>{' '}
              {/* &nbsp;&nbsp;&nbsp;  This will add space between the buttons */}
              <Button color="info" size="lg">Slow Shuffle</Button>{' '}
              
              {/* TODO How to call Board to recreate board in proper place */}
              {/* A: walk thru array finding location of correct tile then call swapTiles */}
              <Button color="warning" size="lg">Reset</Button>{this.resetTiles()}
              </div>
          </footer>
        </Row>
      </div>
    );
  }
}
export default App;