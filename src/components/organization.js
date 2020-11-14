import React from 'react';

const { Component } = require("react");

class Organization extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "name": "Awesome Metal Health Org",
            "city": "Toronto"
        };
    }

    render = () => 
        <div>
            <label for="name">{this.state.name}</label>
            <br />
            <label for="city">{this.state.city}</label>
        </div>
}

export default Organization;