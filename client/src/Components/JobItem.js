import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class JobItem extends Component {
    render() {
        
        const {id, title, description, cost} = this.props.job

        return (
            <div className="col-lg-4">
                <img className="rounded-circle" src={`https://picsum.photos/300/?image=${id + 200}`} alt="Generic placeholder" width="140" height="140" />
                <h2>{title}</h2>
                <p className="lead">{description}</p>
                <p>${cost}</p>
                <p><Link className="btn btn-secondary" to={`/jobs/${id}`} role="button">View details &raquo;</Link></p>
            </div>
        )
    }
}