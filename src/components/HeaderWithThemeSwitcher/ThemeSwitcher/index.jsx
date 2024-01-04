import React, { useContext } from "react";
import { ThemeContext } from "../../../context";
import CONSTANTS from "../../../constants";
//import { useEffect, useState } from "react";
import className from "classname";
import { ThemeContext } from "./context";
import UserPage from "./pages/UserPage";
import styles from "./App.module.css";
import CONSTANTS from "./constants";

// const {
//   THEMES: { LIGHT, DARK, PURPLE },
// } = CONSTANTS;

// function App() {
//   const [theme, setTheme] = useState(LIGHT);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     setTheme(savedTheme ? savedTheme : LIGHT);
//   }, []);
//   useEffect(() => {
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const containerClassName = className(styles.pageContainer, {
//     [styles.light]: theme === LIGHT,
//     [styles.dark]: theme === DARK,
//     [styles.purple]: theme === PURPLE,
//   });

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       <div className={containerClassName}>
//         <UserPage />
//       </div>
//     </ThemeContext.Provider>
//   );
// }
// export default App;

const {
  THEMES: { LIGHT, DARK, PURPLE },
} = CONSTANTS;

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  const themeChangeHandler = ({ target: { value } }) => {
    setTheme(value);
  };
  return (
    <select value={theme} onChange={themeChangeHandler}>
      <option value={LIGHT}>Light</option>
      <option value={DARK}>Dark</option>
      <option value={PURPLE}>Purple</option>
    </select>
  );
}

export default ThemeSwitcher;
