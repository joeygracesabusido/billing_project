import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// import NumberFormat from 'react-number-format';
// var NumberFormat = require('react-number-format');

export default class EditOwnersInfo extends Component {

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
    // onFullNameChange(e){
    //     this.setState({
    //         fullname: e.target.value
    //     })
    //     // console.log(e.target.value)
    // }
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
            electric_m_num: this.state.electric_m_num,
            condodues: this.state.condodues
        }

        axios.post('http://localhost:4000/billing/updateOwner/' + this.props.match.params.id, owners_detail)
            .then(res => window.location = "/")
            // .then(res => console.log(res.data))
            .catch(err => console.log('Error :' + err));


        // console.log(this.state);
    }

    render() {
        return (
            <div className="container" style={{ marginTop: 30 }}>

                <h1>Update Health Declaration</h1>

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
                        <label>Electric Meter Number</label>
                        <input type="Text" className="form-control" data-name="electric_m_num" required onChange={this.
                            onValueChange} value={this.state.electric_m_num}></input>
                    </div>

                    <div className="form-group">
                        <label>Condo Dues</label>
                        <input type="number" step="0.01" className="form-control" data-name="condodues" required onChange={this.
                            onValueChange} value={this.state.condodues}  ></input>
                        {/* displayType={'text'} thousandseparator={true} prefix={'P'} */}
                    </div>


                    <button type="submit" className="btn btn-primary">Update</button>

                </form>

            </div>
        )
    }
}