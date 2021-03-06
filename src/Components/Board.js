import React, { Component } from 'react';
// import { Container, Col, Row } from 'reactstrap';
import Tile from './Tile.js';
import SwapTiles from './SwapTiles.js';

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.handleClick = this.handleClick.bind(this);
    this.SwapTiles = SwapTiles.bind(this);
  } 

  handleClick(name, location, isEmpty) {
    let emptyLocation = this.props.tiles.findIndex((e) => e.isEmpty === true );
    
    let tempTiles = this.props.tiles;
    if  (emptyLocation === location + 4 || emptyLocation === location - 4 ) {
      let outTiles = this.SwapTiles(location, emptyLocation, tempTiles);
      this.props.onChangeTiles(outTiles);
    } else if  ((emptyLocation === location - 1 || emptyLocation === location + 1) 
        && ( Math.floor(emptyLocation / 4) === Math.floor(location / 4))) {

          let tempTiles = this.SwapTiles(location, emptyLocation, this.props.tiles);
          this.props.onChangeTiles(tempTiles);
    }
  }

  render() {
    // console.log(this.props.tempTiles);
    // const tempTiles = this.props.tiles;
    const tileBlock = this.props.tiles.map((item, i) => {
      let tileType = item.isEmpty ? 'emptyTile' : 'gameTile' ;
      let classString="col-3 border border-rounded tile text-center align-self-center " + tileType; 
      // console.log(this); 
      return (
        <div key={i} onClick={() => this.handleClick(item.name, i, item.isEmpty)} className={classString}>  
          <Tile 
            // onClick = { () => 
            //   this.handleClick(item.name, i, item.isEmpty)
            // } 
            key={i}
            name={item.name}
            location={i}
            isEmpty={item.isEmpty}
            // className={item.isEmpty ? 'emptyTile' : 'gameTile' }
            // toggle emptyTile className if name = 15
          />
        </div>
      )
    });
    return (
        <div className="row">{tileBlock}</div>
    ) 
  }
}
export default Board;