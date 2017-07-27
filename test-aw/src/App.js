import React, { Component } from 'react';
import './App.css';
import Map from './Map';
import { Button } from "react-bootstrap";


class App extends Component {
  render() {
    return (

      <div className="wrapper">

        <div className="header">
          <div className="logo">
            <p> box for logo</p>
          </div>
          <div className="navigation">
            <ul>
              <li className="border"><a href="">Login</a></li>
              <li className="border"><a href="">Sing up</a></li>
              <li><a href="">Contact Us</a></li>
              <li><a href="">Testimonials</a></li>
              <li><a href="">Companies</a></li>
              <li><a href="">How we work</a></li>
            </ul>
          </div>
        </div>

        <div className="slader">
          <div className="controlAndTextForSlader">
            <a href="">
              <div className="left">
              </div>
            </a>
            <div className="textForSlader">
            <h2>Exteding your team?</h2>
            <h5>Find a porfect match</h5>
            </div>
            <a href="">
              <div className="right">
              </div>
            </a>
          </div>
        </div>

        <h3>How we work</h3>
        <div className="forWork">
          <div className="forText">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <video controls="controls" poster="">
          </video>
        </div>

        <h3>Featured companies</h3>
        <div className="forCompanies">
          <div className="oneCompany">
          </div>
          <div className="oneCompany">
          </div>
          <div className="oneCompany">
          </div>
          <div className="oneCompany">
          </div>
          <div className="oneCompany">
          </div>
            <div className="oneCompany">
          </div>
        </div>

        <Map />

        <div className="startProfile">
          <div className="forTextAndBtnProfile">
          <p className="textProfile">Start Bulding Your Own Profile Now</p>
            <Button bsStyle="primary" bsSize="large" className="buttonProfile">Get started</Button>
          </div>
        </div>

        <div className="contactAndAddrees">
          <div className="contact">
            <h3 className="leftSide">Drop us a line</h3>
            <input className="inputName" placeholder=" Name" type="text" name="Name"></input>
            <input className="inputEmail"  placeholder=" Email" type="email" name="Email"></input>
            <input className="inputMessage" placeholder=" Message" type="text" name="Message" maxLength="300"></input>
          </div>
          <div className="addrees">
            <h3 className="leftSide">Visit our office</h3>
            <p className="city">New york</p>
            <br/>
            <p>5 Park Avenue</p>
            <p>New York, NY 10016</p>
            <p>USA</p>
            <br/>
            <a href="tel:+17182425555"> +1 718.242.5555</a><br/>
            <a href="tel:+17182425556"> +1 718.242.5556</a><br/>
            <a href="mailto:nu@jobseek.com">nu@jobseek.com</a><br/>
            <br/>
            <p>Mon-Fri 9am- 5pm</p>
            <p>Sat 10am - 2pm</p>
            <p>Sun Closed</p>
          </div>
        </div>

        <div className="socialMedia">
          <a href="">
            <div className="contact-icons facebook">
            </div>
          </a>
          <a href="">
            <div className="contact-icons twitter">
            </div>
          </a>
          <a href="">
            <div className="contact-icons instagram">
            </div>
          </a>
          <a href="">
            <div className="contact-icons linkedin">
            </div>
          </a>
          <a href="">
            <div className="contact-icons pinterest">
            </div>
          </a>
          <p>© 2016 SiteName - all rights reserved</p>
        </div>
      </div>
    );
  }
}

export default App;
