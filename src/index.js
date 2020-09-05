import ReactDOM from 'react-dom';
import React from 'react'
import Clock from './clock'

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

//const element = <Welcome name="Ola Fredrik"/>

function App(){
  return(
    <div>
      <Welcome name="John Smith" />
      <Welcome name="Jane Doe" />
      <Welcome name="Matt Murdock" />
      <Clock />
      <Clock />
      <Clock />
    </div>
  )
}

  ReactDOM.render(
      <App />,
      document.getElementById('root')
  )