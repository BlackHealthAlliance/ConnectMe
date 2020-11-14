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
            Please render me on UI beautifully!
        </div>
}