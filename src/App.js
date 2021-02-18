import logo from "./logo.svg";
import "./App.css";
import News from "./component/News";
import { NewsContextProvider } from "./NewsContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/Header";

function App() {
  return (
    <NewsContextProvider>
      <Router>
      <Header/>
        <Switch>
          <Route path="/" exact>
            <News />
          </Route>
        </Switch>
      </Router>
      <footer>Developed by @rashed</footer>
    </NewsContextProvider>
  );
}

export default App;
