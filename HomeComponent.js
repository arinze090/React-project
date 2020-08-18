import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, RenderCard } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { FadeTransform } from 'react-animation-components';
import { baseUrl } from '../shared/baseUrl'
// import { Card } from './RenderCard';

function renderCard({ item, isLoading, errMess }) {

    if (isLoading) {
        return (
            <Loading />
        );
    }
    else if (errMess) {
        return (
            <h4>{errMess}</h4>
        );
    }
    else
        return (
            <FadeTransform in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg src={baseUrl + item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        );
}
// export default RenderCard

function Home (props, item, isLoading, errMess) {
    // return (
    // <FadeTransform in
    //     transformProps={{
    //         exitTransform: 'scale(0.5) translateY(-50%)'
    //     }}>
    //     <Card>
    //         <CardImg src={baseUrl + item.image} alt={item.name} />
    //         <CardBody>
    //             <CardTitle>{item.name}</CardTitle>
    //             {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
    //             <CardText>{item.description}</CardText>
    //         </CardBody>
    //     </Card>
    // </FadeTransform>
    // )
        
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <Card item={props.dish}
                        isLoading={props.dishesLoading}
                        errMess={props.dishesErrMess}
                    />
                </div>
                <div className="col-12 col-md m-1">
                    <Card item={props.promotion}
                        isLoading={props.promosLoading}
                        errMess={props.promosErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <Card item={props.leader}
                    isLoading={props.leadersLoading}
                    errMess={props.leadersErrMess} />
                </div>
            </div>
        </div>
    );
}

export default Home;