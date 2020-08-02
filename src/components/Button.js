import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  renderBtnText = (language) => {
    return language === "english" ? "submit" : "Voorleggen";
  };

  renderBtn = (color, inverted) => {
    let className = `ui button ${color === "blue" ? "blue" : "red"} ${
      inverted ? "inverted" : ""
    }`;
    return (
      <button className={className}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderBtnText(language)}
        </LanguageContext.Consumer>
      </button>
    );
  };

  render() {
    return (
      <ColorContext.Consumer>
        {({ color, inverted }) => this.renderBtn(color, inverted)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
