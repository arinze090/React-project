import React, { Component } from 'react';
import { Card, CardText, CardTitle, CardBody, CardSubtitle, CardImg } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';



export class renderCard extends Component {
    render(item) {
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
        )
    }
}

export default renderCard

// import React from 'react';

// function RenderCard({ item }) {

//     return (
//         <div>
//             <Card>
//                 <CardImg src={item.image} alt={item.name} />
//                 <CardBody>
//                     <CardTitle>{item.name}</CardTitle>
//                     {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
//                     <CardText>{item.description}</CardText>
//                 </CardBody>
//             </Card>
//         </div>
//     );

// }

// const Card = ({ item, isLoading, errMess }) => {
//     if (isLoading) {
//         return (
//             <Loading />
//         );
//     }
//     else if (errMess) {
//         return (
//             <h4>{errMess}</h4>
//         );
//     }
//     else
//         return (
//             <FadeTransform in
//                 transformProps={{
//                     exitTransform: 'scale(0.5) translateY(-50%)'
//                 }}>
//                 <Card>
//                     <CardImg src={baseUrl + item.image} alt={item.name} />
//                     <CardBody>
//                         <CardTitle>{item.name}</CardTitle>
//                         {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
//                         <CardText>{item.description}</CardText>
//                     </CardBody>
//                 </Card>
//             </FadeTransform>
//         );
// }
// export default Card;