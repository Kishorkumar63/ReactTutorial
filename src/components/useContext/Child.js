import React, { useContext } from 'react'
import { GrandContext } from './Grandparent'

const Child = () => {
  const getData=useContext(GrandContext)
  return (
    <div className='boxx'>
      <h3>Child Component</h3>

      <p>{getData}</p>
    </div>
  )
}

export default Child
