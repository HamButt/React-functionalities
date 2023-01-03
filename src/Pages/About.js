import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Button from '../components/Button'
import Main from '../components/Main'
import Footer from '../components/footer';
import {useThemeContext} from "./ContextCode.js";

function About() {

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
    </div>
  )
}

export default About