import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { BsStarFill } from 'react-icons/bs';

class Organization extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render = () => 
        <Card style={{ backgroundColor: "#FAEDE7", width: "400px" }}>
            <CardContent>
                <label htmlFor="name">{this.props.name}</label>
                <br />
                { this.props.isSpotlight ? <BsStarFill style={{color: "gold"}}/> : null }
                <br />
                <label htmlFor="services">{this.props.services.join(", ")}</label>
                <br />
                <label htmlFor="email">{this.props.email}</label>
                <br />
                <label htmlFor="phone">{this.props.phone}</label>
                <br />
                <button htmlFor="website">{this.props.website}</button>
            </CardContent>
        </Card>
}

export default Organization;