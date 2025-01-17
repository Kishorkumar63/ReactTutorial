import React, { useContext } from 'react'
import Child from './Child'
import { GrandContext } from './Grandparent'

const Parent = () => {
  const getData=useContext(GrandContext)
  return (
    <div className='boxx'>
      <h3>Parent Componetn</h3>
      <p>{getData}</p>

      <Child/>
    </div>
  )
}

export default Parent
