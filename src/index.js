import ReactDOM from 'react-dom';
import React from 'react'


function Welcome(props){
  return <h1>Hello, {props.name}</h1>
}
/*
---------
These are equal
---------

class Welcome extends React.Component {
  render(){
  return <h1>Hello, {this.props.name}</h1>
  }
}*/

const element = <Welcome name="Ola Fredrik"/>

ReactDOM.render(
  element,
  document.getElementById("root")
)