import React from "react"

function FancyBorder(props){
    return(
        <div className={"FancyBorder FancyBorder-" + props.color}>
            {props.children}
        </div>
    )
}

function Dialog(props){
    return(
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    )
}

class SignUpDialog extends React.Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSignUp = this.handleSignUp.bind(this)
        this.state = {
            login: ""
        }
    }

    handleChange(event){
        this.setState({login: event.target.value})
    }

    handleSignUp(){
        alert(`Welcome aboard, ${this.state.login}!`)
    }

    render(){
        return(
            <Dialog title="World exploration program"
            message="Team America?">
                <input value={this.state.login}
                onChange={this.handleChange}/>
                <button onClick={this.handleSignUp}>
                    Sign up!
                </button>
            </Dialog>
        )
    }
}

export default SignUpDialog