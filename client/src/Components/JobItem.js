import React from 'react';


export class JobItem extends React.Component {
    render() {
        return (
            <div className="col-lg-4">
                <img className="rounded-circle" src="https://picsum.photos/300/?random" alt="Generic placeholder image" width="140" height="140" />
                <h2>Heading</h2>
                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
            </div>
        )
    }
}