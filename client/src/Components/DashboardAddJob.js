import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class DashboardAddJob extends Component {
    render() {
        return (
            <div className="col-md-8 order-md-2 bg-light py-3 rounded">
                <h4 className="mb-3">Add a new Job</h4>
                <form className="needs-validation">
                    <div className="mb-3">
                        <label htmlFor="title">Title</label>
                        <div className="input-group">
                            <input type="text" className="form-control" id="title" placeholder="title" required />
                            <div className="invalid-feedback" style={{ width: "100%" }}>
                                Title is required.
                            </div>
                        </div>
                    </div>

                    <div className="mb-3 form-group">
                        <label htmlFor="description">Description</label>
                        <textarea className="form-control" id="description" rows="3"></textarea>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="address">Address</label>
                        <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                        <div className="invalid-feedback">
                            Please enter your shipping address.
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                        <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                    </div>

                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="state">State</label>
                            <select className="custom-select d-block w-100" id="state" required>
                                <option value="">Choose...</option>
                                <option>Colorado</option>
                            </select>
                            <div className="invalid-feedback">
                                Please provide a valid state.
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label htmlFor="zip">Zip</label>
                            <input type="text" className="form-control" id="zip" placeholder="" required />
                            <div className="invalid-feedback">
                                Zip code required.
                            </div>
                        </div>
                    </div>

                    <hr className="mb-4" />
                    <button className="btn btn-primary btn-lg btn-block" type="submit">Create Job</button>
                </form>
            </div>
        );
    };
}
