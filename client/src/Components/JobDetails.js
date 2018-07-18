import React, { Component } from 'react';
import axios from 'axios';


export class JobDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            job: {}
        }
    }

    componentDidMount(){

        const { id } = this.props.match.params
        console.log('This is the job id', id)

        // Make a request for a job with a given ID
        axios.get(`/api/jobs/${id}`)
            .then(response => {
                let data = response.data;
                console.log('success detail data', data);
                this.setState({ job: data});
            })
            .catch(function (error) {
                console.log('error', error);
            });
    };

    render() {
        
        const {id, title, description, address, cost} = this.state.job

        return (
            <div>
                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">{title}. <span className="text-muted">{description}.</span></h2>
                        <p className="lead">${cost}</p>
                        <p className="lead">{address}</p>
                    </div>
                    <div className="col-md-5">
                        <img className="featurette-image img-fluid mx-auto" src={`https://picsum.photos/500/?image=${id + 100}`} alt="Generic placeholder" />
                    </div>
                </div>

                <hr className="featurette-divider" />
            </div>
        )
    }
}