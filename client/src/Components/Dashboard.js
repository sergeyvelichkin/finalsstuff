import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Dashboard extends Component {
    render() {
        return (
            <div>
                <hr className="featurette-divider" />
                <div className="row">
                    <div className="col-md-4 order-md-1 mb-4">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-muted">Your Dashboard</span>
                        </h4>
                        <div class="list-group mb-3">
                            <Link to="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="my-0">My Jobs</h6>
                                </div>
                                <span className="badge badge-primary badge-pill">3</span>
                            </Link>
                            <Link to="#" class="list-group-item list-group-item-action">
                                <div>
                                    <h6 className="my-0">Add a New Job</h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-8 order-md-2 bg-light py-3">
                        <h4 className="mb-3">Add a new Job</h4>
                        <form className="needs-validation">
                            <div className="mb-3">
                                <label for="title">Title</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" id="title" placeholder="title" required />
                                    <div className="invalid-feedback" style={{ width: "100%" }}>
                                        Title is required.
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3 form-group">
                                <label for="description">Description</label>
                                <textarea class="form-control" id="description" rows="3"></textarea>
                            </div>

                            <div className="mb-3">
                                <label for="address">Address</label>
                                <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                                <div className="invalid-feedback">
                                    Please enter your shipping address.
                                </div>
                            </div>

                            <div className="mb-3">
                                <label for="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                                <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                            </div>

                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <label for="state">State</label>
                                    <select className="custom-select d-block w-100" id="state" required>
                                        <option value="">Choose...</option>
                                        <option>California</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please provide a valid state.
                                    </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label for="zip">Zip</label>
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
                </div>

                <hr className="featurette-divider" />
            </div>

        );
    }
}