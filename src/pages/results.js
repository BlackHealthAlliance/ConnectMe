import React from "react"

import { connect } from "react-redux"
import Organization from "../components/organization"

function Results({searchValues}) {

  console.log(searchValues)
  return (
    <div>
        <table className="table table-striped table-bordered">
            <tbody><Organization /></tbody>
        </table>
    </div>
  )
}

export default connect(state => ({searchValues: state.app.searchValues }), null)(Results);