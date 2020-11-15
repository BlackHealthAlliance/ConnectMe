import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { BsStarFill } from 'react-icons/bs';
import { GoLocation } from "react-icons/go";
import spotlightIcon from "../assets/spotlight-4.png";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
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
            <GoLocation className="organizationContactIcon"/>
            <label className="organizationInfo" htmlFor="location">{this.props.location}</label>
            <br />
            <HiOutlineMail className="organizationContactIcon"/>
            <label className="organizationInfo" htmlFor="email">{this.props.email}</label>
            <br />
            <FiPhone className="organizationContactIcon"/>
            <label className="organizationInfo" htmlFor="phone">{this.props.phone}</label>
            <a href="{this.props.website}" target="_blank">
                <input className="organizationWebsite" type="button" value="take me to their site" />
            </a>
        </div>
        // <Card style={{ backgroundColor: "#FAEDE7", width: "400px" }}>
        //     <CardContent>
        //         <label htmlFor="name">{this.props.name}</label>
        //         <br />
        //         { this.props.isSpotlight ? <BsStarFill style={{color: "gold"}}/> : null }
        //         <br />
        //         <label htmlFor="services">{this.props.services.join(", ")}</label>
        //         <br />
        //         <label htmlFor="email">{this.props.email}</label>
        //         <br />
        //         <label htmlFor="phone">{this.props.phone}</label>
        //         <br />
        //         <button htmlFor="website">{this.props.website}</button>
        //     </CardContent>
        // </Card>
}

export default Organization;