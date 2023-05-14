import { useReducer, createContext } from "react";

const modeReducer = (state, action) => {
  console.log(action.type);
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

export const ModeContextProvider = (props) => {
  const [state, modeDispatch] = useReducer(modeReducer, { mode: false });
  return (
    <ModeContext.Provider value={[state, modeDispatch]}>
      {props.children}
    </ModeContext.Provider>
  );
};

export default ModeContext;
