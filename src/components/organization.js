import React from 'react';
import spotlightIcon from "../assets/spotlight-4.png";

const { Component } = require("react");

class Organization extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render = () => 
        <div className="organization">
            <label htmlFor="name">{this.props.name}</label>
            <br />
            { this.props.isSpotlight ? <img className="spotlightImg" src={spotlightIcon} alt="Pathways to Care"/> : null }
            <br />
            <label htmlFor="services">{this.props.services.join(", ")}</label>
            <br />
            <label htmlFor="email">{this.props.email}</label>
            <br />
            <label htmlFor="phone">{this.props.phone}</label>
            <br />
            <a href="{this.props.website}" target="_blank">
                <input type="button" value="take me to their site" />
            </a>
        </div>
}

export default Organization;