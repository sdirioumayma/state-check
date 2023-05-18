import './App.css';
import photo from './photo1.jpg'

import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
  // state:
    this.state = {
       fullName: "",
       bio: "", 
       imgSrc: "" ,
       profession: " ",
       shows: true,    
    }
  }
  //  handler:
  handleClick(){
    if(this.state.shows) {
      this.setState({
        fullName: "sdiri oumayma",
        bio:"learning web developement",
        profession:"student", 
        imgSrc: photo
      })
    }
  }

  render() {
    return (
      <div className="Start">
       <button onClick={()=>this.handleClick()}>shows</button>
       <div  className='demo'>
       <div className='container'>
       <img src={this.state.imgSrc} /> 
      <h2>{this.state.fullName}</h2> 
      <p>{this.state.bio}</p>
      <p>{this.state.profession}</p>
      </div>
      </div>
      </div>
    )
  }
}

export default App

