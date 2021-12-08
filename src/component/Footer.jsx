import React, { Component } from 'react'
import  { createElement } from 'react';

export default class Footer extends Component{
    render(){
        return(
            <>
            
           <footer className="py-3 bg-dark fixed-bottom">
            <div>
            <p className="text-center text-white m-0">
            Copyright &copy; Your Website 2020
            </p>
            </div>
          </footer>
   
            </>
        );
    }
}