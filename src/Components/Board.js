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
    // preventDefault(); console.log('The link was clicked.');
    // console.log('Clicked a tile', name, location, isEmpty);
    // where is empty tile
    let emptyLocation = this.props.tiles.findIndex((e) => e.isEmpty === true );
    // where can I move
    // move if able
    // console.log('empty location', emptyLocation, 'location', location);
    // console.log('set above and below', location, this.state.numCols);
    let tempTiles = this.props.tiles;
    if  (emptyLocation === location + 4 || emptyLocation === location - 4 ) {
      let outTiles = this.SwapTiles(location, emptyLocation, tempTiles);
      this.props.onChangeTiles(outTiles);
    } else if  (emptyLocation === location - 1 || emptyLocation === location + 1) {
      // console.log('eL/4', Math.floor(emptyLocation / 4), 'loc/4', Math.floor(location / 4));
        if ( Math.floor(emptyLocation / 4) === Math.floor(location / 4)) {
          // console.log('not over the edge');
          // move but not over the edge
          let tempTiles = this.SwapTiles(location, emptyLocation, this.props.tiles);
          this.props.onChangeTiles(tempTiles);
          //   if ( location % 4 && emptyLocation%4 !== location )  {
          // }
        }
      
    }
  }

  // swapTiles(startLocation, endLocation, tempTiles) {
  //   // console.log('in swapTiles', startLocation, endLocation);
  //   // let tempTiles = this.props.tiles;

  //   let tempName = tempTiles[endLocation].name;
  //   tempTiles[endLocation].name = tempTiles[startLocation].name;
  //   tempTiles[endLocation].isEmpty = false;

  //   // change class of startLoc to emptyTile
  //   // className = {  'Tile emptyTile' : 'Tile' }
  //   tempTiles[startLocation].name = tempName;
  //   tempTiles[startLocation].isEmpty = true;

  //   // move name location of startLoc to temp vars
  //   // move 

  //   // this.setState( {tiles: tempTiles} );
  //   // this.props.onChangeTiles(tempTiles);
  //   return tempTiles;
  // }

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
// function handleClickTest() {
//   console.log('inside handleClickTest TEST', this.props.name, this.location);
// }  Not able to be inserted inside <Tile...  ?why?

export default Board;