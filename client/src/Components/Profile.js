import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../bootstrap-social.css';
import axios from 'axios';
import localStorage from 'localStorage';

export class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dbUser: {}
        }
    };

    componentDidMount(){
        
        // Make a request for a user with a given ID
        axios.get(`/api/users/${this.props.user.id}`)
            .then(response => {
                let data = response.data;
                console.log('success detail data', data);
                this.setState({ dbUser: data});
            })
            .catch(function (error) {
                console.log('error', error);
            });
    };


    render() {
        const {id, first_name, last_name, Jobs} = this.state.dbUser;
        console.log('Jobs in render', Jobs)
        return (
            <div>
                <hr className="featurette-divider" />
                <div className="row">
                    <div className="col-md-4 order-md-1 mb-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <img className="card-img-top" src={`https://picsum.photos/300/?image=${id + 100}`} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">{first_name} {last_name}</h5>
                                <p className="card-text">Graphic Designer</p>
                                <p className="card-text">Photographer</p>
                                <Link to="#" className="btn btn-primary">Edit Profile</Link>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-8 order-md-2 py-3">
                        <h3 className="card-title">{first_name}'s biography</h3>
                        <hr />
                        <p className="card-text">I’m a freelance multi-disciplinary graphic designer who’s delivered creative and engaging solutions across brand identity, print, packaging, and digital media.</p>
                        <p className="card-text">In 2013, my online brand campaign for the Dorsey Children’s Hospital won a GDUSA award, one of the most prestigious honors in the graphic design industry</p>
                        <hr />

                        
                            <div className="my-3 p-3 bg-white rounded box-shadow">
                                <h6 className="border-bottom border-gray pb-2 mb-0">My Jobs</h6>
                                {Jobs && Jobs.map(job => (
                                    <div className="media text-muted pt-3" key={job.id}>
                                    <img src={`https://picsum.photos/32/?image=${job.id + 100}`} alt="" className="mr-2 rounded" />
                                    <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                        <Link to={`/jobs/${job.id}`}><strong className="d-block text-gray-dark">{job.title}</strong></Link>
                                        {job.description}
                                    </p>
                                    </div>
                                ))}
                            </div>
                        

                        <hr />
                        <Link to="#" className="btn btn-social-icon btn-facebook mx-1">
                            <span className="fa fa-facebook"></span>
                        </Link>
                        <Link to="#" className="btn btn-social-icon btn-linkedin mx-1">
                            <span className="fa fa-linkedin"></span>
                        </Link>
                        <Link to="#" className="btn btn-social-icon btn-instagram mx-1">
                            <span className="fa fa-instagram"></span>
                        </Link>
                        <Link to="#" className="btn btn-social-icon btn-pinterest mx-1">
                            <span className="fa fa-pinterest"></span>
                        </Link>
                        <Link to="#" className="btn btn-social-icon btn-twitter mx-1">
                            <span className="fa fa-twitter"></span>
                        </Link>
                    </div>
                </div>

                <hr className="featurette-divider" />
            </div>

        );
    }
}