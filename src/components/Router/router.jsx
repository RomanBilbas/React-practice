import { useEffect } from "react";
import Counter from "./components/Counter";
import User from "./components/User";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
  useHistory,
  useRouteMatch,
} from "react-router-dom";

const navLinkStyle = (IsActive) => ({ color: IsActive ? "green" : "blue" });

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            {" "}
            <NavLink style={navLinkStyle} to="/">
              Home
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink style={navLinkStyle} to="/about">
              About
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink style={navLinkStyle} to="/components">
              Components
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink style={navLinkStyle} to="/contacts">
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/components">
          <Components />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="/*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

function Home() {
  return <div>Home</div>;
}

function Components() {
  const { url, path } = useRouteMatch();
  return (
    <div>
      <Link to={`${url}/counter`}>Counter</Link>{" "}
      <Link to={`${url}/user`}>User</Link>{" "}
      <Switch>
        <Route path={`${path}/counter`}>
          <Counter />
        </Route>
        <Route path={`${path}/user`}>
          <User />
        </Route>
      </Switch>
    </div>
  );
}

function About() {
  return <div>About</div>;
}
function Contacts() {
  return <div>Contacts</div>;
}
function NotFound() {
  const history = useHistory();
  useEffect(() => {
    const id = setTimeout(() => {
      history.push("/");
    }, 5000);
    return () => {
      clearTimeout(id);
    };
  });

  return <div>Sorry 404 not page found</div>;
}
