import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const product = useSelector((state) => state.product);
   console.log(product)

    if(product !== null)
        return children
    else
        return <Navigate to="/login" />

}

export default PrivateRoute
