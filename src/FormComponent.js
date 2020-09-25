import React from "react"

function FormComponent(props) {
    console.log(props.data)
    return (
        <main>
            <form>
                <input type="text" 
                    placeholder="First Name"
                    name="firstName"
                    value={props.data.firstName}
                    onChange={props.handleChange} /><br/>
                <input type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={props.data.lastName}
                    onChange={props.handleChange} /><br/>
                <input type="number"
                    placeholder="Age"
                    min="18"
                    max="60"
                    name="age"
                    value={props.data.age}
                    onChange={props.handleChange} /><br/>
                <label>
                    Gender: 
                    <input type="radio"
                        name="gender"
                        value="Male"
                        checked={props.data.gender==="Male"}
                        onChange={props.handleChange} />
                    Male 
                    <input type="radio"
                        name="gender"
                        value="Female"
                        checked={props.data.gender==="Female"}
                        onChange={props.handleChange} />
                    Female
                </label><br/>
                <select name="destination"
                    value={props.data.destination}
                    onChange={props.handleChange} >
                    <option value="">-- Please Choose Destination --</option>
                    <option value="china">China</option>
                    <option value="japan">Japan</option>
                    <option value="germany">Germany</option>
                    <option value="france">France</option>
                    <option value="england">England</option>
                    <option value="india">India</option>
                </select><br/>
                <label>Diet Restrictions</label><br/>
                <input type="checkbox"
                    name="dietRestrictions"
                    value="pork"
                    checked={props.data.dietRestrictions.includes("pork")}
                    onChange={props.handleChange} />
                <label>Pork</label><br/>
                <input type="checkbox"
                    name="dietRestrictions"
                    value="meat"
                    checked={props.data.dietRestrictions.includes("meat")}
                    onChange={props.handleChange} />
                <label>Meat</label><br/>
                <input type="checkbox"
                    name="dietRestrictions"
                    value="seafood"
                    checked={props.data.dietRestrictions.includes("seafood")}
                    onChange={props.handleChange} />
                <label>Seafood</label><br/>
                <input type="checkbox"
                    name="dietRestrictions"
                    value="lactose"
                    checked={props.data.dietRestrictions.includes("lactose")}
                    onChange={props.handleChange} />
                <label>Lactose</label><br/>
                <input type="checkbox"
                    name="dietRestrictions"
                    value="vegetable"
                    checked={props.data.dietRestrictions.includes("vegetable")}
                    onChange={props.handleChange} />
                <label>Vegetable</label><br/>
                <br/>
                <br/>
                <br/>
                <button>Submit</button>
            </form><br/>
            <h1>Entered Information</h1>
            <p>Your name: {props.data.firstName} {props.data.lastName}</p>
            <p>Your age: {props.data.age}</p>
            <p>Your gender: {props.data.gender}</p>
            <p>Your destination: {props.data.destination}</p>
            <p>Your diet restrictions:</p>
            <ul>
                {props.data.dietRestrictions.map(diet => {
                    return(
                        <li key={diet}>{diet}</li>
                    )
                })}
            </ul>
        </main>
    )
}

export default FormComponent