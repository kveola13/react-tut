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

//const element = <Welcome name="Ola Fredrik"/>

function App(){
  return(
    <div>
      <Welcome name="John Smith" />
      <Welcome name="Jane Doe" />
      <Welcome name="Matt Murdock" />
    </div>
  )
}

function Clock(props) {
  return(
      <div>
          <h1>Hello, World</h1>
          <h2>It is {props.date.toLocaleTimeString()}.</h2>
      </div>
  )
}

function tick(){
  ReactDOM.render(
      <Clock date={new Date()}/>,
      document.getElementById('root')
  )
}

setInterval(tick, 1000)