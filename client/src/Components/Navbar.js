import React from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';
import Auth from './Auth';


export class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: [],
            user:[]
        };

    }

    handleChange = (evt) => {
        // check it out: we get the evt.target.name (which will be either "email" or "password")
        // and use it to target the key on our `state` object with the same name, using bracket syntax
        this.setState({ [evt.target.name]: evt.target.value });

      }

      handleSubmit = (event) => {
        
        event.preventDefault();
        console.log(this.state.email);
        console.log(this.state.password);

        axios.post('/signin', {
            email: this.state.email,
            password: this.state.password
        })
            .then(response => {

                console.log("Response: ");
                console.log(response)
          
                if (response.data.user.message){
                    this.setState({errors:response.data.user.message});
                } else {
                    Auth.authenticateUser(response.data.token, response.data.user);
                    this.props.toggleAuthenticateStatus();
                    console.log(response.data.user)
                    this.props.toggleUser(response.data.user)
                }
            }).catch(error => {
                console.log('Sign in server error');
                console.log(error);
            })
    }

    handleSignOut = (event)=> {


        event.preventDefault();
        console.log("Submitted");
        Auth.deauthenticateUser();

        this.props.toggleAuthenticateStatus();

        axios.get('/signout')
            .then(response => {

                console.log("Response: ");
                console.log(response)
                this.props.history.push(response.data.redirectUrl);
            }).catch(error => {
                console.log('Sign in server error');
                console.log(error);
            })
        
    }




    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <Link className="navbar-brand" to='/'>Creation Station 2</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                    
                        
                        {this.props.isAuth ? (
                            <ul className="nav navbar-nav flex-row justify-content-between ml-auto ">
                                <div className="dropdown mr-1">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonUser" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                     {JSON.parse(localStorage.getItem('token')).user.first_name} {JSON.parse(localStorage.getItem('token')).user.last_name} 
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <Link className="dropdown-item" to="/dashboard">Post a Job</Link>
                                        <Link className="dropdown-item" to="/profile">Profile</Link>
                                    </div>
                                </div>
                                <li className="nav-item">
                                    <button type="submit" value="Submit" onClick={this.handleSignOut} className="btn btn-primary btn-block">Logout</button>
                                </li>
                            </ul>

                        ) : (

                                <ul className="nav navbar-nav flex-row justify-content-between ml-auto ">
                                    <li className="dropdown">
                                        <button type="button" id="dropdownMenu1" data-toggle="dropdown" className="btn btn-outline-secondary dropdown-toggle">Login <span className="caret"></span></button>
                                        <ul className="dropdown-menu dropdown-menu-right mt-2">
                                            <li className="px-3 py-2">
                                                <form className="form" onSubmit={this.handleSubmit}>
                                                    <div className="form-group">
                                                        <input id="emailInput" placeholder="Email" className="form-control form-control-sm" type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                                                    </div>
                                                    <div className="form-group">
                                                        <input id="passwordInput" placeholder="Password" className="form-control form-control-sm" type="text" name="password" value={this.state.password} onChange={this.handleChange} required="" />
                                                    </div>
                                                    <div className="form-group">
                                                        <button type="submit" value="Submit" className="btn btn-primary btn-block">Login</button>
                                                    </div>
                                                    {this.state.errors ? (<p> {this.state.errors} </p>) : (<p />)}
                                                    <div className="form-group text-center">
                                                        <small><Link to='#' data-toggle="modal" data-target="#modalPassword">Forgot password?</Link></small>
                                                    </div>
                                                </form>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item ml-1">
                                        <Link className="btn btn-primary" to='/signup'>Sign Up</Link>

                                    </li>
                                </ul>
                            )}

                        
                    </div>

                </nav>
            </header>
        )
    }
}