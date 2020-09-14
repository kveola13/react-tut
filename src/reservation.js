import React from 'react'

class Reservation extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event){
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <form>
                <label>
                    Is going:
                    <input
                    name="isGoing"
                    type="checkbox"
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}>
                    </input>
                </label>
                <br/>
                <label>
                    Number of guests:
                    <input
                    name="numberOfGuests"
                    type="number"
                    value={this.state.numberOfGuests}
                    onChange={this.handleInputChange}>
                    </input>
                </label>
            </form>
        )
    }
}

export default Reservation