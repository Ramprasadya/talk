import { createContext } from "react";

 const ProfileContext =  createContext()

 export  const ProfileProvider =({children})=>{
    const profile = false ;
    return ( 
        <ProfileContext.Provider value={profile} >
            {children}
        </ProfileContext.Provider>
    )
}


export default  ProfileContext;