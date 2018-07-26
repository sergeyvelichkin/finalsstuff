import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class JobItem extends Component {
    render() {
        
        const {id, title, cost} = this.props.job

        return (
            <div className="col-md-3 col-sm-6">
                <img className="rounded-circle" src={`https://picsum.photos/300/?image=${id + 111}`} alt="Generic placeholder" width="140" height="140" />
                <h2>{title}</h2>
                <p>${cost}</p>
                <p><Link className="btn btn-secondary" to={`/jobs/${id}`} role="button">View details &raquo;</Link></p>
            </div>
        )
    }
}