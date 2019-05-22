//The HockeyCard component info
import React from "react";
import "./HockeyCard.css";
// import images from "./images"

const HockeyCard = props => (
	<div class="photoCards" onClick={props.imageOnClick}>
        <div class="img-container">
            <img alt={props.image.replace(".jpg", "")} img src={require("../../images/" + props.image)} />
        </div>
    </div>
);

export default HockeyCard;