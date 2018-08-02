import React, { Component } from 'react';
import axios from 'axios';

export class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            successMessage: [],
            firstname: '',
            lastname: '',
            email: '',
            password: '',

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(evt) {
        // check it out: we get the evt.target.name (which will be either "email" or "password")
        // and use it to target the key on our `state` object with the same name, using bracket syntax
        this.setState({ [evt.target.name]: evt.target.value });

      }

    handleSubmit(event) {

        event.preventDefault();

        console.log("Send to server:")
        console.log(this.state);


        axios.post('/api/signup', {
            first_name: this.state.firstname,
            last_name: this.state.lastname,
            email: this.state.email,
            password:this.state.password
        })
            .then(response => {

                console.log("Response: ");
                console.log(response)

                if (response.data.user.message) {
                    this.setState({ successMessage: response.data.user.message });
                } else {
                    this.setState({ successMessage: "User created, try to logIn" });
                }
            }).catch(error => {
                console.log('Sign Up error');
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <hr className="featurette-divider" />
                <div className="row">
                    <div className="col-md-4 order-md-1 mb-4">

                        <img src="https://picsum.photos/350/410/?image=859" className="img-fluid rounded" alt="Responsive" />
                    </div>
                    <div className="col-md-8 order-md-2 bg-light py-3 rounded">
                        <h4 className="mb-3">Join Us</h4>
                        <form className="needs-validation" onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label>First name</label>
                                    <input type="text" className="form-control" id="firstName" name="firstname" placeholder="First name" onChange={this.handleChange} required />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="lastName">Last name</label>
                                    <input type="text" className="form-control" id="lastName" name="lastname" placeholder="Last name" onChange={this.handleChange} required />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" name="email" onChange={this.handleChange} placeholder="you@example.com" />
                                <div className="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password">Password</label>
                                <div className="input-group">
                                    <input type="password" className="form-control" id="password" placeholder="password" name="password" onChange={this.handleChange} required />
                                    <div className="invalid-feedback" style={{ width: "100%" }}>
                                        Your password is required.
                                    </div>
                                </div>
                            </div>


                            
                            {this.state.successMessage.length > 0 &&
                                    <div className="alert alert-success my-1" role="alert">
                                        {this.state.successMessage}
                                    </div>
                                    
                            }
                            <hr className="mb-4" />
                            <button className="btn btn-primary btn-lg btn-block" type="submit" value="Submit">Sign Up</button>
                        </form>
                    </div>
                </div>

                <hr className="featurette-divider" />
            </div>

        );
    }
}