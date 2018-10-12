import React, {Component} from "react";

export default class Form extends Component{
    constructor(props){
        super(props);
        this.initialState = {
            name: '',
            email: '',
            phone: '',
            gender: '',
            country: '',
            address: ''
        }
        this.state = this.initialState;
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]:value
        })
    }

    submitForm = (event) => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
        event.preventDefault();
    }

    render(){
        const {name, email, phone,gender ,country, address} = this.state;
        return(
            <form>
                <label>Name</label>
                <input 
                    type="text" 
                    name="name" 
                    value={name} 
                    onChange={this.handleChange} />
                <br/>
                <label>Email</label>
                <input 
                    type="email" 
                    name="email" 
                    value={email}
                    onChange={this.handleChange}/>
                <br/>
                <label>Phone</label>
                <input 
                    type="number" 
                    name="phone" 
                    value={phone}
                    onChange={this.handleChange}/>
                <br/>
                <label htmlFor=""> Country: &nbsp;</label>
                <select value={country} name="country" onChange={this.handleChange}>
                    <option >Choose...</option>
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                    <option value="malasia">Malasia</option>
                </select>
                <br/>
                <label htmlFor=""> Address: &nbsp;</label>
                <textarea name="address" defaultValue={address} onChange={this.handleChange} id="" cols="30" rows="3"></textarea>
                <br/>
                <label htmlFor="">Gender : &nbsp;</label>
                <label htmlFor=""><input value="male" onChange={this.handleChange} type="radio" name="gender" id=""/> Male</label>
                <label htmlFor=""><input value="female" onChange={this.handleChange} type="radio" name="gender" id=""/> Female</label>
                <br/>
                <input 
                    type="button" 
                    value="Submit" 
                    onClick={this.submitForm} />

            </form>
        );
    }
}