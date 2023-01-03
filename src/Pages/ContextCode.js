import * as React from "react";
export const ThemeContext = React.createContext();


export function ThemeProvider({ children }) {

  
  const [state, setState] = React.useState({
    
    theme:{
        sideBarColor:"color",
        headerColor:"light",
        formColor: "bright",
        mainTheme: "mainLight",
        footerColor: "footerLight",
      },
        headerLabel: "capitalizeCase" ,
        openModal: "hideModal",
        openInnerModal: "hideInnerModal",
        linearProgress: 0,
        circularProgress: false,
        status: "unSuccess",
        sizeStatus: "regularButton",
        panelParagraph: "paragraph",
        panelParagraphOne: "paragraphOne",
        defaultArrowPosition: "defaultArrowPosition",
        defaultArrowPositionOne: "defaultArrowPositionOne",
        transitionSquare1: "firstBox",
        transitionSquare2: "secondBox",
        transitionSquare3: "thirdBox",
        transitionSquare4: "fourthBox",
        arrowShifting: "floatRight"
    });
    
  const dispatch = (actionType, payload) => {
    switch (actionType) {

            case "THEME" :{
            setState({...state, theme:{
              ...state.theme, sideBarColor:payload.sideBarColor, 
                headerColor:payload.headerColor,
                formColor: payload.formColor, 
                mainTheme: payload.mainTheme, 
                footerColor: payload.footerColor,
              }})
              break;
        }
            case "HEADER_LABEL" :{
              setState((pre)=>({...pre, headerLabel: payload.headerLabel}))
            break;
        }
            case "MODAL" :{
              setState((pre)=>({...pre, openModal: payload.openModal}))
            break;
        }
            case "INNER_MODAL" :{
              setState((pre) => ({...pre, openInnerModal: payload.openInnerModal}))
            break;
        }
            case "START_PROGRESS" :{
              setState((pre) => ({...pre, linearProgress: payload.linearProgress}))
            break;
        }
            case "START_CIRCULAR_PROGRESS" :{
              setState((pre) => ({...pre, circularProgress: payload.circularProgress}))
            break;
        }
            case "COLOR_CHANGE" : {
              state.status = payload.status
              setState(state)
              break;
        }
            case "CHANGE_BUTTON" : {
              state.sizeStatus = payload.sizeStatus
              setState(state)
              break
        }
            case "BROWSER_HANDLE" :{
                state.browserHandleStatus = payload.browserHandleStatus
                setState({...state})
                break;
        }
            case "OPEN_PANEL" :{
              setState({...state,
                panelParagraph: payload.panelParagraph,
                defaultArrowPosition: payload.defaultArrowPosition,
              })
            break;
        }
            case "OPEN_PANEL2" :{
              setState({...state,
                panelParagraphOne: payload.panelParagraphOne,
                defaultArrowPositionOne: payload.defaultArrowPositionOne,
              })
            break;
        }
            case "TRANSITIONS_SQUARES" :{
              state.transitionSquare1 = payload.transitionSquare1
              state.transitionSquare2 = payload.transitionSquare2
              state.transitionSquare3 = payload.transitionSquare3
              state.transitionSquare4 = payload.transitionSquare4
              setState({...state})
            break;
        }
            case "SHIFT_ARROWS" : {
              state.arrowShifting = payload.arrowShifting
              setState({...state})
            break;
        }
      default:
        return;
    }
  };

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useAppContext can only be used inside ThemeProvider");
  }
  return context;
}