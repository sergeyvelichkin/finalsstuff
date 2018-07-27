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

    componentDidUpdate(prevProps){
        if (this.props.jobpath !== prevProps.jobpath) {
            this.fetchData(this.props.jobpath);
          }

    }

    componentDidMount() {
        this.fetchData('');

    }

    fetchData(toAdd) {
        let fullPath = '/api/jobs/' + toAdd;
        axios.get(fullPath)
            .then(response => {
                let data = response.data;
                console.log('success', data);
                this.setState({ jobs: data });
            })
            .catch(function (error) {
                console.log('error', error);
            });
    }



    render() {
        return (
            <div>
                <div className="row">
                    {this.state.jobs.map(job => (
                        <JobItem key={job.id} job={job} />
                    ))}
                </div>
                <hr className="featurette-divider" />
            </div>
        )
    }
}