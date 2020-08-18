import React, { Component } from 'react';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Contacts from './Contacts';
import About from './AboutComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment, postFeedback, fetchDishes, fetchComments, fetchPromos, fetchLeaders, fetchFeedback } from '../Redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition, S } from 'react-transition-group';


const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders,
        feedback: state.feedback
    }
}

const mapDispatchToProps = (dispatch) => ({
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    postFeedback: (firstname, lastname, telnum, email, message) => dispatch(postFeedback(firstname, lastname, telnum, email, message)),
    fetchDishes: () => { dispatch(fetchDishes()) },
    resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },
    fetchComments: () => { dispatch(fetchComments()) },
    fetchPromos: () => { dispatch(fetchPromos()) },
    fetchLeaders: () => { dispatch(fetchLeaders()) },
    fetchFeedback: () => { dispatch(fetchFeedback()) }

});

// const DishWithId = ({ match }) => {
//     return (
//         <DishDetail
//             dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
//             comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
//             postComment={this.props.postComment}
//         />
//     )
// }


class Main extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();

    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });

    }
    // onDishSelect(commentId) {
    //     this.setState({ comments: commentId})
    // }

    render() {

        const HomePage = () => {
            return (
                <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errMess}
                    promotions={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                    promosLoading={this.props.promotions.isLoading}
                    promosErrMess={this.props.promotions.errMess}
                    leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
                    leadersLoading={this.props.leaders.isLoading}
                    leadersErrMess={this.props.leaders.errMess} />
            )
        }

        const DishWithId = ({ match }) => {
            return (
                <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errMess}
                    comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                    postComment={this.props.postComment}
                    commentsErrMess={this.props.comments.errMess}

                />
            )
        }

        // const Contact = () => {
        //     return (
        //         <Contact postFeedback={this.props.postFeedback} />
        //     )
        // }

        return (
            <div className="App">
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300} >
                        <Switch>
                            <Route path="/home" component={HomePage} />
                            <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
                            <Route path="/menu/:dishId" component={DishWithId} />
                            <Route path="/contact" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}
                                postFeedback={this.props.postFeedback} />} />
                            <Route path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
                            <Redirect to="/home" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        )
    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));