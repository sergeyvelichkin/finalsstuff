import React, { Component } from 'react';
import { JobItem } from './JobItem';
import axios from 'axios';


export class JobList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jobs: [],
            message:''
        }
    }

    componentDidUpdate(prevProps){
        if (this.props.jobpath !== prevProps.jobpath) {
            this.fetchData(this.props.jobpath);
          }

    }

    componentDidMount() {
        this.fetchData('');
        this.setState({message:''})

    }

    fetchData(toAdd) {
        let fullPath = '/api/jobs/' + toAdd;
        this.setState({message:''})
        axios.get(fullPath)
            .then(response => {
                let data = response.data;
                if (data.length > 0) {
                    console.log('success', data);
                    this.setState({ jobs: data });
                }else {
                    this.setState({ message: 'No jobs found in your area' });
                }
                
            })
            .catch(function (error) {
                console.log('error', error);
            });
    }



    render() {
        return (
            <div>
                <div className="row">
                    {
                        this.state.message.length === 0  ? (
                            this.state.jobs.map(job => (
                            <JobItem key={job.id} job={job} />
                        ))) : (
                        <div> {this.state.message}</div>
                        )
                    }
                </div>
                <hr className="featurette-divider" />
            </div>
        )
    }
}