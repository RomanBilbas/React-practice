import React from "react";
import { FaSun, FaMoon } from "react-icons/fa6";

function ThemeSwitcher(props) {
  const { isLight, setIsLight } = props;

  const sunStyle = {
    color: isLight ? "yellow" : "grey",
    boxShadow: isLight ? "0 0 10px grey" : "",
    backgroundColor: isLight ? "grey" : "",
    borderRadius: isLight ? "50%" : "",
  };

  const moonStyle = {
    color: isLight ? "grey" : "yellow",
    boxShadow: isLight ? "" : "0 0 10px grey",
    backgroundColor: isLight ? "" : "grey",
    borderRadius: isLight ? "" : "50%",
  };

  function setLight() {
    setIsLight(true);
  }
  function setDark() {
    setIsLight(false);
  }

  return (
    <section>
      <FaSun onClick={setLight} style={sunStyle} />
      <FaMoon onClick={setDark} style={moonStyle} />
    </section>
  );
}

export default ThemeSwitcher;
