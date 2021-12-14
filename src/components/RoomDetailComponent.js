import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';


  function RenderRoom({room}) {
    if (room != null)
    return (
      <div className='col-12 col-md-5 m-1'>
      <Card>
          <CardImg width='100%' src={room.image} alt={room.name} />                    
          <CardBody>
              <CardTitle>{room.name}</CardTitle>
              <CardText>{room.description}</CardText>
          </CardBody>
      </Card>
        </div>
       
    );
     else
        return(
            <div></div>
        );
}
 function RenderComments({comments}) {
    if(comments == null){
        return(<div></div>);
    }

         const commentsList = comments.map((comment) => {
            let date = new Intl.DateTimeFormat('en-US', {
                year:'numeric',
                month: 'short',
                day: '2-digit'
            }).format(new Date(Date.parse(comment.date)))
            return (
                <li key={comment.id} className="list-unstyled">
                        <p className="row">{comment.comment}</p>
                        <p className="row">--{comment.author},{date}</p>
                 </li>
             
            );
        })
         return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {commentsList}
                </ul>
            </div>
        ); 
}


const RoomDetail = (props) => {   
    const room = props.room;
    if(room == null){
        return(<div></div>)
    }
    const roomItem =<RenderRoom room={props.room}/>
    const commentItem =< RenderComments comments={props.room.comments}/>
    

    return(
        <div class='container'> 
        <div className='row'>
            {roomItem}
            {commentItem}
        </div>
        </div>
    );
}




export default RoomDetail;