import React, { useState, useEffect } from "react";

import { connect } from "react-redux"
import Organization from "../components/organization"
import spotlightIcon from "../assets/spotlight-4.png";
import { searchOrganizations } from "../utils/functions";
import { navigate } from "gatsby";

function Results({searchValues}) {

  const [searchResults, setSearchResults] = useState({});
  const [showEverything, setShowEverything] = useState(false);

  useEffect(() => {
    setShowEverything(false);
    setSearchResults(searchOrganizations(searchValues));
  }, [searchValues])

  const loadEverything = () => {
    setSearchResults(searchOrganizations({}));
    setShowEverything(true);
  }

  const returnToSearch = () => {
    setShowEverything(false);
    setSearchResults(searchOrganizations({}));
    navigate("/search/");
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
        <table>
          <th>
            <img className="spotlightImg" src={spotlightIcon} alt="spotlight"/>
          </th>
        <th>
        <label className="organizationResultDescription">These are our top recommendations</label>
          </th>
        </table>
        <div className="organizationContainer">
          { 
            createOrganizationCells()
          }
        </div>
        <br />
        <br />
        <center>
          {!showEverything && <h2>Didn't find what you were looking for?</h2>}
          {!showEverything && <button className="nextButton" onClick={() => loadEverything()}>Browse all organizations</button>}
          <button className="nextButton" onClick={() => returnToSearch()}>Try the search again</button>
        </center>
     </div>
  )
}

export default connect(state => ({searchValues: state.app.searchValues }), null)(Results);