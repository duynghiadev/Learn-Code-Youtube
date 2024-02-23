import React from 'react';

const Page404 = (props) => {
    const { msg } = props;
    return (
        <div className="columns is-centered new-question">
            <div className="column is-6">
                {
                    msg 
                        ? msg
                        : "You are trying to access an Invalid URL."
                }
            </div>
        </div>
);}

export default Page404;