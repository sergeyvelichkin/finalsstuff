import React, { Component } from 'react';
import { JobItem } from './JobItem';


export class JobList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: []
        }
    }

    componentWillMount() {
        let items = [
            {
                title: "Test 1",
                description: "Lorem Ipsum",
                completed: true,
                address: "6471 Xavier Ct",
                cost: 30
            },
            {
                title: "Test 2",
                description: "Lorem Ipsum",
                completed: true,
                address: "6471 Xavier Ct",
                cost: 30
            },
            {
                title: "Test 3",
                description: "Lorem Ipsum",
                completed: true,
                address: "6471 Xavier Ct",
                cost: 30
            },
            {
                title: "Test 4",
                description: "Lorem Ipsum",
                completed: true,
                address: "6471 Xavier Ct",
                cost: 30
            },
            {
                title: "Test 5",
                description: "Lorem Ipsum",
                completed: true,
                address: "6471 Xavier Ct",
                cost: 30
            },
        ];
        this.setState({jobs: items});
    }

    render() {
        console.log('state', this.state.jobs)
        return (
            
            <div className="row">
                {this.state.jobs.map(job => (
                    <JobItem key={job.title} job={job}/>
                ))}
            </div>
        )
    }
}