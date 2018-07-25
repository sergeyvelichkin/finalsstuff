import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DashboardAddJob } from './DashboardAddJob';
import { DashboardJobList } from './DashboardJobList';
import {
    Route,
    Redirect,
    Switch
  } from 'react-router-dom';

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
                    <Switch>
                        <Route path="/dashboard/addjob" component={DashboardAddJob} />
                        <Route exact path="/dashboard" component={DashboardJobList} />
                    </Switch>
                    
                </div>
                
                <hr className="featurette-divider" />
            </div>

        );
    }
}