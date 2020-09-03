import ReactDOM from 'react-dom';
import React from 'react'

function formatName(user) {
  return user.firstName + " " + user.middleName + " " + user.lastName
}

const user = {
  firstName: "Ola",
  middleName: "Fredrik Ansnes",
  lastName: "Kveli"
}

const nameElement = (
  <h1>
    Hello, {formatName(user)}
  </h1>
)

console.log(nameElement)

function tick() {
  const element = (
    <div>
      <h1>
        Hello, World!
      </h1>
      <h2>
        It is {new Date().toLocaleTimeString()}.
      </h2>
    </div>
  )
  ReactDOM.render(
    element,
    document.getElementById('root')
  )
}

setInterval(tick, 1000)