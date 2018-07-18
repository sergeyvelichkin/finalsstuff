import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class Footer extends Component {
    render() {
        return (
            <footer className="container">
                <p className="float-right"><Link to='#'>Back to top</Link></p>
                <p>&copy; 2017-2018 Creation Station 2 &middot;</p>
            </footer>
        )
    }
}