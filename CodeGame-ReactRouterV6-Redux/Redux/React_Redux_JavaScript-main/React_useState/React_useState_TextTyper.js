import React from "react";

class TextTyper extends React.Component {
  state = {
    currentText: this.props.txt[0],
    idx: 1,
  };
  add = () => {
    console.log(this.props.txt);
    console.log(this.state.currentText.length);
    console.log(this.props.txt[this.state.currentText.length]);
    // this.setState((prev) => {
    //   return {
    //     currentText:
    //       prev.currentText + this.props.txt[this.state.currentText.length],
    //   };
    // });
    this.setState((prev) => {
      if (prev.currentText !== this.props.txt) {
        return {
          currentText: prev.currentText + this.props.txt[prev.idx],
          idx: prev.idx + 1,
        };
      }
    });
  };

  remove = () => {
    this.setState((prev) => {
      if (prev.idx !== 0) {
        return {
          currentText: prev.currentText.slice(0, -1),
          idx: prev.idx - 1,
        };
      }
    });
  };
  render() {
    const { txt } = this.props;
    const { currentText } = this.state;

    return (
      <>
        <button onClick={this.add}>+</button>
        <button onClick={this.remove}>-</button>
        <h2>{txt}</h2>
        <h1>{currentText}</h1>
      </>
    );
  }
}

export default TextTyper;
