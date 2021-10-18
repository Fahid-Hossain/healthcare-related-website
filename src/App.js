import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Contact from './components/Homepage/Contact/Contact';
import Departments from './components/Homepage/Departments/Departments';
import Details from './components/Homepage/Departments/Details/Details';
import Footer from './components/Homepage/Footer/Footer';
import Header from './components/Homepage/Header/Header';
import Home from './components/Homepage/Home/Home';
import NotFound from './components/NotFound/NotFound';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Route>
        <Header></Header>
      </Route> */}
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route path="/home">
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route path="/contact">
            <Header></Header>
            <Contact></Contact>
            <Footer></Footer>
          </Route>
          <Route path="/departments">
            <Header></Header>
            <Departments></Departments>
            <Footer></Footer>
          </Route>
          <Route path="/details/:id">
            <Header></Header>
              <Details></Details>
            <Footer></Footer>
          </Route>
          <Route path="/signin">
            <Header></Header>
            <SignIn></SignIn>
            <Footer></Footer>
          </Route>
          <Route path="/signup">
            <Header></Header>
            <SignUp></SignUp>
            <Footer></Footer>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        {/* <Route>
            <Footer></Footer>
          </Route> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
