import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>TSF BANK</h1>
      <div className='navItems'>
        <NavLink exact activeClassName='navActive' className='navLink' to='/'>
          Home
        </NavLink>
        <NavLink
          exact
          activeClassName='navActive'
          className='navLink'
          to='/customers'
        >
          Customers
        </NavLink>
        <NavLink
          exact
          activeClassName='navActive'
          className='navLink'
          to='/transactions'
        >
          Transactions
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
