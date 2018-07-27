import React, { Component } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Carousel } from './Carousel';
import { JobList } from './JobList';
import { JobDetails } from './JobDetails';
import { DashboardCont } from '../Containers/DashboardCont';
import { Profile } from './Profile';
import { Signup } from './Signup';
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
          user:[],
          jobpath:""

        }
      };
      
      changePath = (value) => {
        console.log('received : ', value)
        this.setState({jobpath:value})
      }

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
                <Navbar 
                  isAuth={this.state.authenticated} 
                  toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} 
                  toggleUser={this.toggleUser} 
                  user={this.state.user}  
                />
                <Route exact path="/" render={()=><Carousel onChange={this.changePath} />}  />
                {/* <Route exact path="/logout" component={LogoutFunction} /> */}
                <div className="container marketing">
                    {/* Three columns of text below the carousel */}
                    <Switch>

                        <Route exact path="/" render={()=><JobList jobpath={this.state.jobpath} />} />
                        <Route path="/signup/" component={Signup} />
                        <Route path="/dashboard/" component={DashboardCont} />
           
                        <Route path="/signup" component={Signup} />
                        <Route path="/dashboard" component={DashboardCont} />
                        <Route path="/profile" render={()=><JobList user={this.state.user} />}/>
                        <Route path="/jobs/:id" component={JobDetails} />

                    </Switch>
                </div>
                {/* FOOTER */}
                <Footer />
            </main>
        );
    }
}

