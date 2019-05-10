import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import Header from '../Educational Component/Educational';
// import Body from '../Personal Component/Personal';
// import Footer from '../Contact Component/Contact';
import './Home.scss';

export class Home extends Component {
  render() {
    return (
      <div class="navbar">
        <ul>
          <li>
            <Link to='/educational'>Education</Link>
          </li>
          <li>
            <Link to='/personal'>Personal</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li style={{ paddingLeft: "1000px" }}>
            <Link to='/'>logout</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Home
