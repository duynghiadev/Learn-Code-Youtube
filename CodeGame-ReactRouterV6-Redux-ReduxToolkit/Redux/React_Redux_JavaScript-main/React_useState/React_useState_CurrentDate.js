import React, {Component} from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

class CurrentDate extends Component {
    state = {
        date: new Date(),
    };
    update = () => {
        this.setState({
            date: new Date()
        })
    }
    render() {
        return (
            <h1>data: {this.state.date.toLocaleTimeString()} <button onClick={this.update}>klik</button></h1>
        )
    }
}


const App = () => {
    return (
        <>
        <CurrentDate />
        </>
    )
}

root.render(<App />);
