import React from 'react';
import spotlightIcon from "../assets/spotlight-4.png";

const { Component } = require("react");

class Organization extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render = () => 
        <div className="organization">
            <label className="organizationName" htmlFor="name">{this.props.name}</label>
            { this.props.isSpotlight ? <img className="spotlightImgRight" src={spotlightIcon} alt="spotlight"/> : null }
            <br /><br />
            <label className="organizationInfo" htmlFor="services">{this.props.services.join(", ")}</label>
            <br /><br />
            <label className="organizationInfo">Location: </label>
            <label className="organizationInfo" htmlFor="location">{this.props.location}</label>
            <br />
            <label className="organizationInfo">Email: </label>
            <label className="organizationInfo" htmlFor="email">{this.props.email}</label>
            <br />
            <label className="organizationInfo">Phone: </label>
            <label className="organizationInfo" htmlFor="phone">{this.props.phone}</label>
            <a href="{this.props.website}" target="_blank">
                <input className="organizationWebsite" type="button" value="take me to their site" />
            </a>
        </div>
}

export default Organization;