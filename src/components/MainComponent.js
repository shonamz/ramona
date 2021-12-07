import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import RoomDetail from './RoomDetailComponent';
import { ROOMS } from '../shared/rooms';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        rooms: ROOMS,
        selectedRoom: null
    };
  }

  onRoomSelect(roomId) {
    this.setState({ selectedRoom: roomId});
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Find your Room At UCLA Campus</NavbarBrand>
          </div>
        </Navbar>
        <Menu rooms={this.state.rooms} onClick={(roomId) => this.onRoomSelect(roomId)} />
        <RoomDetail room={this.state.rooms.filter((room) => room.id === this.state.selectedRoom)[0]} />
      </div>
    );
  }
}

export default Main;