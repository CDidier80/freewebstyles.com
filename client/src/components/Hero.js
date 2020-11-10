import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div className="hero flex-col">
      <div className="hero-message">
        <h1>Tell Us About Your Journey</h1>
        <p>Travelling is so much fun, tell your friends all about it!</p>
      </div>
      <div className="hero-action">
        <Link to="/register">Get Started</Link>
      </div>
    </div>
  )
}
