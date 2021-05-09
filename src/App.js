import "./App.css";
import Title from "./component/Title";
import SearchSection from "./component/SearchSection";
import MovieContextProvider from "./context/MovieContextProvider";
import NominationSection from "./component/NominationSection";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
      <MovieContextProvider>
        <div className="App">
          <NominationSection />
          <header className="App-header">
            <Title />
          </header>
          <SearchSection />
        </div>
      </MovieContextProvider>
      </Route>
      </Switch>
      <Switch>
        <Route path="/:id">
      <MovieContextProvider>
        <div className="App">
          <NominationSection />
          <header className="App-header">
            <Title />
          </header>
          <SearchSection />
        </div>
      </MovieContextProvider>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
