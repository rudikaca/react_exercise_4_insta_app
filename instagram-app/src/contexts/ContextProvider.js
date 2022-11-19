import React, { createContext, useContext, useState} from "react";

const StateContext = createContext();

export const ContextProvider = ({children}) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <StateContext.Provider
            value={{
                isAuthenticated,
                setIsAuthenticated,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);
