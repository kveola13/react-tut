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
    render(){
        return(
            <div></div>
        )
    }
}

export default Reservation