import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Dashboard extends Component {

    
    onFieldChange = (event) => {
        // for a regular input field, read field name and value from the event
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        this.props.onChange(fieldName, fieldValue);
    }

    cancelCourse = () => { 
        document.getElementById("create-course-form").reset();
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

                            <Link to="/dashboard" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="my-0">My Jobs</h6>
                                </div>
                                <span className="badge badge-primary badge-pill">3</span>
                            </Link>

                            <Link to="/dashboard/addjob" className="list-group-item list-group-item-action">
                                <div>
                                    <h6 className="my-0">Add a New Job</h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-8 order-md-2 bg-light py-3">
                        <h4 className="mb-3">Add a new Job</h4>
                        <form id="create-course-form" className="needs-validation" onSubmit={this.props.onSubmit}>
                            <div className="mb-3">
                                <label>Title</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" id="title" placeholder="title" name="title" onChange={this.onFieldChange} required />
                                    <div className="invalid-feedback" style={{ width: "100%" }}>
                                        Title is required.
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3 form-group">
                                <label>Description</label>
                                <textarea className="form-control" id="description" rows="3" name="description"  onChange={this.onFieldChange}></textarea>
                            </div>

                            <div className="mb-3">
                                <label>City</label>
                                <input type="text" className="form-control" id="City" placeholder="Denver" name="city"  onChange={this.onFieldChange} required />
                                <div className="invalid-feedback">
                                    Please provide city name
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-6">
                                    <label>State</label>
                                    <select className="custom-select d-block w-100" id="state" name="state"  onChange={this.onFieldChange} required>
                                        <option value="">Choose...</option>
                                        <option value="AL">Alabama</option>
                                        <option value="AK">Alaska</option>
                                        <option value="AZ">Arizona</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="CA">California</option>
                                        <option value="CO">Colorado</option>
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="DC">District Of Columbia</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="HI">Hawaii</option>
                                        <option value="ID">Idaho</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IN">Indiana</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">Massachusetts</option>
                                        <option value="MI">Michigan</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MO">Missouri</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NV">Nevada</option>
                                        <option value="NH">New Hampshire</option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">North Carolina</option>
                                        <option value="ND">North Dakota</option>
                                        <option value="OH">Ohio</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="OR">Oregon</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">South Carolina</option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="TX">Texas</option>
                                        <option value="UT">Utah</option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WA">Washington</option>
                                        <option value="WV">West Virginia</option>
                                        <option value="WI">Wisconsin</option>
                                        <option value="WY">Wyoming</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please provide a valid state.
                                    </div>
                                </div>
                                <div className="col-md-6 mb-6">
                                    <label>Zip</label>
                                    <input type="text" className="form-control" id="zip" placeholder="zip code" name="zip"  onChange={this.onFieldChange} required />
                                    <div className="invalid-feedback">
                                        Zip code required.
                                    </div>
                                </div>
                            </div>

                            <div className='row'>

                                 <div className="col-md-12 mb-12">
                                    <label>Cost</label>
                                    <input type="text" className="form-control" id="cost" placeholder="How much you can pay?" name="cost"  onChange={this.onFieldChange} required />
                                    <div className="invalid-feedback">
                                        You need to put price.
                                    </div>
                                </div>

                            </div>

                            {
                                this.props.successMessage.length > 0 &&
                                    <div className="alert alert-success my-1" role="alert">
                                        {this.props.successMessage}
                                    </div>
                                    
                            }
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