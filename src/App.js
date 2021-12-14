import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import  React, {Component}  from 'react';
import Menu from './components/MenuComponent';
import {ROOMS} from './shared/rooms';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
       
    );
  }
}
 

export default App;
