import React from "react";
import './MovieCards.css';

const MovieCardList = (props) =>{
    return(
                <div className="MovieCard1">
                                <div className="MovieCardimg">
                                    <img src={props.img} alt="/"/>
                                </div>
                                <div className="MovieCardText">
                                    <h2>{props.title}</h2>
                                </div>
                                <div className="buttons">
                                    <p>Унших</p>
                                </div>
                </div>
        
    )
}

export default MovieCardList; 

