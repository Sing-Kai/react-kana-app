
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


export default class Home extends Component {



  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to='/quiz'>Start Quiz</Link>
      </div>
    )
  }
}
