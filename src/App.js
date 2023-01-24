import { Switch, Route } from 'react-router-dom';
import './App.css';
import ColorDisplay from './components/ColorDisplay/ColorDisplay.js';
import NavBar from './components/NavBar/NavBar.js';

function App() {
  return (
    <div className="App">
      <h1>Color Picker</h1>
      <NavBar />
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
