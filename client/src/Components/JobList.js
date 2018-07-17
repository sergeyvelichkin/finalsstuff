import React from 'react';
import { JobItem } from './JobItem';


export class JobList extends React.Component {
    render() {
        return (
            <div className="row">
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
            </div>
        )
    }
}