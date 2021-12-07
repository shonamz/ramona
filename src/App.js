import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import  React, {Component}  from 'react';
import Menu from './components/MenuComponent';
import {ROOMS} from './shared/rooms';
import Main from './components/MainComponent';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
