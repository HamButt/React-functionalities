import React from 'react'
import Button from '../components/Button'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'
import Footer from '../components/footer'
import {useThemeContext} from "./ContextCode.js"
import Functionalities from '../components/functionalities'

function Home() {
   const {state} = useThemeContext();
  
  return (
    <div>
      <Header/>
        <div className={state.theme.mainTheme} style={{display: "flex", justifyContent: "space-between", flexDirection: "row"}}>
          <Sidebar/>
          <Main/>
          <Button/>
        </div>
      <Footer/>
      <Functionalities/>
    </div>

  )
}

export default Home