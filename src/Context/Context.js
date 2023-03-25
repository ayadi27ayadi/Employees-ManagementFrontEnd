import { createContext, useContext, useState} from "react";

const AuthContext = createContext()

export function useAuth(){
  return useContext(AuthContext);
}

export function AuthProvider(props){
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')


const value = {
  email, 
  setEmail,
  password, 
  setPassword
}


    return (
      <AuthContext.Provider value={value}>
       {props.children}
        </AuthContext.Provider>
    )
  };