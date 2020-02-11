import React, { Component, ComponentClass } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "./index.css";

const noop = () => {};

interface IProps {
  keyboardRef: (r: Keyboard) => void;
  onChange: (input: string) => void;
}

class KeyboardWrapper extends Component<IProps> {
  state = {
    layoutName: "default"
  };

  handleShift = () => {
    let layoutName = this.state.layoutName;

    this.setState({
      layoutName: layoutName === "default" ? "shift" : "default"
    });
  };

  onKeyPress = (button: string) => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") this.handleShift();
  };

  render() {
    const { layoutName } = this.state;
    const { keyboardRef = noop, onChange = noop } = this.props;

    return (
      <Keyboard
        keyboardRef={keyboardRef}
        layoutName={layoutName}
        onChange={onChange}
        onKeyPress={this.onKeyPress}
        onRender={() => console.log("Rendered")}
      />
    );
  }
}

export { KeyboardWrapper, Keyboard };
