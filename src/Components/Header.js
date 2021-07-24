import React, { Component } from 'react';

class Header extends Component {
   render() {

      if (this.props.data) {
         var firstname = this.props.data.firstname;
         var lastname = this.props.data.lastname;
         var occupation = this.props.data.occupation;
         var networks = this.props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
         })
      }

      return (
         <header id="home">
            <nav id="nav-wrap">


               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">About</a></li>
                  <li><a className="smoothscroll" href="#resume">Experience</a></li>
                  <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
               </ul>

            </nav>

            <div className="row banner">
               <div className="banner-text">
                  <h1 className="responsive-headline">{firstname} <a class="lastname">{lastname}</a> </h1>
                  <h3><span>{occupation}</span></h3>
                  <ul className="social">
                     {networks}
                  </ul>
               </div>
            </div>

            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

         </header>
      );
   }
}

export default Header;
