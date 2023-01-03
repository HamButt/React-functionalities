import React from 'react'
import './modalInModal.css'
import { useThemeContext } from '../Pages/ContextCode';

function ModalInModal() {
    const {state, dispatch} = useThemeContext();

    const closeInnerModal = () => {
        dispatch("INNER_MODAL", {
            openInnerModal: state.openInnerModal === "showInnerModal" ? "hideInnerModal" : "showInnerModal"
        })
    }

  return (
    <div className={state.openInnerModal}>
        Modal in Modal
        <button onClick={closeInnerModal}>Close Modal</button>
    </div>
  )
}

export default ModalInModal