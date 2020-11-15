import React from "react"

import { connect } from "react-redux"
import Organization from "../components/organization"
import spotlightIcon from "../assets/spotlight-4.png";

function Results({searchValues}) {

  const createOrganizationCells = () => {
    return Object.keys(searchValues).map(
      (key) => {
        const nextOrg = searchValues[key]
        return <Organization key={key} name={nextOrg.name} 
                            isSpotlight={nextOrg.spotlight}
                            services={nextOrg.services}
                            location={nextOrg.location}
                            email={nextOrg.contact.email}
                            phone={nextOrg.contact.phone}
                            website={nextOrg.contact.web} />
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
  )
}

export default connect(state => ({searchValues: state.app.searchValues }), null)(Results);