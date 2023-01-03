import React from 'react'

import {useThemeContext} from "../Pages/ContextCode.js"
import './footer.css'

function Footer() {
    const {state} = useThemeContext()
  return (

    <>
      <div className={'footer ' + state.theme.footerColor }>footer</div>
    </>
    
  )
}

export default Footer