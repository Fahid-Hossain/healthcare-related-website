import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Homepage/Header/Header';
import Home from './components/Homepage/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route>
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
