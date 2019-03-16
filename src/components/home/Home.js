import React, { Component } from 'react';

import './Home.module.scss';

import Nav from "../Nav";
import HomeHeader from "./HomeHeader";
import Qoute from "./Qoute";
import Latest from "./Latest";
import Music from "./Music";
import About from "./About";
import Contact from "./Contact";
import Footer from "../Footer";



class Home extends Component {

  render() {

    return ([
      <Nav/>,
      <HomeHeader/>,
      <Qoute/>,
      <Latest/>,
      <Music />,
      <About />,
      <Contact />,
      <Footer /> 
    ]);
  }
}

export default Home;
