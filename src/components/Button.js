import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  renderBtnText = (language) => {
    return language === "english" ? "submit" : "Voorleggen";
  };

  renderBtn = (colorValue) => {
    let className = `ui button ${
      colorValue.color === "blue" ? "blue" : "red"
    } ${colorValue.inverted ? "inverted" : ""}`;
    return (
      <button className={className}>
        <LanguageContext.Consumer>
          {(languageValue) => this.renderBtnText(languageValue.language)}
        </LanguageContext.Consumer>
      </button>
    );
  };

  render() {
    return (
      <ColorContext.Consumer>
        {(colorValue) => this.renderBtn(colorValue)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
