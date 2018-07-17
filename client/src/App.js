import React, { Component } from 'react';
import './App.css';
import { Navbar } from './Components/Navbar';
import { JobDetails } from './Components/JobDetails';
import { JobItem } from './Components/JobItem';
import { Footer } from './Components/Footer';
import { Carousel } from './Components/Carousel';
import { JobList } from './Components/JobList';

class App extends Component {
    constructor() {
        super();
        this.state = {
            jobs: []
        }
    }

    render() {
        return (

            <div className="App">
                <Navbar />
                <main role="main">
                    <Carousel />
                    <div className="container marketing">
                        {/* Three columns of text below the carousel */}
                        <JobList />
                    </div>
                    {/* FOOTER */}
                    <Footer />
                </main>

            </div>
        );
    }
}

export default App;
