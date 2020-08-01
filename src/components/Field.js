import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    const lableText = this.context.language === "english" ? "Neme" : "Naam";

    return (
      <div className="ui field">
        <label htmlFor="field">{lableText}</label>
        <input id="field" type="text" style={{ maxWidth: "40rem" }}></input>
      </div>
    );
  }
}

export default Field;
