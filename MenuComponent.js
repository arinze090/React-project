import React from 'react';
import { Card, CardImg, CardImgOverlay, Breadcrumb, BreadcrumbItem, CardTitle, Media, RenderMenuItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import RenderDishes from './RenderDishes';
import { Loading } from './LoadingComponent';
import DishDetail from './DishdetailComponent';
import { baseUrl } from '../shared/baseUrl';


// function RenderMenuItem({ dish, onClick }) {
//     return (
//         <Card>
//             <Link to={`/menu/${dish.id}`} >
//                  <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
//                 <CardImgOverlay body className="ml-5">
//                         <CardTitle>{dish.name}</CardTitle>
//                 </CardImgOverlay>
//             </Link>
//         </Card>
//     );
// }

function Menu(props) {

    const dishes = props.dishes.map((dish) => {
        return (
            <Media tag="li" key={dish.id}>
                <RenderDishes dish={dish} />
                <Card>
                    <Link to={`/menu/${dish.id}`} >
                        <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                        <CardImgOverlay body className="ml-5">
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Link>
                </Card>
            // </Media>
        );
    });

    // return (
    //     <Card>
    //         <Link to={`/menu/${dishes.id}`} >
    //             <CardImg width="100%" src={dishes.image} alt={dishes.name} />
    //             <CardImgOverlay body className="ml-5">
    //                 <CardTitle>{dishes.name}</CardTitle>
    //             </CardImgOverlay>
    //         </Link>
    //     </Card>
    // );


    const Menu = props => {
        const menu = props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    {/* <RenderMenuItem dish={dish} /> */}
                </div>
            );
        });

        if (props.dishes.isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            )
        }
        else if (props.dishes.errMess) {
            return (
                <div className="container">
                    <div className="row">
                        <h4>{props.dishes.errMess}</h4>
                    </div>
                </div>
            )
        }
        else
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Menu</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                    <div className="row">
                        {dishes}
                    </div>
                    <DishDetail />
                </div>
            )

    }
};


export default Menu;
