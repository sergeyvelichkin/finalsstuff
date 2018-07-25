import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Auth from './Auth';

export class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            user: [],
            errors: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        this.handleSignOut = this.handleSignOut.bind(this);
    }

    handleChange(evt) {
        // check it out: we get the evt.target.name (which will be either "email" or "password")
        // and use it to target the key on our `state` object with the same name, using bracket syntax
        this.setState({ [evt.target.name]: evt.target.value });

      }

      componentWillUnmount(){
          localStorage.setItem("state", this.state);
      }

      componentDidMount(){
          this.setState(localStorage.getItem("state"));
      }
      
    
      handleSubmit(event) {
        
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
                }else {
                    Auth.authenticateUser(response.data.token);
                    this.props.toggleAuthenticateStatus();
                    console.log(response.data.user)
                    this.props.toggleUser(response.data.user)
                    this.setState({ user: response.data.user })
                }
            }).catch(error => {
                console.log('Sign in server error');
                console.log(error);
            })
    }

    handleSignOut(event) {


        event.preventDefault();
        console.log("Submitted");
        Auth.deauthenticateUser();

        this.props.toggleAuthenticateStatus();

    }

    handleSignup(event) {

        event.preventDefault();

        console.log(this.state.email);
        console.log(this.state.password);

        axios.post('/signup', {
            email: this.state.email,
            password: this.state.password
        })
            .then(response => {
                console.log(response)

                if (response.data.user.message){
                    this.setState({errors:response.data.user.message});

                }else {

                    console.log('sucessfull sign up');

                    Auth.authenticateUser(response.data.token);

                    this.props.toggleAuthenticateStatus(response.data.user);


                    this.setState({user:response.data.user});

                }
            }).catch(error => {
                console.log('Sign up server error');
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
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to='/'>Home <span className="sr-only">(current)</span></Link>
                            </li>
                        </ul>

                        {this.props.isAuth ? (
                            <ul className="navbar-nav">
                                <div class="dropdown mr-1">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonUser" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {this.state.user.first_name} {this.state.user.last_name}
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <Link class="dropdown-item" to="/dashboard">Dashboard</Link>
                                    </div>
                                </div>
                                <li className="nav-item">
                                    <button type="submit" value="Submit" onClick={this.handleSignOut} className="btn btn-primary btn-block">Logout</button>
                                </li>
                            </ul>
                        ) : (

                                <ul className="nav navbar-nav flex-row justify-content-between ml-auto">
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

                                    {/*<li className="dropdown ml-1">
                                        <button type="button" id="dropdownMenu2" data-toggle="dropdown" className="btn btn-primary dropdown-toggle">Sign up <span className="caret"></span></button>
                                        <ul className="dropdown-menu dropdown-menu-right mt-2">
                                            <li className="px-3 py-2">
                                                <form className="form" onSubmit={this.handleSignup}>
                                                    <div className="form-group">
                                                        <input id="emailInputSignup" placeholder="Email" className="form-control form-control-sm" type="text" name="email" value={this.state.email} onChange={this.handleChange} required="" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input id="passwordInputSignup" placeholder="Password" className="form-control form-control-sm" type="text" required="" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input id="passwordInput" placeholder="Confirm Password" className="form-control form-control-sm" type="text" name="password" value={this.state.password} onChange={this.handleChange} required="" />
                                                    </div>
                                                    <div className="form-group">
                                                        <button type="submit" className="btn btn-primary btn-block">Sign up</button>
                                                    </div>
                                                </form>
                                            </li>
                                        </ul>
                                    </li>*/}
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