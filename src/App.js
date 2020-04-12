import React, { Component } from 'react';
import {Button, Row, Alert} from 'reactstrap';
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
    this.shuffleTiles = this.shuffleTiles.bind(this);
  }
  
  resetTiles() {
    let tempTiles = this.state.tiles;
    for (let i = 0; i < tempTiles.length; i++) {
      let findTileMethod = (element) => element.name === i + 1;
      let tileLocation = this.state.tiles.findIndex(findTileMethod);
      let outTiles = this.SwapTiles(i, tileLocation, tempTiles);
      this.setState({ tiles: outTiles });
    }
  }

  shuffleTiles() {
    let tempTiles = this.state.tiles;
    let shuffleCtr = 0;
    let newEmptyLocation = 14;
    let emptyLocation = tempTiles.findIndex((e) => e.isEmpty === true);
    do {
      let previousLocation = emptyLocation;
      let randomMove =  Math.round(Math.random() * 3);
      if (randomMove !== previousLocation) {
        if (randomMove === 1 && emptyLocation > 0) {
          newEmptyLocation = emptyLocation - 1;
          tempTiles = this.SwapTiles(newEmptyLocation, emptyLocation, tempTiles);
          shuffleCtr++;
        } else if (randomMove === 3 && emptyLocation < 14) {
          newEmptyLocation = emptyLocation + 1;
          tempTiles = this.SwapTiles(newEmptyLocation, emptyLocation, tempTiles);
          shuffleCtr++;
        } else if (randomMove === 2 && emptyLocation <= 11) {
          newEmptyLocation = emptyLocation + 4;
          tempTiles = this.SwapTiles(newEmptyLocation, emptyLocation, tempTiles);
          shuffleCtr++;
        } else if (randomMove === 0 && emptyLocation >= 4) {
          newEmptyLocation = emptyLocation - 4;
          tempTiles = this.SwapTiles(newEmptyLocation, emptyLocation, tempTiles);
          shuffleCtr++;
        }
        previousLocation = newEmptyLocation;
        emptyLocation = newEmptyLocation;
      }
    } while (shuffleCtr < 250);
    this.setState({ tiles: tempTiles });
  }

  handleTilesChange(tiles) {
    this.setState({ tiles });
    for ( let i=0; i<this.state.tiles.length; i++ ) {
      if ( this.state.tiles[i].name != i+1 ) { return }
    }
    console.log('WINNER');
    return (
    <Alert color="success">
      SUCCESS! You Are a WINNER!
    </Alert>
    )
  }
  
  componentDidMount() {
    // TODO add async & wait    how?    is needed?
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
              <Button color="success" size="lg" onClick={this.shuffleTiles}>Shuffle</Button>{' '}
              {/* &nbsp;&nbsp;&nbsp;  This will add space between the buttons */}
              {/* <Button color="info" size="lg">Slow Shuffle</Button>{' '} */}
              <Button color="warning" size="lg" onClick={this.resetTiles}>Reset</Button>
              </div>
          </footer>
        </Row>
      </div>
    );
  }
}
export default App;