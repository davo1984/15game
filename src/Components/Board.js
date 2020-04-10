import React, { Component } from 'react';
// import { Container, Col, Row } from 'reactstrap';
import Tile from './Tile.js';
// import handleClick from './handleClick.js';

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tiles: [    
        // TODO dynamically build tiles array
        { name: 1, location: 0, isEmpty: false },
        { name: 2, location: 1, isEmpty: false },
        { name: 3, location: 2, isEmpty: false },
        { name: 4, location: 3, isEmpty: false },
        { name: 5, location: 4, isEmpty: false },
        { name: 6, location: 5, isEmpty: false },
        { name: 7, location: 6, isEmpty: false },
        { name: 8, location: 7, isEmpty: false },
        { name: 9, location: 8, isEmpty: false },
        { name: 10, location: 9, isEmpty: false },
        { name: 11, location: 10, isEmpty: false },
        { name: 12, location: 11, isEmpty: false },
        { name: 13, location: 12, isEmpty: false },
        { name: 14, location: 13, isEmpty: false },
        { name: 15, location: 14, isEmpty: false },
        { name: 16, location: 15, isEmpty: true }
      ]
    }
    this.handleClick = this.handleClick.bind(this);
    this.findEmpty = this.findEmpty.bind(this);
  } 

  handleClick(name, location, isEmpty) {
    // preventDefault(); console.log('The link was clicked.');
    // console.log('Clicked a tile', name, location, isEmpty);
    // where is empty tile
    let emptyLocation = this.findEmpty();
    // where can I move
    // move if able
    // console.log('empty location', emptyLocation, 'location', location);
    // console.log('set above and below', location, this.state.numCols);
    if  (emptyLocation === location + 4 || emptyLocation === location - 4 ) {
      this.swapTiles(location, emptyLocation);
    } else if  (emptyLocation === location - 1 || emptyLocation === location + 1) {
      // console.log('eL/4', Math.floor(emptyLocation / 4), 'loc/4', Math.floor(location / 4));
        if ( Math.floor(emptyLocation / 4) === Math.floor(location / 4)) {
          // console.log('not over the edge');
          // move but not over the edge
          this.swapTiles(location, emptyLocation);
          //   if ( location % 4 && emptyLocation%4 !== location )  {
          // }
        }
      
    }
  }

  findEmpty() {
    let emptyLocationMethod = (element) => element.isEmpty === true;
    let emptyLocation = this.state.tiles.findIndex( emptyLocationMethod );
    
    // console.log('findEmpty emptyLoc', emptyLocation );
    // console.log('findEmpty', this.state.tiles[emptyLocation].location );
    return emptyLocation;
  }

  swapTiles(startLocation, endLocation) {
    // console.log('in swapTiles', startLocation, endLocation);
    let tempTiles = this.state.tiles;

    let tempName = tempTiles[endLocation].name;
    tempTiles[endLocation].name = tempTiles[startLocation].name;
    tempTiles[endLocation].isEmpty = false;

    // change class of startLoc to emptyTile
    // className = {  'Tile emptyTile' : 'Tile' }
    tempTiles[startLocation].name = tempName;
    tempTiles[startLocation].isEmpty = true;

    // move name location of startLoc to temp vars
    // move 

    this.setState( {tiles: tempTiles} );
  }

  render() {
    const TileBlock = this.state.tiles.map((item, i) => {
      let tileType = item.isEmpty ? 'emptyTile' : 'gameTile' ;
      let classString="col-3 border tile text-center align-self-center " + tileType; 
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
        <div className="row">{TileBlock}</div>
    ) 
  }
}
// function handleClickTest() {
//   console.log('inside handleClickTest TEST', this.props.name, this.location);
// }  Not able to be inserted inside <Tile...  ?why?

export default Board;