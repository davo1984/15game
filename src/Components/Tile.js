import React, { Component } from 'react';
// import { Container, Col, Row } from 'reactstrap';

class Tile extends Component {
  constructor(props) {
    super(props)
  }             // convert to function if no state
  // click handle method goes here ???
  render() {
    console.log('inside Tile KNLiE=', this.props.key, this.props.name, this.props.location, this.props.isEmpty)
    return (
      <div className='display-4'>{this.props.name}</div>
    )
  }
}
// function handleClickTest() {
//   console.log('inside handleClickTest TEST', this.props.name, this.location);
// }  not able to be inserted in <Tile   why?
export default Tile;