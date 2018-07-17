import React, { Component } from 'react';


export class JobDetails extends Component {
    render() {
        return (
            <div>
                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
                        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                    </div>
                    <div className="col-md-5">
                        <img className="featurette-image img-fluid mx-auto" src="https://picsum.photos/500/?random" alt="Generic placeholder" />
                    </div>
                </div>

                <hr className="featurette-divider" />
            </div>
        )
    }
}