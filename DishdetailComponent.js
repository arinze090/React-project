import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';


class DishdetailComponent extends Component {

    componentDidMount() {
        console.log('Dishdetail Component componentDidMount is invoked')
    }

    componentDidUpdate() {
        console.log('Dishdetail Component componentDidUpdate is invoked')
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    renderComments(comments) {
        if (comments != null)
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="unstyled-list">
                        {comments.map((Comment) => {
                            return (
                                <li key={comments.id}>
                                    <p>{comments.author}</p>
                                    <p>--{comments.author} , </p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            );
        else
            return (
                <div></div>
            );
    }

    render() {
        console.log('Dishdetail Component render is invoked')

        if (this.props.dish != null)
            return (
                <div class="container">
                    <div className="row">
                        {this.renderDish(this.props.dish)}
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            )
        else
            return (
                <div></div>
            )
    }
}

export default DishdetailComponent
