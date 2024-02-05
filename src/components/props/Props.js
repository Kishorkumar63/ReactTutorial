import React from 'react'
import PropTypes from 'prop-types'
 export const Props = (props) => {
  return (
    <div>
     <table>
<tr>
    <th>Name :</th>
    <td>{props.name}</td>
</tr>
<tr>
    <th>age :</th>
    <td>{props.age}</td>
</tr>
<tr>
    <th>isMarried:</th>
{/* True or False not print so we use Conditional rendering We DO  */}

    <td>{props.isMarried?"Married":"Not Married"}</td>
</tr>
        
     </table>

    </div>
  )
}

Props.propTypes={
    name:PropTypes.string,
    age:PropTypes.number,
    isMarried:PropTypes.bool
}

Props.defaultProps={
age:"No Name"
}

