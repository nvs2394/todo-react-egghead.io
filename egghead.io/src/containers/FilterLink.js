import React from 'react'
import { NavLink } from 'react-router-dom'

const FilterLink = ({filter, children}) => (
  <NavLink
    to={filter}
    activeStyle={{
      fontWeight: 'bold',
      textDecoration: 'none',
      color: 'red'
    }}
  >
    {children}
  </NavLink>
)


export default FilterLink