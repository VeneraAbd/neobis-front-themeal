import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div>This page doesn't exist. Go to the <Link to="/">Home</Link> page</div>
  )
}

export default NotFoundPage