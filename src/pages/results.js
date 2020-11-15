import React from "react"
import Container from '@material-ui/core/Container';

import { connect } from "react-redux"
import Organization from "../components/organization"
import spotlightIcon from "../assets/spotlight-4.png";

function Results({searchValues}) {

  const createOrganizationCells = () => {
    return Object.keys(searchValues).map(
      (key) => {
        const nextOrg = searchValues[key]
        const address = nextOrg.address
        const contact = nextOrg.contact
        return <Organization key={key} name={nextOrg.name} 
                            isSpotlight={nextOrg.spotlight}
                            services={nextOrg.services}
                            location={address.streetAddress.concat(", ", address.city, ", ", address.province)}
                            email={contact.email}
                            phone={contact.phone}
                            website={contact.web} />
      }
    )};

  return (
    <div className="organizationResult">
        <label className="organizationResultTitle">Here are the resources that best meet your specific needs:</label>
        <br />
        <img className="spotlightImg" src={spotlightIcon} alt="spotlight"/>
        <label className="organizationResultDescription">These are our top recommendations</label>
        <div className="organizationContainer">
            { 
                createOrganizationCells()
            }
        </div>
     </div>
    // <Container class="organizationContainer">
    //   { 
    //       createOrganizationCells()
    //   }
    //  </Container>
  )
}

export default connect(state => ({searchValues: state.app.searchValues }), null)(Results);