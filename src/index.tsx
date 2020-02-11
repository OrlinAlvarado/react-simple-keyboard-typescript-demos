import React, { Component } from "react";
import ReactDOM from "react-dom";
import { KeyboardWrapper, Keyboard } from "./KeyboardWrapper";

class App extends Component {
  keyboard: Keyboard;
  state = { input: "" };

  onChange = (input: string) => {
    this.setState({ input });
    console.log("Input changed", input);
  };

  onChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const input = event.target.value;
    this.setState({ input });
    this.keyboard.setInput(input);
  };

  public render() {
    return (
      <div>
        <input
          value={this.state.input}
          placeholder={"Tap on the virtual keyboard to start"}
          onChange={e => this.onChangeInput(e)}
        />
        <KeyboardWrapper
          keyboardRef={r => (this.keyboard = r)}
          onChange={(input: string) => this.onChange(input)}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
