import React, { Component } from 'react';
import {Button, Row} from 'reactstrap';
import Board from './Components/Board.js';
import SwapTiles from './Components/SwapTiles.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numRows: 4,
      numCols: 4,
      tiles: []
    }
    this.resetTiles = this.resetTiles.bind(this);
    this.handleTilesChange = this.handleTilesChange.bind(this);
    this.SwapTiles = SwapTiles.bind(this);
  }
  
  resetTiles() {
    let tempTiles = this.state.tiles;
    console.log('inside resetBoard', tempTiles);
    for (let i = 0; i < tempTiles.length; i++) {
      let findTileMethod = (element) => element.name === i + 1;
      let tileLocation = this.state.tiles.findIndex(findTileMethod);
      let outTiles = this.SwapTiles(i, tileLocation, tempTiles);
      this.setState({ tiles: outTiles });
    }
  }

  handleTilesChange(tiles) {
    this.setState({ tiles });
  }
  
  componentDidMount() {
    // TODO add async & wait    how?    is needed?
    // TODO create array row    Looks like it works!
    for ( let i=0; i < ( this.state.numRows * this.state.numCols ); i++ ) {
      let isSpace = false;
      if ( i === 15 ) {
        isSpace = true;
      }
      this.state.tiles.push({ name: i+1, location: i, isEmpty: isSpace });
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
          <div className="col-6 offset-3 align-self-center border border-rounded">
            <Board 
              numRows={this.state.numRows}
              numCols={this.state.numCols}
              tiles={this.state.tiles}
              onChangeTiles={this.handleTilesChange}
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
              <Button color="warning" size="lg" onClick={this.resetTiles}>Reset</Button>
              </div>
          </footer>
        </Row>
      </div>
    );
  }
}
export default App;