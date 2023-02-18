import React,{Component} from 'react'
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle,BreadcrumbItem,Breadcrumb,Button,Modal,Label,Row,Col,ModalHeader,ModalFooter,ModalBody} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from 'react-dom';
import {Link} from 'react-router-dom'
import { Error,Control,LocalForm } from 'react-redux-form';

// const required = (val) => val && val.lenght;
// const maxLength = (len) => (val) => !(val) || (val.length <= len);
// const minLength = (len) =>(val) => (val) && (val.length >= len);


class Detail extends Component{
    constructor(props){
        super(props)
        this.state = {
            // isopen : false,
        }
        // this.toggle=this.toggle.bind(this)
        // this.handlesubmition=this.handlesubmition.bind(this)
    }

    // toggle=()=>{
    //     this.setState({isopen:!this.state.isopen})
    // }

    // handlesubmition=(val)=>{
    //     console.log(JSON.stringify(val))
    //     alert(JSON.stringify(val))
    //     this.toggle()

    // }

    render(){
        
        // const CommentForm=()=>{
        //     return (
        //         <>
        //             <Button color="white" size="lg" active onClick={this.toggle} ><span><i className="fa fa-pencil"></i></span>  submit comment</Button>
        //                 <Modal isOpen={this.state.isopen}  >
        //                     <ModalHeader toggle={this.toggle}>submit comment</ModalHeader>
        //                         <ModalBody>
        //                             <LocalForm onSubmit={this.handlesubmition} >
        //                             <Label htmlFor="rating">Rating</Label>
        //                             <Row className="form-group">
                                                
        //                                         <Col md={12}>
        //                                             <Control.input type='number' model=".rating" id="rating" name="rating" min='0' max='5' placeholder='Rating' />                                                   
        //                                         </Col>
        //                             </Row>
        //                             <Label htmlFor="name">Your Name</Label>
        //                             <Row className="form-group">
                                                
        //                                         <Col md={12}>
        //                                             <Control.text model=".name" id="name" name="name" placeholder='Your Name'
        //                                             show="touched"
        //                                             className="form-control"
        //                                             validators={{
        //                                                 required, minLength: minLength(3), maxLength: maxLength(15)
        //                                             }}
        //                                             />
        //                                             <Error
        //                                             className="text-danger"
        //                                             model=".name"
        //                                             show="touched"
        //                                             messages={{
                                                        
        //                                                 required: 'Required',
        //                                                 minLength: 'Must be greater than 2 numbers',
        //                                                 maxLength: 'Must be 15 numbers or less',
        //                                                 }}/>
                                                    
        //                                         </Col>
        //                                     </Row>
        //                                     <Label htmlFor="textarea" >Comment</Label>
        //                                     <Row className="form-group">
                                                
        //                                         <Col md={12}>
        //                                             <Control.textarea model=".textarea" id="textarea" name="textarea"  rows='7'/>
                                                    
        //                                         </Col>
        //                                     </Row>
        //                                     <Label htmlFor="lastname" ></Label>
        //                                     <Row className="form-group">
        //                                         <Col md={{size:10, offset: 0}}>
        //                                             <Button type="submit" color="primary">
        //                                             submit
        //                                             </Button>
        //                                         </Col>
        //                                     </Row>
        //                             </LocalForm>
        //                         </ModalBody>
        //                 </Modal>
               
        //        </>
        //     )
        // }
   
   

        if (this.props.dish !=null){
            const comment = this.props.comments.map((comment)=>{
                return( 
                    <div class="container">
                        <div>                        
                            <h6>{comment.comment}</h6><br></br>
                            <h6>--{comment.author}, {new Intl.DateTimeFormat('en-US',{year: 'numeric',  month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</h6><br></br>                       
                        </div>
                    </div> 
                  )                 
              })

        return(
            <div class="container">             
                <div className='row'>
                    {/* <Breadcrumb>                
                        <BreadcrumbItem ><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem>{this.props.dish.name}</BreadcrumbItem>
                    </Breadcrumb> */}
                        <div className='col-12 col-md-5 ml-1'>
                            <Card >
                                    <CardImg width='100%' src={this.props.dish.image} alt={this.props.dish.name}/>
                                    <CardBody>
                                    <CardTitle>{this.props.dish.name}</CardTitle>
                                    <CardText>{this.props.dish.description}</CardText>
                                    </CardBody>
                            </Card>
                        
                        </div>
                        <div className='col-12 col-md-5 ml-3'>
                                <h3>Comments</h3>
                                {comment}
                        </div>
                </div> 
            </div>)
        }

        else{
            return (<div></div>)
        }
    }
}
export default Detail ;