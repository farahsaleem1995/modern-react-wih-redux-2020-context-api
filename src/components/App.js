import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class App extends React.Component {
  state = { language: "english" };

  handleLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          <p
            style={{
              display: "inline-block",
              fontSize: "24px",
              marginRight: "16px",
            }}
          >
            Select a language:
          </p>
          <i
            className="flag us"
            onClick={() => this.handleLanguageChange("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.handleLanguageChange("duthc")}
          />
        </div>

        <ColorContext.Provider value={{ color: "blue", inverted: true }}>
          <LanguageContext.Provider
            value={{ ...this.context, language: this.state.language }}
          >
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
