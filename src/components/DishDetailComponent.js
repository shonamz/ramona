 
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle ,Modal, ModalHeader, ModalBody, Label,Button, Row, Col,FormGroup } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors} from 'react-redux-form';
// import React, { Component } from 'react';
// import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Row, Col, Label, Modal, ModalHeader, ModalBody } from 'reactstrap';
// import { Control, LocalForm, Errors } from 'react-redux-form';
// import { Link } from 'react-router-dom';


    function RenderDish({dish}){
       if(dish != null){
           return(
               <div className="col-12 col-md-5 m-1">
               <Card >
                   <CardImg width="100%" object src={dish.image} alt={dish.name} />
               <CardBody>
                   <CardTitle heading>{dish.name}</CardTitle>
                   <CardText>{dish.description}</CardText>
               </CardBody>
               </Card>
               </div>
           );  
       }       
       else{
           return(
               <div></div>
           );
       }      
   }   

   function RenderComments({comments,dishId }){
        if (comments != null) {
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
           });
            return (
               <div className='col-12 col-md-5 m-1'>
                   <h4> Comments </h4>
                   <ul className='list-unstyled'>
                       {commentsList}
                   </ul>
                   <CommentForm />
               </div>
           ); 
     }

       else
       return <div></div>
   }
   
   const required = (val) => val && val.length;
   const maxLength = (len) => (val) => !(val) || (val.length <= len);
   const minLength = (len) => (val) => val && (val.length >= len);
   
class CommentForm extends Component {
   constructor(props) {
       super(props);

       this.toggleModal = this.toggleModal.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
       this.state = {
           isModalOpen: false
       };
   }

   toggleModal() {
       this.setState({
           isModalOpen: !this.state.isModalOpen
       });
   }
   handleSubmit(values) {
       console.log('Current State is: ' + JSON.stringify(values));
       alert('Current State is: ' + JSON.stringify(values));
       //event.preventDefault();
   }


   render() {
       return(
           <div>
               <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
               <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                   <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                   <ModalBody>
                   <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                       <Row className="form-group">
                       <Col md={12}>
                       <Label htmlFor="Rating">Rating</Label>
                       </Col>
                       <Col md={12}>
                           <Control.select model=".rating" name="rating"
                               className="form-control">
                               <option>1</option>
                               <option>2</option>
                               <option>3</option>
                               <option>4</option>
                               <option>5</option>
                           </Control.select>
                       </Col>
                       </Row>
                       <Row className="form-group">
                           <Col md={12}>
                           <Label htmlFor="yourname">Your Name</Label>
                           </Col>
                           <Col md={12}>
                               <Control.text model=".yourname" id="yourname" name="yourname"
                                   placeholder="Your Name"
                                   className="form-control"
                                   validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                   />
                                <Errors
                                    className="text-danger"
                                    model=".yourname"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                 />
                           </Col>
                       </Row>
                       <Row className="form-group">
                           <Col md={12}>
                           <Label htmlFor="message">Comment</Label>
                           </Col>
                           <Col md={12}>
                               <Control.textarea model=".message" id="message" name="message"
                                   rows="6"
                                   className="form-control" />
                           </Col>
                       </Row>
                       <Row className="form-group">
                           <Col md={{size:10}}>
                               <Button type="submit" color="primary">
                               Submit
                               </Button>
                           </Col>
                       </Row>
                   </LocalForm>
                   </ModalBody>
               </Modal>
           </div>
       );
   }
}
const  DishDetail = (props) => {
   if(props.dish != null){
       return(
           <div className="container"> 
           <div className="row">
           <Breadcrumb>
               <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
               <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
           </Breadcrumb>
           <div className="col-12">
               <h3>{props.dish.name}</h3>
               <hr />
           </div>                
       </div>           
            <div className="row">                 
                <RenderDish dish={props.dish}/>
                <RenderComments comments={props.comments} dishId={props.dish.id} />
                </div>
             </div>         
         );
        
   } else 
   return(<div></div>)
   
}


export default DishDetail;