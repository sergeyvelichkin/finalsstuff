import React, { Component } from 'react';
import { Dashboard } from '../Components/Dashboard';
import axios from 'axios';

export class DashboardCont extends Component {

    constructor(props) {
        super(props);
        this.state = {
            successMessage: [],
            title: '',
            description: '',
            city: '',
            state: '',
            zip: '',
            cost: ''
            

        };

    }

    handleChange = (field, value) => {
        // parent class change handler is always called with field name and value
        this.setState({[field]: value});
    }

    handleSubmit= (event) => {

        event.preventDefault();

        event.target.reset()


        axios.post('/api/jobs', {
            UserId:JSON.parse(localStorage.getItem('token')).user.id,
            title: this.state.title,
            description: this.state.description,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            cost:this.state.cost
        })
            .then(response => {

                console.log("Response: ");
                console.log(response)

                if (response.status !== 200) {
                    this.setState({ successMessage: "Job was not posted, try again later" });
                } else {
                    this.setState({ successMessage: "Job was succesfully posted"});
                }
            }).catch(error => {
                console.log('Job post error');
                console.log(error);
            })
    }

    render() {
        return (
            <Dashboard
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                errors={this.state.errors}
                successMessage={this.state.successMessage}
            />
        );
    }
}