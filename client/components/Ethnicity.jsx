import React from 'react'

let nzEthnicities = [
  {ethnicity: "New Zealand European", 2001: 2696724, 2006: 2381076, 2013: 2727009}
  // {ethnicity: "New Zealand European", 2001: 2696724, 2006: 2381076, 2013: 2727009 },
]

const Circle = () => {

  return (
    <svg height="400" width="400">
    <circle cx="50" cy="50" r="40" stroke='#33BDFF' stroke-width="3" fill="#7DD2FB" />
  </svg>
  )
}



export default Circle