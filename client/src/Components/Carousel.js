import React from 'react';


export class Carousel extends React.Component {
    render() {
        return (
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="first-slide" src="https://picsum.photos/1400/500/?random" alt="First slide" />
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Example headline.</h1>
                                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                <form action="#" method="GET">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <input className="form-control keyword" type="text" placeholder="e.g. Mobile Sale" />
                                        </div>
                                        <div className="col-md-4">
                                            <select className="form-control selecter" name="category" id="search-category">
                                                <option selected="selected" value="">All Categories</option>
            
                                            </select>
                                        </div>
                                        <div className="col-md-4">
                                            <button className="btn btn-block btn-primary  "><i className="fa fa-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
            
                    </div>
                </div>
            </div>
        )
    }
}