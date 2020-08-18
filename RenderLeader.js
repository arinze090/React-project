import React from 'react';
import { Media } from 'reactstrap';


const RenderLeader = (props) => {

  console.log("Render Comments", props.leader);
        if (props.leader!=null){
            return (
              <Media>
              <Media left href="#">
                <Media object data-src={props.leader.image} alt={props.leader.name} />
              </Media>
              <Media body>
                <Media heading>
                  {props.leader.name}
                </Media>
                 <h2>{props.leader.designation}</h2>
                 <p>{props.leader.description}</p>
              </Media>
            </Media>
            );
        }else{
            return <div></div>;
        };
};

export default RenderLeader;