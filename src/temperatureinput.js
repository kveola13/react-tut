import React from 'react'

class TemperatureInput extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state={
            temperature: ''
        }
    }

    handleChange(event){
        this.setState({temperature: event.target.value})
    }
    render(){
        const temperature = this.state.temperature
        const scale = this.props.scale
        return(
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                onChange={this.handleChange} />
            </fieldset>
        )
    }
}

const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit"
}

export default TemperatureInput