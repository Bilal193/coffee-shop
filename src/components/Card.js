import React from 'react';
import './Card.css';

function Card(props) {
    return (
        <div className="card card-bgb" >
            <img src={props.pic} class="card-img-top" alt="..."/>
                <div className="card-body">
                    <div className="city">
                        <div className="city-name text-capitalize">{props.city}</div>
                        
                    <div className="city-bg"> 
                        <img src={props.citybg} height='65rem' alt="" />
                    </div>
                    </div>
                    <div className="container card-text-bg"> <p className="card-text">{props.text}</p></div>
                </div>
        </div>


    )
}
export default Card;