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

export default Calculator