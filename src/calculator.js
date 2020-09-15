import React from 'react'
import TemperatureInput from './temperatureinput'

class Calculator extends React.Component{
    render(){
        return(
            <div>
                <TemperatureInput scale="c" />
                <TemperatureInput scale="f" />
            </div>
        )
    }
}

function BoilingVerdict(props){
    if(props.celsius>= 100){
        return <p>The water would boil</p>
    }
    return <p>The water would not boil</p>
}

function toCelsius(fahrenheit){
    return (fahrenheit - 32) * 5 / 9
}

function toFahrenheit(celsius){
    return (celsius * 9 / 5) + 32
}

function tryConvert(temperature, convert){
    const input = parseFloat(temperature)
    if(Number.isNaN(input)){
        return ""
    }
    const output = convert(input)
    const rounded = Math.round(output * 1000) / 1000
    return rounded.toString()
}

export default Calculator