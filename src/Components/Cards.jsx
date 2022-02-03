import React from 'react';
import './cards.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cards = (props) => {
    return (
        <div className="box">
            <div className="icon"><img src={props.imgUrl}  alt="" /></div>
            <div className="text py-3 text-center">{props.text}</div>
        </div>
    )
}

export default Cards;