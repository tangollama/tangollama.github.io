import React, { Component } from "react";
import { Howl } from "howler";

const mandoAudio = new Howl({
  src: ["../../sounds/Mando_Note.mp3"],
  volume: 0.1,
  format: ["mp3"],
});

const defaultState = {
  dark: false,
  toString: () => `light`,
  toggleDark: () => {},
};

const ThemeContext = React.createContext(defaultState);

class ThemeProvider extends Component {
  state = {
    dark: false,
  };

  toString = () => (this.state.dark ? `dark` : `light`);

  toggleDark = () => {
    let dark = !this.state.dark;
    this.setState({ dark });
    mandoAudio.stop();
    if (dark) {
      mandoAudio.play();
    }
  };

  render() {
    const { children } = this.props;
    const { dark } = this.state;
    return (
      <ThemeContext.Provider
        value={{
          dark,
          toggleDark: this.toggleDark,
          toString: this.toString,
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContext;

export { ThemeProvider };
