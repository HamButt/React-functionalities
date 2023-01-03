import React from 'react'
import './headerModal.css'
import { useThemeContext } from '../Pages/ContextCode'
import ModalInModal from './modalInModal';


function HeaderModal() {

    const {state, dispatch} = useThemeContext();

    const headerInnerModal = () => {
        dispatch("INNER_MODAL", {
            openInnerModal: state.openInnerModal === "hideInnerModal" ? "showInnerModal" : "hideInnerModal"
        })
    }
    

  return (


      <div className={state.openModal}>
            Modal
          <ModalInModal/>
          <button onClick={headerInnerModal}>Side Modal</button>
      </div>
  )
}

export default HeaderModal