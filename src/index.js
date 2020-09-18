import ReactDOM from 'react-dom';
import React from 'react'
import Clock from './clock'
import Toggle from './toggle'
import LoggingButton from './loggingbutton';
import Greeting from './usergreeting';
import LoginControl from './logincontrol';
import Mailbox from './mailbox';
import Page from './page';
import NumberList from './numberlist';
import Blog from './blog';
import NameForm from './nameform';
import EssayForm from './essayform';
import FlavorForm from './flavorform';
import Reservation from './reservation';
import Calculator from './calculator';
import { SplitPane } from './splitpane';
import SignUpDialog from './signupdialog';
import FilterableProductTable from './productcategoryrow';

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
  const numbers = [1,2,3,4,5]
  const messages = ['React', 'RE:React', 'RE:RE: React']
  const posts = [
    {id: 1, title: 'Hello world', content: 'Learning React'},
    {id: 2, title: 'Installation', content: 'Install react from npm'}
  ]
  const PRODUCTS = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
]
  return(
    <div>
      <Welcome name="John Smith" />
      <Welcome name="Jane Doe" />
      <Welcome name="Matt Murdock" />
      <Clock />
      <Toggle />
      <LoggingButton />
      <Greeting isLoggedIn={false}/>
      <LoginControl />
      <Mailbox unreadMessages={messages}/>
      <Page />
      <NumberList numbers={numbers}/>
      <Blog posts={posts} />
      <NameForm />
      <EssayForm />
      <FlavorForm />
      <Reservation />
      <Calculator/>
      <SignUpDialog />
      <SplitPane />
      <FilterableProductTable products={PRODUCTS}/>
      </div>
  )
}
  ReactDOM.render(
      <App />,
      document.getElementById('root')
  )