import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';

 import RoomDetail from    "./RoomDetailComponent"

    function RenderMenuItem ({room, onClick}) {
      return (
          <Card
              onClick={() => onClick(room.id)}>
              <CardImg width="100%" src={room.image} alt={room.name} />
              <CardImgOverlay>
                  <CardTitle>{room.name}</CardTitle>
              </CardImgOverlay>
          </Card>
      );
      }
    
    // render() {
    //     const menu = this.props.rooms.map((room) => {
    //       return (
    //         <div className="col-12 col-md-5 m-1">
    //          <Card key={room.id}
    //                     onClick={() => this.props.onClick(room.id)}>
    //              <CardImg width="100%" src={room.image} alt={room.name} />
    //             <CardImgOverlay>
    //                 <CardTitle>{room.name}</CardTitle>
    //             </CardImgOverlay>
    //           </Card>
    //          </div>
    //       );
    //   });
        // return (
        //   <div className="container">
        //     <div className="row">
        //            {menu}
        //      </div>
        //    </div>
                 
           
        // );
        const Menu = (props) => {

          const menu = props.rooms.map((room) => {
              return (
                  <div className="col-12 col-md-5 m-1"  key={RoomDetail.id}>
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