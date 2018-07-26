import React, { Component } from 'react';


export class Carousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobpath:""
        };

        this.onFieldChange = this.onFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    onFieldChange(event) {
        // for a regular input field, read field name and value from the event
        const fieldValue = "city/"+event.target.value;
        this.setState({jobpath: fieldValue});
    }

    handleSubmit(event){
        event.preventDefault();
        console.log('Submitted' , this.state.jobpath)
        this.props.onChange(this.state.jobpath);
    }

    componentDidMount(){
        console.log(this.props)
    }

    render() {
        return (
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="first-slide" src="https://picsum.photos/1400/500/?image=859" alt="First slide" />
                        <div className="container">
                            <div className="carousel-caption" style={{marginBottom : 100}}>
                                <h1>Creation Station 2</h1>
                                <p style={{marginTop : 100}}>A Freelancer's Emporium</p>
                                <form action="#" style={{marginTop : 100}} onSubmit={this.handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-9">
                                            <input className="form-control keyword" type="text" placeholder="Where are you?" name="jobpath" onChange={this.onFieldChange} />
                                        </div>
                                        <div className="col-md-3">
                                            <button className="btn btn-block btn-primary" type="submit" value="Submit"><i className="fa fa-search"></i>
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