import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PrivaterRourte = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    if(loading){
        return <><progress className="progress w-56"></progress></>
    }
    if(!user){
        return <Navigate to="/login" state={{from:location}} replace></Navigate>
    }
    return children;
};

export default PrivaterRourte;