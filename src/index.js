import ReactDOM from 'react-dom';
import React from 'react'

function formatName(user) {
  return user.firstName + " " + user.lastName
}

const user = {
  firstName: "Ola",
  lastName: "Kveli"
}

const element = (
  <h1>
    Hello, {formatName(user)}
  </h1>
)

ReactDOM.render(
    element,
    document.getElementById('root')
)
