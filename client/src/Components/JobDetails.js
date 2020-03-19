import React, { Component } from 'react';
import axios from 'axios';
import * as moment from 'moment';


export class JobDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            job: {}
        }
    }


    componentDidMount(){

        const { id } = this.props.match.params
        console.log('Props of job details')
        console.log(this.props)
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
        
        const {id, title, description, address, cost, createdAt} = this.state.job

        return (
            <div>
                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7 col-xs-8 text-center">
                        <h2 className="featurette-heading">{title}</h2>
                        <p style={{fontSize: "0.9rem"}}>{description}</p>
                        <p className="lead">${cost}</p>
                        <p className="lead">{address}</p>
                        <p style={{fontSize: "0.7rem"}}>was posted {moment(createdAt).fromNow()}</p>
                        
                        <div className='text-center'> 
                             <button type="button" style={{marginBottom: "15px"}}  className="btn btn-success">Apply</button>
                        </div>
                        
                    </div>
                    <div className="col-md-5 col-xs-8">
                        <img className="featurette-image img-fluid mx-auto" src={`https://picsum.photos/500/?image=${id + 200}`} alt="Generic placeholder" />
                    </div>
                </div>

                <hr className="featurette-divider" />
            </div>
        )
    }
}