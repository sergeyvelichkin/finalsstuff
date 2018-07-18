import React, { Component } from 'react';
import { JobItem } from './JobItem';
import axios from 'axios';


export class JobList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: []
        }
    }

    componentWillMount() {
        // Make a request for a user with a given ID
        axios.get('/api/jobs')
            .then(response => {
                let data = response.data;
                console.log('success', data);
                this.setState({ jobs: data});
            })
            .catch(function (error) {
                console.log('error', error);
            });
        
    }

    render() {
        console.log('state', this.state.jobs)
        return (

            <div className="row">
                {this.state.jobs.map(job => (
                    <JobItem key={job.id} job={job} />
                ))}
            </div>
        )
    }
}