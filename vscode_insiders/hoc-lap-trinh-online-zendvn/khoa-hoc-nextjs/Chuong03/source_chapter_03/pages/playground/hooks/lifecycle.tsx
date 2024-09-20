import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import Button from "../../../components/Button";
import useConstructor from "../../../custom-hooks/useConstructor";

// Destructring 
// Chay 1 lan dau tien duy nhat, Truoc khi render
// Cach 1: Tao bien toan cuc isRun -> Check dieu kien

// Tao Custom Hook -> useConstructor
//  -> Nhan vao mot function callback
//  -> function nay chi duoc goi 1 lan duy nhat
// useConstructor(() => { // hdjshdj })

let isRun = false;

const LifeCycleDemo = () => {
    // Tuong ung voi Constructor

    useConstructor(() => {
        console.log("constructor cach 4");
    })

    useMemo(() => {
        console.log("constructor cach 3");
    }, []);

    const isRunHook = useRef(false);
    const inputFileEl = useRef(null);
    const [counter, setCounter] = useState(0);
    const [visible, setVisible] = useState(true);
    const [user, setUser] = useState({
        firstName: 'John',
        lastName: 'Smith'
    });

    

    if(isRunHook.current === false) {
        console.log("constructor cach 2");

        isRunHook.current = true;
    }

    if(isRun === false) {
        // Xu li constructor
        console.log("constructor cach 1");
        isRun = true;
    }

    // useEffect(() => {
    //     // DidMount & DidUpdate
    //     console.log("useEffect run");

    //     return () => {
    //         // componentWillUnmout <=> Component sẽ bị remove khỏi cấu trúc DOM 
    //     }
    // });
    useEffect(() => {
        console.log("Lang nghe su thay doi cua hai state counter va visible");
    }, [counter, visible])

    useEffect(() => {
        // DidMount - Chay 1 lan duy nhat sau khi render lan dau tien
        console.log("useEffect run - empty deps")
    }, [])

    useEffect(() => {
        console.log("Lang nghe su thay doi cua counter");
    }, [counter]);

    useEffect(() => {
        console.log("Lang nghe su thay doi cua visible");
    }, [visible]);

    // Khong duoc lam dung.
    const fullName = useMemo(() => {
        return user.firstName + ' ' + user.lastName
    }, [user]);

    const handleIncreaseCounter = useCallback(() => {
        setCounter(counter + 1);
    }, [counter])

    return (
        <div className="container">
            <h1>Play Ground - Life Cycle - React Hooks {fullName}</h1>
            <button onClick={handleIncreaseCounter} >Counter Add</button>
            <p>{counter}</p>


            <button onClick={() => {
                setVisible(false);
            }}>Hide button</button>
            {
                visible && <Button />
            }
            <hr />

            <input style={{
                opacity: 0,
                visibility: 'hidden',
                position: "fixed",
                left: '-1000px'
            }} type="file"/>

            <button 
                onClick={() => {
                    console.log(inputFileEl.current);
                    // inputFileEl.current.click();
                    const input = document.querySelector('input[type="file"') as HTMLInputElement;
                    input.click();
                }}
                className="upload">Upload Image</button>
        </div>
    )
}

export default LifeCycleDemo;