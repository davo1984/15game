function SwapTiles(startLocation, endLocation, tempTiles) {
    let tempName = tempTiles[endLocation].name;
    let tempIsEmpty = tempTiles[endLocation].isEmpty;
    tempTiles[endLocation].name = tempTiles[startLocation].name;
    tempTiles[endLocation].isEmpty = tempTiles[startLocation].isEmpty;
    tempTiles[startLocation].name = tempName;
    tempTiles[startLocation].isEmpty = tempIsEmpty;
  return tempTiles;
}
export default SwapTiles;