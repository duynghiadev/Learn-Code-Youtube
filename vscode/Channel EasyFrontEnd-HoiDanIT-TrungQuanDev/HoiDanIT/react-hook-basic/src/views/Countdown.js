import React, { Component } from "react";
import { useEffect } from "react";
import { useState } from "react";

class Countdown extends Component {
  state = {
    count: 10,
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count - 1,
      });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.count !== this.state.count && this.state.count === 0) {
      if (this.timer) {
        clearInterval(this.timer);
        // this.props.onTimesup();
      }
    }
  }

  render() {
    return <div>{this.state.count} class</div>;
  }
}

const NewCountdown = (props) => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count === 0) {
      props.onTimesup();
      return;
    }

    let timer = setInterval(() => {
      console.log("run me");
      setCount(count - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return <div>{count} hooks</div>;
};

export { Countdown, NewCountdown };
