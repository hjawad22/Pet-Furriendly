import './Results.css'
import React from "react";
import Card from '../Card/Card'

const Results = ({places}) => {
  return(places.map(place => {
    return (
      <div className='results-container'>
        <Card {...place} />
      </div>
    )
  }))

}

export default Results
