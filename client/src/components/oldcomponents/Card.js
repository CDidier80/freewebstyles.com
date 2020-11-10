import React from 'react'
// rest throws in the rest of the props. Not a reserved word, but called rest by convention
export default ({ children, ...rest }) => {
  return (
    <div className="card" {...rest}>
      {children}
    </div>
  )
}
