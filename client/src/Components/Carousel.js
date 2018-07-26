import React, { Component } from 'react';


export class Carousel extends Component {
    render() {
        return (
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="first-slide" src="https://picsum.photos/1400/500/?image=859" alt="First slide" />
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Creation Station 2</h1>
                                <p>Creation Starts Here</p>
                                <form action="#" method="GET">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <input className="form-control keyword" type="text" placeholder="e.g. Arts & Crafts" />
                                        </div>
                                        <div className="col-md-4">
                                            <select className="form-control selecter" name="category" id="search-category">
                                                <option selected="selected" value="">All Categories</option>
            
                                            </select>
                                        </div>
                                        <div className="col-md-4">
                                            <button className="btn btn-block btn-primary"><i className="fa fa-search"></i>
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