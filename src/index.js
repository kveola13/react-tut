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
        
      </h1>
      <h2>

      </h2>
    </div>
  )
}

ReactDOM.render(
    tick.element,
    document.getElementById('root')
)
