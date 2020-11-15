import React from 'react';

const { Component } = require("react");

class Organization extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render = () => 
        <div className="organization">
            <label htmlFor="name">{this.props.name}</label>
            <br />
            { this.props.isSpotlight ? <img src ="../../static/favicon.ico"/> : null }
            <br />
            <label htmlFor="services">{this.props.services.join(", ")}</label>
            <br />
            <label htmlFor="email">{this.props.email}</label>
            <br />
            <label htmlFor="phone">{this.props.phone}</label>
            <br />
            <button htmlFor="website">{this.props.website}</button>
        </div>
}

export default Organization;