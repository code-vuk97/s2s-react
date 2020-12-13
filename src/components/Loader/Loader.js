import React from 'react'

const Loader = ({message}) => {
  return (
    <div className="loader">
      <div className="loading"></div>
      <h4>{message}</h4>
    </div>
  )
}

export default Loader
