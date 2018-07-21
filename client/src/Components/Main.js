import React, { Component } from 'react';
import { Footer } from './Footer';
import { Carousel } from './Carousel';
import { JobList } from './JobList';
import { JobDetails } from './JobDetails';
import { Navbar } from './Navbar';
import Auth from './Auth';
import LogoutFunction from './LogoutFunction';


import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter,
    Switch
  } from 'react-router-dom'
import { userInfo } from 'os';


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
      Auth.isUserAuthenticated() ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }}/>
      )
    )}/>
  )
  
  const LoggedOutRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
      Auth.isUserAuthenticated() ? (
        <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }}/>
      ) : (
        <Component {...props} {...rest} />
      )
    )}/>
  )
  
  const PropsRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
      <Component {...props} {...rest} />
    )}/>
  )

export class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
          authenticated: false,
          user:[]

        }
        // this.toggleUser = this.toggleUser.bind(this);
      };
    
      componentDidMount() {
        // check if user is logged in on refresh
        this.toggleAuthenticateStatus()
      }
    
      toggleAuthenticateStatus() {
        // check authenticated status and toggle state based on that
        this.setState({ 
            authenticated: Auth.isUserAuthenticated()
         })

      }

      toggleUser = (user) => {
          console.log('toggleUser')
          console.log(user)
        // check authenticated status and toggle state based on that
        this.setState({ 
            user: user
         })

         console.log(this.state);

      }

    render() {
        return (
            <main role="main">
                <Navbar isAuth={this.state.authenticated} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} toggleUser={this.toggleUser}  />
                <Route exact path="/" component={Carousel} />
                {/* <Route exact path="/logout" component={LogoutFunction} /> */}
                <div className="container marketing">
                    {/* Three columns of text below the carousel */}
                    <Switch>
                        <PropsRoute exact path="/" component={JobList} />
                        <Route path="/jobs/:id" component={JobDetails} />
                    </Switch>
                </div>
                {/* FOOTER */}
                <Footer />
            </main>
        );
    }
}

