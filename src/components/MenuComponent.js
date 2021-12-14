import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';

 import RoomDetail from    "./RoomDetailComponent"

    function RenderMenuItem ({room}) {
      return (
          <Card >
              <CardImg width="100%" src={room.image} alt={room.name} />
              <CardImgOverlay>
                  <CardTitle>{room.name}</CardTitle>
              </CardImgOverlay>
          </Card>
      );
      }
    
        const Menu = (props) => {

          const menu = props.rooms.map((room) => {
              return (
                  <div className="col-12 col-md-5 m-1"  key={room.id}>
                      <RenderMenuItem room={room} onClick={props.onClick} />
                  </div>
              );
          });
  
          return (
              <div className="container">
                  <div className="row">
                      {menu}
                  </div>
              </div>
          );
      }
     


export default Menu;