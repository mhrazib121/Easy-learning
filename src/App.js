import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import NotFound from './components/NotFound/NotFound';
import Service from './components/Service/Service';
import Category from './components/Category/Category';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          
          <Route path="/aboutus">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/service">
            <Service></Service>
          </Route>
          <Route path="/category">
            <Category></Category>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
          
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
