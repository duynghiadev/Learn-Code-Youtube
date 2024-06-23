import React, { Component } from "react";

type StateType = {
    counter: number;
    visible: boolean;
}

// babel + webpack
export default class LifeCycle extends Component<any, StateType> {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            visible: true,
        }
        console.log("constructor");
    }

    UNSAFE_componentWillMount () {
        console.log("componentWillMount");
    }   

    componentDidMount() {
        console.log("componentDidMount");
    }

    UNSAFE_componentWillUpdate () {
        // Tự kiểm tra xem mỗi state, state nào bị thay đổi?
        // Để mình thực logic cho phù hợp?
        console.log("componentWillUpdate")
        // userid -> call server -> data phu thuoc vao userid 
    }

    UNSAFE_componentWillReceiveProps () {
        
    }

    componentWillUnmount() {
        
    }

    render() {
        console.log("render run");
        return (
            <div className="container">
                <h1>Play Ground - Life Cycle - React Hooks</h1>
                <button onClick={() => {
                    this.setState((prevState) => {
                        return {
                            counter: prevState.counter + 1
                        }
                    })
                    // partial -> Một phần của state
                }}>Counter Add</button>
                <p>{this.state.counter}</p>
            </div>
        )
    }
}