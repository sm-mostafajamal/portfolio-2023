import { useReducer, createContext, useContext } from "react";

const modeReducer = (state, action) => {
  switch (action.type) {
    case "dark":
      return state;
    case "light":
      return state;
    case "TOGGLE":
      return { mode: !state.mode };
    default:
      return state;
  }
};

const ModeContext = createContext();

export const useModeState = () => {
  const stateAndDispatch = useContext(ModeContext);
  return stateAndDispatch[0];
};

export const useModeDispatch = () => {
  const stateAndDispatch = useContext(ModeContext);
  return stateAndDispatch[1];
};

export const ModeContextProvider = (props) => {
  const [state, modeDispatch] = useReducer(modeReducer, { mode: true });
  return (
    <ModeContext.Provider value={[state, modeDispatch]}>
      {props.children}
    </ModeContext.Provider>
  );
};

export default ModeContext;
