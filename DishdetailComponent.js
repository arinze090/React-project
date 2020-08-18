import React, { Component } from 'react';
import { Card, CardImg, CardBody, Label, CardText, CardTitle, Breadcrumb, BreadcrumbItem, Row, Col, Button, ModalBody, Modal, ModalHeader } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

function RenderDish({ dish }) {
    return (
        <div>
            <FadeTransform in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        {/* {dish.designation ? <CardSubtitle>{dish.designation}</CardSubtitle> : null} */}
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        </div>
    )
}

function RenderComments({ comments, postComment, dishId }) {
    if (comments != null)
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="unstyled-list">
                    <Stagger in>
                        {comments.map((comment) => {
                            return (
                                <Fade in>
                                    <li key={comments.id}>
                                        <p>{comments.author}, {new (Intl.Date)}</p>
                                    </li>
                                </Fade>
                            )
                        })}
                    </Stagger>
                </ul>
                <CommentForm dishId={dishId} postComment={postComment} />
            </div>
        );
    else
        return (
            <div></div>
        );
}

class CommentForm extends Component {

    constructor(props) {
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            isNavalOpen: false,
            isModalOpen: false
        }
    }


    toggleModal() {
        this.ListeningStateChangedEvent({
            isModalOpen: this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment)
        // console.log("Current State is: " + JSON.stringify(values))
        // alert("Current State is: " + JSON.stringify(values))
        // event.preventDefault();

    }

    render() {
        return (
            <div>
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span>Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}></Modal>
                <ModalHeader toggle={this.toggleModal}>Submit</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit}>
                        <Row className="form-group">
                            <Col>
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" id="rating">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                                <Label htmlFor="author">Rating</Label>
                                <Control.select model=".author" id="author" placeholder="Your Name" className="author"
                                    validators={{
                                        minLength: minLength(3),
                                        maxLength: maxLength(15)
                                    }} />
                                <Errors
                                    className="text-danger" model=".author" show="touched"
                                    message={{
                                        minLength: 'Must be greater than 3 characters',
                                        maxLength: 'Must be <= 15 characters'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                                <Label htmlFor="comment">Comment</Label>
                                <Control.select model=".comment" id="comment" placeholder="Your Name"
                                    className="form" rows="6"
                                />
                            </Col>
                        </Row>
                        <Button type="submit" className="bg-primary">Submit</Button>
                    </LocalForm>
                </ModalBody>
            </div>
        )
    }
}

// class DishdetailComponent extends Component {

//     constructor(props) {
//         super(props);
//     }

//     componentDidMount() {
//         console.log('Dishdetail Component componentDidMount is invoked')
//     }

//     componentDidUpdate() {
//         console.log('Dishdetail Component componentDidUpdate is invoked')
//     }


//     renderDish(dish) {
//         if (dish != null) {
//             return (
//                 <div className="col-12 col-md-5 m-1">
//                     <Card>
//                         <CardImg width="100%" src={dish.image} alt={dish.name} />
//                         <CardBody>
//                             <CardTitle>{dish.name}</CardTitle>
//                             <CardText>{dish.description}</CardText>
//                         </CardBody>
//                     </Card>
//                 </div>
//             )
//         } else {
//             return (
//                 <div></div>
//             )
//         }
//     }

//     renderComments(comments) {
//         if (comments != null)
//             return (
//                 <div className="col-12 col-md-5 m-1">
//                     <h4>Comments</h4>
//                     <ul className="unstyled-list">
//                         {comments.map((comment) => {
//                             return (
//                                 <li key={comments.id}>
//                                     <p>{comments.author}</p>
//                                 </li>
//                             )
//                         })}
//                     </ul>
//                 </div>
//             );
//         else
//             return (
//                 <div></div>
//             );
//     }
// 
//         if (props.dish != null)
//         return ()
// }
// render() {
//     console.log('Dishdetail Component render is invoked')

const Dishdetail = (props) => {
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    }
    else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        )
    }
    if (props.dish != null)
        return (
            <div class="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='./menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="row">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                    <div className="row">
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.comments}
                            postComment={this.props.addComment}
                            dishId={this.props.dish.id} />
                    </div>
                    {/* {this.renderDish(this.props.dish)}
                        {this.renderComments(this.props.dish.comments)} */}
                </div>
            </div>
        )
    else
        return (
            <div></div>
        )
}


export default Dishdetail;
