import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';
import Select from 'react-select';

// import { variationPlacements } from '@popperjs/core';

// import NumberFormat from 'react-number-format';
// var NumberFormat = require('react-number-format');


// Ito ba yun?
// hindi sir
// Anong component?
export default class WaterBegBalance extends Component {
    // state = {
    //     showModal: true
    //   };

    //   openModal = () => {
    //     this.setState({ showModal: true });
    //   };

    //   closeModal = () => {
    //     this.setState({ showModal: false });
    //   };


    constructor(props) {
        super(props);

        this.state = {
            owners_name: "",
            building_no: "",
            unit_num: "",
            water_m_num: "",
            electric_m_num: "",
            condodues: ""
        }

        // this.onFullNameChange = this.onFullNameChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onValueChange = this.onValueChange.bind(this);

    }

    componentDidMount() {
        axios.get('http://localhost:4000/billing/edit-for-owners-info/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    owners_name: res.data.owners_name,
                    building_no: res.data.building_no,
                    unit_num: res.data.unit_num,
                    water_m_num: res.data.water_m_num,
                    electric_m_num: res.data.electric_m_num,
                    condodues: res.data.condodues

                })

            })
            .catch(error => {
                console.log(error);
            })
    }



    onValueChange(e) {
        this.setState({
            [e.target.dataset.name]: e.target.value

        })
    }

    onSubmit(e) {
        e.preventDefault();

        const owners_detail = {
            owners_name: this.state.owners_name,
            building_no: this.state.building_no,
            unit_num: this.state.unit_num,
            water_m_num: this.state.water_m_num,
            w_begging_balance: this.state.w_begging_balance
        }

        axios.post('http://localhost:4000/billing/add_w_beg_bal', owners_detail)
            .then(res => window.location = "/list-of-owners")
            // .then(res => console.log(res.data))
            .catch(err => console.log('Error :' + err));
    }
    render() {

        return (
            <div className="container" style={{ marginTop: 30 }}>

                <h1>Add Beg. Balance for Water</h1>

                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Owner's Name</label>
                        <input type="text" className="form-control" data-name="owners_name" required onChange={this.
                            onValueChange} value={this.state.owners_name} />
                    </div>

                    <div className="form-group">
                        <label>Building Number</label>
                        <input type="Text" className="form-control" data-name="building_no" required onChange={this.
                            onValueChange} value={this.state.building_no} ></input>
                    </div>

                    <div className="form-group">
                        <label>Unit Number</label>
                        <input type="Text" className="form-control" data-name="unit_num" required onChange={this.
                            onValueChange} value={this.state.unit_num} ></input>
                    </div>

                    <div className="form-group">
                        <label>Water Meter Number</label>
                        <input type="Text" className="form-control" data-name="water_m_num" required onChange={this.
                            onValueChange} value={this.state.water_m_num} ></input>
                    </div>



                    <div className="form-group">
                        <label>Beginning Balance</label>
                        <input type="number" step="0.01" className="form-control" data-name="w_begging_balance" required onChange={this.
                            onValueChange} displayType={'text'} thousandseparator={true} prefix={'P'} ></input>
                    </div>


                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>

            </div>

        )

    }
}