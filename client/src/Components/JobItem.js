import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class JobItem extends Component {
    
    render() {
        const {title, description, address, cost} = this.props.job
        return (
            <div className="col-lg-4">
                <img className="rounded-circle" src="https://picsum.photos/300/?random" alt="Generic placeholder" width="140" height="140" />
                <h2>{title}</h2>
                <p className="lead">{description}</p>
                <p>${cost}</p>
                <p>{address}</p>
                <p><Link className="btn btn-secondary" to={`/jobs/${title}`} role="button">View details &raquo;</Link></p>
            </div>
        )
    }
}