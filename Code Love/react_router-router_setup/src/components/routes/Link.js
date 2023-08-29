import React from 'react';

function Link(props) {

    const {to, children, onHandleChangePath} = props;

    const handleClickChangePath = (event) => {
        event.preventDefault();
        window.history.pushState(null, '', to);

        // excute function parent define from parent
        onHandleChangePath();
    }

    return (
        <a 
            onClick={handleClickChangePath}
            href={to}>
            {children}
        </a>
    );
}

export default Link;
