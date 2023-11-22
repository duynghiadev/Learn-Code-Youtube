import React from 'react'
import {Navigate} from 'react-router-dom'
import { authenticate, isAuthenticate } from '../untils/localStorage';

type PrivateRouterProps = {
  children: JSX.Element
};

const PrivateRouter = (props: PrivateRouterProps) => {
    const {user} = isAuthenticate();
    if(!user?.role){
        return <Navigate to="/" />
    }
  return props.children
}

export default PrivateRouter