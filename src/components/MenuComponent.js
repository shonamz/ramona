import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';

 import RoomDetail from    "./RoomDetailComponent"

class Menu extends Component {
    constructor(props) {
        super(props);       
    }
    
    render() {
        const menu = this.props.rooms.map((room) => {
          return (
            <div className="col-12 col-md-5 m-1">
             <Card key={room.id}
                        onClick={() => this.props.onClick(room.id)}>
                 <CardImg width="100%" src={room.image} alt={room.name} />
                <CardImgOverlay>
                    <CardTitle>{room.name}</CardTitle>
                </CardImgOverlay>
              </Card>
             </div>
          );
      });
        return (
          <div className="container">
            <div className="row">
                   {menu}
             </div>
                {/* <RoomDetail selectedRoom={this.state.selectedRoom}/> */}
          </div>
                 
           
        );
     }
}

export default Menu;