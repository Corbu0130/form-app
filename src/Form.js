import React from "react"

import FormComponent from "./FormComponent"

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            dietRestrictions: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type} = event.target
        type==="checkbox" ? 
        this.setState(state0 => {
            const arr = state0.dietRestrictions
            const ind = arr.indexOf(value)
            let myarr
            if (ind===-1) {
                myarr = arr.concat(value)
            }
            else {
                arr.splice(ind,1)
                myarr = arr
            }
            return {[name]: myarr}
        }) :
        this.setState({[name]: value})
    }

    render(){
        return (
            <FormComponent handleChange={this.handleChange}
                data={this.state} />
        )
    }
}

export default Form