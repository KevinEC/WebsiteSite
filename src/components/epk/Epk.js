import React, { Component } from 'react';

import Nav from "../Nav";
import Footer from "../Footer";
import EpkHeader from "./EpkHeader";
import EpkQoute from "./EpkQoute";
import Biography from "./Biography";
import Stories from "./Stories";
import Assets from "./Assets";

import "bootstrap";

class Epk extends Component {

  render() {

    return ([
		<Nav />,
		<EpkHeader />,
		<EpkQoute />,
		<Biography />,
		<Stories />,
		<Assets />,
		<Footer />
    ]);
  }
}

export default Epk;
