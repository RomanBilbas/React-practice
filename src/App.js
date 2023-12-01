import "./App.css";
import Header from "./components/Header";

function App() {
  const isLogin = true;

  const navList = [
    { aTitle: "Home", src: "#" },
    { aTitle: "About", src: "#" },
  ];

  return <Header isLogin={isLogin} navList={navList} />;
}

export default App;
