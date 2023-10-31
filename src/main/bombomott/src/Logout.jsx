import React, { useEffect } from 'react';
import LogoutLogic from './BackEndData/LogoutLogic'

export default function Logout() {
    const {logout} = LogoutLogic()
    useEffect(()=>{
        logout()
    },[])
    return (
        <div>
        </div>
    );
}

