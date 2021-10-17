import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
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
