import React, { Component } from "react";

let mandoAudio;
if (typeof window !== "undefined") {
  mandoAudio = new Audio("/sounds/Mando_Note.mp3");
  mandoAudio.volume = 0.1;
} else {
  // SSR fallback: provide noop audio methods so code can run server-side
  mandoAudio = {
    play: () => {},
    pause: () => {},
    currentTime: 0,
    volume: 0,
  };
}

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
    // Use HTMLAudio methods: pause + reset time (stop equivalent)
    if (mandoAudio && typeof mandoAudio.pause === "function") {
      try {
        mandoAudio.pause();
        mandoAudio.currentTime = 0;
      } catch (e) {}
    }
    if (dark && typeof mandoAudio.play === "function") {
      try {
        mandoAudio.play();
      } catch (e) {}
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
