import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import RoomDetail from './RoomDetailComponent';
import { ROOMS } from '../shared/rooms';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './ContactComponent';


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
    const HomePage = () => {
      return(
          <Home />
      )
    }
     
    return (
      <div>
         
        <Header />
         {/* <Menu rooms={this.state.rooms} onClick={(roomId) => this.onRoomSelect(roomId)} />
        <RoomDetail room={this.state.rooms.filter((room) => room.id === this.state.selectedRoom)[0]} />  */}
        
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu rooms={this.state.rooms} />} />
              <Redirect to="/home" />
              <Route exact path='/contactus' component={Contact} />
          </Switch>
          <Footer />
      </div>
    );
  }
}

export default Main;