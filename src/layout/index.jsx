import React from 'react'
import { LayoutConteiner } from './styles'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <LayoutConteiner>
        <Outlet />
        <div>
          <nav>
            <ul>
              <Link to='/' style={{margin: '20px 25px', fontWeight: 600}}>Home</Link>
              <Link to='/maps' style={{fontWeight: 600}}>Maps</Link>
            </ul>
          </nav>
        </div>

    </LayoutConteiner>
  )
}

export default Layout