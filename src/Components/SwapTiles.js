function SwapTiles(startLocation, endLocation, tempTiles) {
  // console.log('in swapTiles', startLocation, endLocation);
  // let tempTiles = this.state.tiles;

  let tempName = tempTiles[endLocation].name;
  let tempIsEmpty = tempTiles[endLocation].isEmpty;
  tempTiles[endLocation].name = tempTiles[startLocation].name;
  tempTiles[endLocation].isEmpty = tempTiles[startLocation].isEmpty;

  // change class of startLoc to emptyTile
  // className = {  'Tile emptyTile' : 'Tile' }
  tempTiles[startLocation].name = tempName;
  tempTiles[startLocation].isEmpty = tempIsEmpty;
  return tempTiles;
}
export default SwapTiles;