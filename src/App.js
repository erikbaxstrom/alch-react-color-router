import { NavLink, Switch, Route, useParams } from 'react-router-dom';
import './App.css';
import ColorDisplay from './components/ColorDisplay/ColorDisplay.js';

function App() {
  return (
    <div className="App">
      <h1>Color Picker</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/rgb/1/1/1">Link 1</NavLink>
          </li>
          <li>
            <NavLink to="/rgb/2/2/2">Link 2</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            Yore hooome!
          </Route>
          <Route
            exact
            path="/rgb/:redValue/:greenValue/:blueValue"
            component={ColorDisplay}
          ></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
