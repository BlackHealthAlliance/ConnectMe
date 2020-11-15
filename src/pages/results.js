import React from "react"

import { connect } from "react-redux"
import Organization from "../components/organization"

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
    <div>
        <div className="organizationContainer">
            { 
                createOrganizationCells()
            }
        </div>
     </div>
  )
}

export default connect(state => ({searchValues: state.app.searchValues }), null)(Results);