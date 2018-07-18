import React from 'react';
import { Link } from 'react-router-dom';


export class Navbar extends React.Component {
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
                        <ul className="nav navbar-nav flex-row justify-content-between ml-auto">
                            <li className="dropdown order-0">
                                <button type="button" id="dropdownMenu1" data-toggle="dropdown" className="btn btn-outline-secondary dropdown-toggle">Login <span className="caret"></span></button>
                                <ul className="dropdown-menu dropdown-menu-right mt-2">
                                    <li className="px-3 py-2">
                                        <form className="form">
                                            <div className="form-group">
                                                <input id="emailInput" placeholder="Email" className="form-control form-control-sm" type="text" required="" />
                                            </div>
                                            <div className="form-group">
                                                <input id="passwordInput" placeholder="Password" className="form-control form-control-sm" type="text" required="" />
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" className="btn btn-primary btn-block">Login</button>
                                            </div>
                                            <div className="form-group text-center">
                                                <small><Link to='#' data-toggle="modal" data-target="#modalPassword">Forgot password?</Link></small>
                                            </div>
                                        </form>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown order-1 ml-1">
                                <button type="button" id="dropdownMenu2" data-toggle="dropdown" className="btn btn-primary dropdown-toggle">Sign up <span className="caret"></span></button>
                                <ul className="dropdown-menu dropdown-menu-right mt-2">
                                    <li className="px-3 py-2">
                                        <form className="form">
                                            <div className="form-group">
                                                <input id="emailInputSignup" placeholder="Email" className="form-control form-control-sm" type="text" required="" />
                                            </div>
                                            <div className="form-group">
                                                <input id="passwordInputSignup" placeholder="Password" className="form-control form-control-sm" type="text" required="" />
                                            </div>
                                            <div className="form-group">
                                                <input id="passwordInput" placeholder="Confirm Password" className="form-control form-control-sm" type="text" required="" />
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" className="btn btn-primary btn-block">Sign up</button>
                                            </div>
                                        </form>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}