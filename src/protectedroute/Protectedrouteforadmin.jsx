/* eslint-disable react/prop-types */
import { Navigate } from "react-router"

export const Protectedrouteforadmin = ({children}) => {
    const user = JSON.parse(localStorage.getItem('users'))
    if (user?.role === "admin") {
      return children
    }
    else {
      return <Navigate to={'/login'}/>
    }
}