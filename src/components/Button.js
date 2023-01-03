import React from 'react'
import './Buttons.css'
import {motion} from 'framer-motion' 
import {useThemeContext} from "../Pages/ContextCode.js"


function Button() {

    const {dispatch,state} = useThemeContext()

    const changeTheme = () =>{
      dispatch("THEME", {
        sideBarColor: state.theme.sideBarColor === "color" ? "colorless" : "color" ,
        headerColor: state.theme.headerColor === "light" ? "dark" : "light" ,
        formColor: state.theme.formColor === "bright" ? "lessBright" : "bright" ,
        mainTheme: state.theme.mainTheme === "mainLight" ? "mainDark" : "mainLight", 
        footerColor: state.theme.footerColor === "footerLight" ? "footerDark" : "footerLight",
      })
      dispatch("HEADER_LABEL", {
        headerLabel: state.headerLabel === "capitalizeCase" ? "upperCase" : "capitalizeCase"
      })
    }
  
  
  return (
        <div>
            <div className="buttons">
              <motion.button whileTap={{scale: 0.9}} onClick={changeTheme} className='btn'>Change theme</motion.button>
            </div>
        </div>
        )
}


export default Button