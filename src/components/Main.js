import React, { useState } from 'react'
import './Main.css'
import {motion} from 'framer-motion'
import { useThemeContext } from '../Pages/ContextCode'

function Main() {

    const {state} = useThemeContext();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showButton, setShowButton] = useState('show')
    const [showPassword, setShowPassword] = useState(false)
    const [data, setData] = useState([])
    const [image, setImage] = useState('notScale')
    const [innerContainer, setInnerContainer] = useState('hideInnerContainer')
    const [bigImage, setBigImage] = useState('makeImageShort')
    const [closeButton, setCloseButton] = useState('hideCloseButton')
    const submitButton = React.useRef();
    

    if(password.length >= 6){
      submitButton.current.style.backgroundColor = "green"
    }
    if(password.length === 3){
      submitButton.current.style.backgroundColor = "red"
    }

    const submitValue =() =>{
      
      if(!email || !password){
        alert('Invalid credentials')
      }else if(password.length <= 6){
        alert('Password should be greater than 6 characters')
        setPassword('')
      }else{

        let id = Date.now()
        setData([{id, email, password}])
        setEmail('')
        setPassword('')
      }
    }
    
    const passwordVisible = (e) =>{
      e.preventDefault()
      setShowButton(curr => curr === "show" ? "hide" : "show")
      setShowPassword(!showPassword)
    }

    const deleteList = (id) =>{
      
      setData(data.filter(item => item.id !== id))
    }

    const processImage = () =>{
      setImage(curr => curr === "notScale" ? "scale" : "notScale")
      setInnerContainer(curr => curr === "hideInnerContainer" ? "innerContainer" : "hideInnerContainer")
    }

    const imageFunction = () =>{
      setImage(curr => curr === "scale" ? "notScale" : "scale")
      setInnerContainer(curr => curr === "innerContainer" ? "hideInnerContainer" : "innerContainer")
    }
    
    const makeImageBig = () =>{
      setBigImage(curr => curr === "makeImageShort" ? "makeImageBig" : "makeImageShort")
      setCloseButton(curr => curr === "hideCloseButton" ? "showCloseButton" : "hideCloseButton")
    }

    const closeImage = () =>{
      setBigImage(curr => curr === "makeImageBig" ? "notScale" : "makeImageBig")
      setCloseButton(curr => curr === "showCloseButton" ? "hideCloseButton" : "showCloseButton")
    }

    
  return (

    <>
        <div className='main'>
        
          <div onBlur={imageFunction} onClick={processImage} className={"mainContainer " + image}>

              <div className="container" style={{marginBottom: "2rem"}}>
                  <img className={bigImage} src="https://media-exp1.licdn.com/dms/image/D4D03AQEeEhwdin2VNQ/profile-displayphoto-shrink_200_200/0/1667209402403?e=1674086400&v=beta&t=fnJpEEO8r221L0nhq_9rPKTOwky22IL-_BECO9shk8A" alt="Profile" />
                  <div className={innerContainer} style={{backgroundColor: "white"}}>
                    <button onClick={makeImageBig} className='bigImageProcessButton'>Click to see image big</button>
                  </div>
              </div>

              <button className={'closeButton ' + closeButton} onClick={closeImage}>X</button>
          </div>


          <div className="happen" style={{position: "absolute"}}>
                <button type='button' id={showButton} onClick={passwordVisible} style={{position: "relative", top: "6rem", left: "23rem"}}>{showButton}</button>
          </div>

          <form className={'form ' + state.theme.formColor}>
              <input value={email}  className='input' type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
              <input value={password}  id="password" className='input' type={showPassword ? "text" : "password"} placeholder='*****' onChange={(e) => setPassword(e.target.value)}  />
              <motion.button ref={submitButton} type="button" whileTap={{scale: 0.9}} className='submitBtn' onClick={submitValue}>Submit</motion.button>
              
              <div className="lists">

                {data.length === 0 ? "No data To display" :
                  data.map((items) =>{
                  return (
                    <>  
                      <p className='listItems' key={items.id}>Email: {items.email} Password: {items.password}</p>
                      <motion.button className='deleteBtn' type="button" whileTap={{scale: 0.9}} onClick={() => deleteList(items.id)}>X </motion.button>
                    </>
                  )})
                }
              </div>
              
          </form>

        </div>

    </>

  )
}

export default Main