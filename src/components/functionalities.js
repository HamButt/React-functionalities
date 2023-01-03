import React from 'react' 
import './functionalities.css'
import { useThemeContext } from '../Pages/ContextCode'
import {AiOutlineClose} from 'react-icons/ai'
import {VscChromeMaximize, VscChromeMinimize} from 'react-icons/vsc'
import {MdOutlineExpandMore} from 'react-icons/md'
import {motion} from 'framer-motion'

function Functionalities() {

    const {state, dispatch} = useThemeContext()
    const [buttonSize, setButtonSize] = React.useState("Regular")
    const [buttonText, setButtonText] = React.useState('Default')
    const [fontSize, setFontSize] = React.useState('')
    const [mountButtonText, setMountButtonText] = React.useState('Mount Me')
    const [showParagraph, setShowParagraph] = React.useState('borderOnParagraph')
    const [toggleButton, setToggleButton] = React.useState('Toggle')
    const [iconSide, setIconSide] = React.useState('floatLeft')
    const sizeOfFont = React.useRef();


    const changeColor = (btnColor, btnText) =>{
        dispatch("COLOR_CHANGE" , {
            status: state.status === "unSuccess" ? btnColor : btnColor
        
        }) 
        setButtonText(btnText)  
    }
    const changeButtonSize = (btnSize, btnText) =>{
        dispatch("CHANGE_BUTTON", {
            sizeStatus : state.sizeStatus === "regularButton" ? btnSize : btnSize 
        })
        setButtonSize(btnText)
    }
    const changeFontSize = () =>{
        setFontSize('')
        sizeOfFont.current.style.fontSize = `${fontSize}px`
    }
    const displayParagraph =() =>{
        setMountButtonText(curr => curr === "Mount Me" ? "Unmount Me" : "Mount Me")
        setShowParagraph(curr => curr === "borderOnParagraph" ? "showParagraph" : "borderOnParagraph")
    }
    const changeTransitions = () =>{

        dispatch("TRANSITIONS_SQUARES", {
            transitionSquare1: state.transitionSquare1 === "firstBox" ? "completeFirstBox" : "firstBox",
            transitionSquare2: state.transitionSquare2 === "secondBox" ? "completeSecondBox" : "secondBox",
            transitionSquare3: state.transitionSquare3 === "thirdBox" ? "completeThirdBox" : "thirdBox",
            transitionSquare4: state.transitionSquare4 === "fourthBox" ? "completeFourthBox" : "fourthBox"
        })
        setToggleButton(curr => curr === "Toggle" ? "unToggle" : "Toggle")
    }
    const browserHandle = (browserStatus) =>{
        dispatch("BROWSER_HANDLE", {
            browserHandleStatus: browserStatus
        })
    }
    const showPanel = () =>{
        dispatch("OPEN_PANEL", {
            panelParagraph : state.panelParagraph === "paragraph" ? "displayParagraph" : "paragraph",
            defaultArrowPosition : state.defaultArrowPosition === "defaultArrowPosition" ? "rotateArrow" : "defaultArrowPosition",
        })
    }
    const showPanel2 = () =>{
        dispatch("OPEN_PANEL2", {
            panelParagraphOne : state.panelParagraphOne === "paragraphOne" ? "displayParagraph2" : "paragraphOne",
            defaultArrowPositionOne : state.defaultArrowPositionOne === "defaultArrowPositionOne" ? "rotateArrow" : "defaultArrowPositionOne",
        })
    }

  return (
    <>

        <div style={{textAlign: "center", width: "100%", display: "flex",alignItems:"center", justifyContent: "space-around", height: "50vh"}}>
            
            <div  className="right" style={{backgroundColor: "#012825", width:"60%", display: "flex",alignItems:"center", justifyContent: "space-around"}}>
                <p style={{display: "flex", alignItems:"center", justifyContent: "space-between"}}
                className={state.status}>{buttonText}</p>

                <form action="" style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                    <p style={{color: "#CFA652"}}><input type="radio" name='a' onClick={() => changeColor('error',"ERROR")}  />Error</p>
                    <p style={{color: "#CFA652"}}><input type="radio" name='a' onClick={() => changeColor('disable', "DISABLE")} />Disable</p>
                    <p style={{color: "#CFA652"}}><input type="radio" name='a' onClick={() => changeColor('success', "SUCCESS")} />Success</p>
                </form>
            
                <p className={state.sizeStatus}>{buttonSize}</p>
                
                <form action="" style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                <p style={{color: "#CFA652"}}> <input name='b' type="radio" onClick={() => changeButtonSize("smallButton", "Small")} />Small</p>
                <p style={{color: "#CFA652"}}> <input name='b' type="radio" onClick={() => changeButtonSize("mediumButton", "Medium")} />Medium</p>
                <p style={{color: "#CFA652"}}> <input name='b' type="radio" onClick={() => changeButtonSize("largeButton", "Large")} />Large</p>
                </form>

            </div>
        </div>

        <div style={{textAlign: "center", padding:"20px"}}>

        <input style={{padding: "10px"}} type="number" placeholder='Set the size of text' value={fontSize} onChange={(e) => setFontSize(e.target.value)}/>
        <button style={{padding: "10px"}} onClick={changeFontSize}>Change Size</button>
        <p ref={sizeOfFont} >Change my pixels</p>
        </div>

        <div style={{textAlign: "center", padding:"20px"}}>

            <button onClick={displayParagraph}>{mountButtonText}</button>
            <p style={{border: "1px solid black", padding:"10px", }} >You finding me here</p>
             <p className={showParagraph} style={{border: "1px solid black", padding:"10px", }}>But I m here</p>
         
        </div>

        <div style={{textAlign: "center", padding: "20px"}} >

        <button onClick={() => changeTransitions("firstBox", "secondBox", "thirdBox", "fourthBox")}>{toggleButton}</button>

            <div style={{width:"100%", height: "100%", display: "flex",alignItems:"flex-start", justifyContent: "space-around", marginTop: "5rem" }}>
            
                <div className={state.transitionSquare1} style={{backgroundColor: "black"}}></div>
                <div className={state.transitionSquare2} style={{backgroundColor: "green"}}></div>
                <div className={state.transitionSquare3} style={{ backgroundColor: "maroon"}}></div>
                <div className={state.transitionSquare4} style={{ backgroundColor: "pink"}}></div>
           
            </div> 

        </div>

        <div className="collapseContainer">

            <div className="container1">
                <button onClick={showPanel} 
                className='collapseBtn'> <MdOutlineExpandMore style={{marginRight: "1rem"}} className={iconSide + " " + state.defaultArrowPosition}/> This is panel header 1</button>
            </div>

            <div className={state.panelParagraph}>
                A dog is a type of domesticated animal. Known for its loyalty and faithfulness
                , it can be found as a welcome guest in many households across the world.
            </div>

            <div className="container2">
                <button onClick={showPanel2}
                    className='collapseBtn'> <MdOutlineExpandMore style={{marginRight: "1rem"}} className={iconSide + " " + state.defaultArrowPositionOne} /> This is panel header 2</button>
            </div>

            <div className={state.panelParagraphOne}>
                A dog is a type of domesticated animal. Known for its loyalty and faithfulness
                , it can be found as a welcome guest in many households across the world.
            </div>

        </div>
        
        <div style={{width: "100%", textAlign: "center"}} className="shiftButton">
            <select onChange={(e) => setIconSide(e.target.value === "floatLeft" ? "floatRight" : "floatLeft")}>
                <option value={iconSide}>Start</option>
                <option value={iconSide}>End</option>
            </select>
        </div>

        <motion.div  className={"browser " + state.browserHandleStatus}>

        <div className="browserButtons">
            <button onClick={() => browserHandle("setMinimize")}><VscChromeMinimize/></button>
            <button onClick={() => browserHandle("setMaximize")}><VscChromeMaximize/></button>
            <button onClick={() => browserHandle("closeBrowser")} className='close'><AiOutlineClose/></button>
        </div>

        </motion.div>

       
    </>

  )
}

export default Functionalities