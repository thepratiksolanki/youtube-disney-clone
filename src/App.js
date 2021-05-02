import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
