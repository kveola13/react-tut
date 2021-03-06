import React from 'react'

class FlavorForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value: "grapefruit"
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
        this.setState({value: event.target.value})
    }

    handleSubmit(event){
        alert("Your fave flavor is " + this.state.value)
        event.preventDefault()
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your fave flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="coconut">Coconut</option>
                        <option value="lime">Lime</option>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="pinapple">Pineapple</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default FlavorForm