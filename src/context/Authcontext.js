// import React,{useState, useContext,useEffect} from 'react'
//  import {auth} from '../fire'
//  const AuthContext=React.createContext();
//   export function useAuth(){
//     return useContext(AuthContext)
//   }
// export function Authprovider({children}) {
//    const [currentUser,setCurrentuser]=useState()
//     function sign(email){
//       return auth.createUserWithEmail(email)
//     }
//     useEffect(()=>{
//      const loggedIn =auth.onAuthStateChanged(email=>{
//         setCurrentuser(email)
//       })
//       return loggedIn(loggedIn);
//     },[])

//    const value={
//      currentUser,
//      sign
//    }
//   return (
//     <AuthContext.Provider value={value}>
//         {children}
//     </AuthContext.Provider>
//   )
// }

