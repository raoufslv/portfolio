import { createContext, useState} from 'react';

const MyContext = createContext();


export const MyProvider = ({children}) => {
    const [connected, setConnected] = useState(false);

    return (
        <MyContext.Provider value={{connected , setConnected}}>
            {children}
        </MyContext.Provider>
    );
}

export default MyContext;
