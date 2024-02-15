import React, { Component } from "react";
import { createRoot } from "react-dom/client";


function HelloFunc(props) {
    const {name, surname} = props
    return (
        <>
            <h1>Hello, {name} {surname}</h1>
        </>
    )

}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<HelloFunc name="John" surname="Doe" />)
