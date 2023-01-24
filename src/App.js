import { Switch, Route } from 'react-router-dom';
import './App.css';
import ColorDisplay from './components/ColorDisplay/ColorDisplay.js';
import NavBar from './components/NavBar/NavBar.js';
import NotFound from './components/NotFound/NotFound.js';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Color Picker</h1>
      </header>

      <NavBar />
      <Switch>
        <Route exact path="/">
          <div>
            <p>Choose a color from the links above, or enter your own RGB values into the URL.</p>
          </div>
        </Route>
        <Route exact path="/rgb/:redValue/:greenValue/:blueValue" component={ColorDisplay}></Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
