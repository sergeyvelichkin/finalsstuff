import React, { Component } from 'react';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Main } from './Components/Main';

class App extends Component {

    render() {
        return (

            <div className="App">
                <Navbar />
                <Main />
            </div>
        );
    }
}

export default App;
