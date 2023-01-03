import React from 'react'
import './Header.css'
import HeaderModal from './headerModal';
import { useThemeContext } from '../Pages/ContextCode'
import {motion} from 'framer-motion'
import { LinearProgress} from '@mui/material';


function Header() {

  const {state, dispatch} = useThemeContext();

  const handleModal = () =>{
    dispatch("MODAL", {
      openModal : state.openModal === "hideModal" ? "showModal" : "hideModal"
    })
    dispatch("START_PROGRESS", {
      linearProgress: state.linearProgress === 0 ? 100 : 0
    })

  }
  
  return (
    <div>
        <header className={'header ' + state.theme.headerColor}>
            <h3>LOGO</h3>
            <span className={state.headerLabel}>Header</span>
            <div className="profile">
              <motion.img whileTap={{scale: 0.9}} className='headerImage' onClick={handleModal} src="https://media-exp1.licdn.com/dms/image/D4D03AQEeEhwdin2VNQ/profile-displayphoto-shrink_200_200/0/1667209402403?e=1674086400&v=beta&t=fnJpEEO8r221L0nhq_9rPKTOwky22IL-_BECO9shk8A" alt="Profile" />
            </div>
        </header>

        <LinearProgress style={{backgroundColor: "#012825"}} variant="determinate" value={state.linearProgress} />
        <HeaderModal/>
    </div>
  )
}

export default Header