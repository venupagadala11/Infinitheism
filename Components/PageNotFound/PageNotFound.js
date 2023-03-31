import React from 'react'
import { useLocation } from 'react-router-dom'

const PageNotFound = () => {
    const location =useLocation()
  return (
    <div>sorry  your page {location.pathname} doesn't exists</div>
  )
}

export default PageNotFound