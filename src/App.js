import React from 'react';
import logo from './logo.svg';
import './App.css';
import { tsPropertySignature } from '@babel/types';

function Header() {
  return (
    <div className="app-header">
      <div>LOGO</div>
      <Button text="SIGN IN"/>
    </div>
  );
}

function Button(props){
  return(
    <div className="app-button">{props.text}</div>
  );
}

function Navbar(){
  return(
    <div className="app-navbar">
      <NavItems text={["Item 1", "Item 2"]}/>
    </div>
  );
}

function NavItems(props){
  const navtext = props.text;
  const navitems = navtext.map((navtext) => <li>{navtext}</li>);
  return(
    <ul className="app-nav-items">
      {navitems}
    </ul>
  );
}

function Body(){
  return(
    <div className="app-body">
      We are one of the world's largest Conversational AI companies, having reached over 100 million devices, and processed over 2 billion conversations till date. Established in 2013, Haptik has been at the forefront of the paradigm shift of interaction from clicks to conversations. We have built a robust set of technology and tools that can enable any kind of conversational application. With a 100-member strong team, including some of the finest minds in Artificial Intelligence, Haptik is truly poised to lead the Conversational AI revolution.
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-container">
        <Navbar />
        <Body />
      </div>
    </div>
  );
}

export default App;
