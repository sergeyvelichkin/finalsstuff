import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Dashboard extends Component {

    
    onFieldChange(event) {
        // for a regular input field, read field name and value from the event
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        this.props.onChange(fieldName, fieldValue);
    }


    render() {
        return (
            <div>
                <hr className="featurette-divider" />
                <div className="row">
                    <div className="col-md-4 order-md-1 mb-4">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-muted">Your Dashboard</span>
                        </h4>
                        <div className="list-group mb-3">
                            <Link to="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="my-0">My Jobs</h6>
                                </div>
                                <span className="badge badge-primary badge-pill">3</span>
                            </Link>
                            <Link to="#" className="list-group-item list-group-item-action">
                                <div>
                                    <h6 className="my-0">Add a New Job</h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-8 order-md-2 bg-light py-3">
                        <h4 className="mb-3">Add a new Job</h4>
                        <form className="needs-validation" onSubmit={this.props.onSubmit}>
                            <div className="mb-3">
                                <label>Title</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" id="title" placeholder="title" name="title" onChange={this.onFieldChange.bind(this)} required />
                                    <div className="invalid-feedback" style={{ width: "100%" }}>
                                        Title is required.
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3 form-group">
                                <label>Description</label>
                                <textarea className="form-control" id="description" rows="3" name="description"  onChange={this.onFieldChange.bind(this)}></textarea>
                            </div>

                            <div className="mb-3">
                                <label>City</label>
                                <input type="text" className="form-control" id="City" placeholder="Denver" name="city"  onChange={this.onFieldChange.bind(this)} required />
                                <div className="invalid-feedback">
                                    Please provide city name
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-6">
                                    <label>State</label>
                                    <select className="custom-select d-block w-100" id="state" name="state"  onChange={this.onFieldChange.bind(this)} required>
                                        <option value="">Choose...</option>
                                        <option value="California">California</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please provide a valid state.
                                    </div>
                                </div>
                                <div className="col-md-6 mb-6">
                                    <label>Zip</label>
                                    <input type="text" className="form-control" id="zip" placeholder="zip code" name="zip"  onChange={this.onFieldChange.bind(this)} required />
                                    <div className="invalid-feedback">
                                        Zip code required.
                                    </div>
                                </div>
                            </div>

                            <div className='row'>

                                 <div className="col-md-12 mb-12">
                                    <label>Cost</label>
                                    <input type="text" className="form-control" id="cost" placeholder="How much you can pay?" name="cost"  onChange={this.onFieldChange.bind(this)} required />
                                    <div className="invalid-feedback">
                                        You need to put price.
                                    </div>
                                </div>

                            </div>

                            {this.props.successMessage ? (<p className="success-message">{this.props.successMessage}</p>) : (<p/>)}
                            <hr className="mb-4" />
                            <button className="btn btn-primary btn-lg btn-block" type="submit" value="Submit">Create Job</button>
                        </form>
                    </div>
                </div>

                <hr className="featurette-divider" />
            </div>

        );
    }
}