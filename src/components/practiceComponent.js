import React from 'react'
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';


    function Content({dish}){
        return (
            <Card >
                <CardImg width='100%' src={this.props.dish.image} alt={this.props.dish.name}/>
                <CardBody>
                <CardTitle >{this.props.dish.name}</CardTitle>
                <CardText>{this.props.dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

       
        if (this.props.dish !=null){
            const comment=this.props.dish.comments.map((comment)=>{
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
                    <div className='col-12 col-md-5 ml-1'>
                        < RenderDish dish={dish} />
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

export default Content




