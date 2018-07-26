import React, { Component } from 'react';

export class Signup extends Component {
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
                        <form className="needs-validation">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label>First name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="" value="" required />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="lastName">Last name</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="" required />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                                <div className="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password">Password</label>
                                <div className="input-group">
                                    <input type="password" className="form-control" id="password" placeholder="password" required />
                                    <div className="invalid-feedback" style={{ width: "100%" }}>
                                        Your password is required.
                                    </div>
                                </div>
                            </div>

                            <hr className="mb-4" />
                            <button className="btn btn-primary btn-lg btn-block" type="submit">Sign Up</button>
                        </form>
                    </div>
                </div>

                <hr className="featurette-divider" />
            </div>

        );
    }
}