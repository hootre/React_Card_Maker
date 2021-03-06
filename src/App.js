import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./App.module.css";
import Login from "./components/login/login";
import Maker from "./components/maker/maker";
import CounterContainer from "./containers/counter/counterContainer";
import TodosContainer from "./containers/todos/todosContainer";

function App({ FileInput, authService, cardRepository }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route exact path="/maker">
            <Maker
              FileInput={FileInput}
              authService={authService}
              cardRepository={cardRepository}
            />
          </Route>
          <Route path="/redux">
            <CounterContainer />
            <hr />
            <TodosContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
