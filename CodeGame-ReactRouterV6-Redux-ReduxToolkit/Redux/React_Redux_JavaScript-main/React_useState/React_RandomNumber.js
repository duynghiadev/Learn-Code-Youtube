class App extends React.Component {
  state = {
    numbers: [],
  };
  random = () => {
    this.setState(({ numbers }) => ({
      numbers: [...numbers, Math.random() * (999 - 100) + 100],
    }));
  };
  render() {
    const { numbers } = this.state;
    return (
      <div className="App">
        <button onClick={this.random}>Losuj</button>
        <ul>
          {numbers.map((numb) => (
            <li key={numb}>{numb}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
