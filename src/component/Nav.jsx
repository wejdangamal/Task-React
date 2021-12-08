import React, { Component } from 'react'
import  { createElement } from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {
    render(){

        return(
            <>

               <nav className="navbar navbar-expand navbar-dark bg-dark">
                   <div className="row container">

                       <div className="col-8 text-white py-2">
                       <a className="navbar-brand" to="/">
            React Multi-Page Website
          </a>
                        </div>
                    <div className="col-4 py-2">
                        <ul className="navbar-nav ml-auto">
                          <li className="nav-item"> <a className="nav-link" href="/"> Home </a></li> 
                          <li className="nav-item"> <a className="nav-link" href="/"> About </a></li> 
                          <li className="nav-item"> <a className="nav-link" href="/"> Contant </a></li> 
                          <li className="nav-item"> <a className="nav-link" href="/"> Blog </a></li> 
                        </ul>
                    </div>
                   </div>
               </nav>

            </>
        );
    }
}