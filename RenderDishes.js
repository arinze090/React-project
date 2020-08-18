import React from 'react';
import { Media } from 'reactstrap';


const RenderDishes = (props) => {

    console.log("Render Comments", props.dish);
    if (props.dish != null) {
        return (
            <div>
                <div left href="#">
                    <Media object data-src={props.dish.image} alt={props.dish.name} />
                </div>
                <div body>
                    <Media heading>
                        {props.dish.name}
                    </Media>
                </div>
            </div>
        );
    } else {
        return <div></div>;
    };
};

export default RenderDishes;