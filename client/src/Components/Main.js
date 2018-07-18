import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Footer } from './Footer';
import { Carousel } from './Carousel';
import { JobList } from './JobList';
import { JobDetails } from './JobDetails';

export class Main extends Component {
    render() {
        return (
            <main role="main">
                <Route exact path="/" component={Carousel} />
                <div className="container marketing">
                    {/* Three columns of text below the carousel */}
                    <Switch>
                        <Route exact path="/" component={JobList} />
                        <Route path="/jobs/:id" component={JobDetails} />
                    </Switch>
                </div>
                {/* FOOTER */}
                <Footer />
            </main>
        );
    }
}

