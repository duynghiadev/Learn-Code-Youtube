import React, {useContext} from 'react';
import {RouterContext} from './Routes';

function Route(props) {

    const RouterContextStore = useContext(RouterContext);

    const pathName = RouterContextStore.location.pathname;

    if(pathName === props.path) {
        return props.element;
    } else {
        return null;
    }

}

export default Route;
