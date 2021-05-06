import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import reducer from "./redux/reducers/reducer";

import Home from "./components/Home.components";
import Search from "./components/Search.components";
import Navbar from "./components/Navbar.components";

import { appMiddleware } from "./redux/middlewares/app";
import { apiMiddleware } from "./redux/middlewares/core";

const createStoreWithMiddleware = applyMiddleware(
  appMiddleware,
  apiMiddleware
)(createStore);

const store = createStoreWithMiddleware(reducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/" default>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
