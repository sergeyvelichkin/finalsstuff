import React, { Component } from 'react';
import { Footer } from './Footer';
import { Carousel } from './Carousel';
import { JobList } from './JobList';
import { JobDetails } from './JobDetails';

import { AddJob } from './AddJob';
import { Navbar } from './Navbar';
import Auth from './Auth';


import {
    Route,
    Switch
  } from 'react-router-dom';


export class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
          authenticated: false,
          user:[]

        }
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
                <Navbar isAuth={this.state.authenticated} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} toggleUser={this.toggleUser} user={this.state.user}  />
                <Route exact path="/" component={Carousel} />
                {/* <Route exact path="/logout" component={LogoutFunction} /> */}
                <div className="container marketing">
                    {/* Three columns of text below the carousel */}
                    <Switch>

                        <Route exact path="/" component={JobList} />
                        <Route path="/dashboard/" component={AddJob} />
                        <Route path="/jobs/:id" component={JobDetails} />
                    </Switch>
                </div>
                {/* FOOTER */}
                <Footer />
            </main>
        );
    }
}

