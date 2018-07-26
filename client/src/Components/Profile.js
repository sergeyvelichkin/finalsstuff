import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../bootstrap-social.css';

export class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    };
    componentDidMount() {
        const rehydrate = JSON.parse(localStorage.getItem('someSavedState'))
        console.log('rehydrate from profile', rehydrate)
        this.setState({ user: rehydrate })
    }

    render() {
        const {id, first_name, last_name} = this.state.user
        console.log(id)
        return (
            <div>
                <hr className="featurette-divider" />
                <div className="row">
                    <div className="col-md-4 order-md-1 mb-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <img className="card-img-top" src={`https://picsum.photos/300/?image=${id + 100}`} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">{first_name} {last_name}</h5>
                                <p className="card-text">Photographer</p>
                                <p className="card-text">Photographer</p>
                                <Link to="#" className="btn btn-primary">Edit Profile</Link>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-8 order-md-2 py-3">
                        <h3 className="card-title">{first_name}'s biography</h3>
                        <hr />
                        <p className="card-text">Photographer</p>
                        <p className="card-text">Photographer</p>
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