import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Contact from './components/Homepage/Contact/Contact';
import Footer from './components/Homepage/Footer/Footer';
import Header from './components/Homepage/Header/Header';
import Home from './components/Homepage/Home/Home';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route>
        <Header></Header>
      </Route>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/signin">
            <SignIn></SignIn>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
        </Switch>
          <Route>
            <Footer></Footer>
          </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
