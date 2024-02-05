import React from 'react'
import PropTypes from 'prop-types'
export const PropsChildren = (props) => {
  return (
    <div>{props.children}</div>
  )
}

PropsChildren.propTypes={
  children:PropTypes.array
}
