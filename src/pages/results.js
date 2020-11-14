import React from "react"

import { connect } from "react-redux"

function Results({searchValues}) {

  console.log(searchValues)
  return (
    <div >
    </div>
  )
}

export default connect(state => ({searchValues: state.app.searchValues }), null)(Results);