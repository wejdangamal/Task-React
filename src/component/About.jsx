import React, { Component } from 'react'
import  { createElement } from 'react';
export default class About extends Component {
    render(){
        return(
            <>
            <div className="about">
            <div className="row container align-items-center m-3 p-3">
            <div className="col-7">
                <img className="img-fluid rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGjobmTS8GRKRoIikf7eQkHxmFW9jB5im9YQ&usqp=CAU"/>
            </div>
            <div className="col-5">
            <h1 className="font-weight-light">About</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          </div>
            </div>
            </>
        );
    }
}