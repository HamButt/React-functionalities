import React from 'react'
import {Link} from 'react-router-dom'
import './Sidebar.css'
import {useThemeContext} from "../Pages/ContextCode.js"


function Sidebar() {

    const {state} = useThemeContext();

  return (


      <div  className={'sidebar '+ state.theme.sideBarColor}>
          <div className="data">
            <a className='link' href="/about">About
            </a>
            <Link className='link' to='/networks'>Network</Link>
          </div>
      </div>
  )
}

export default Sidebar