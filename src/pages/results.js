import React, { useState, useEffect } from "react";

import { connect } from "react-redux"
import Organization from "../components/organization"
import spotlightIcon from "../assets/spotlight-4.png";
import { searchOrganizations } from "../utils/functions";

function Results({searchValues}) {

  const [searchResults, setSearchResults] = useState({});

  useEffect(() => {
    setSearchResults(searchOrganizations(searchValues));
  }, [searchValues])

  const loadEverything = () => {
    setSearchResults(searchOrganizations({}))
  }

  const createOrganizationCells = () => {

    if (Object.keys(searchResults).length < 1) {
      loadEverything();
    }

    return Object.keys(searchResults).map(
      (key) => {
        const nextOrg = searchResults[key]
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
        <br />
        <br />
        <center>
          <h2>Didn't find what you were looking for?</h2>
          <button className="nextButton" onClick={loadEverything}>Browse all organizations</button>
        </center>
     </div>
  )
}

export default connect(state => ({searchValues: state.app.searchValues }), null)(Results);