import { createContext, useContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";

// 1️⃣ Create Context
export const StateContext = createContext();

// 2️⃣ Create a State Provider Component
export const StateProvider = ({ children }) => {
  // 3️⃣ Setup state and dispatch using useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children} {/* 4️⃣ Allows nested components to access context */}
    </StateContext.Provider>
  );
};

// 5️⃣ Custom Hook for easy access to Context
export const useStateValue = () => useContext(StateContext);

export const useStateProvider = () => useContext(StateContext);
