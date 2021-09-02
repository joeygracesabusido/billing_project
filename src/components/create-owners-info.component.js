import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Create_owners_info extends Component {

    constructor(props){
        super(props);

        this.state ={
            owners_name: '',
            building_no: '',
            unit_num: '',
            water_m_num: '',
            electric_m_num: '',
            condodues: ''
            
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

    onValueChange(e){
        this.setState({
            [e.target.dataset.name] : e.target.value
            
        })
    }

    onSubmit(e){
        e.preventDefault();

        const owners_detail = {
            owners_name : this.state.owners_name,
            building_no : this.state.building_no,
            unit_num : this.state.unit_num,
            water_m_num : this.state.water_m_num,
            electric_m_num : this.state.electric_m_num,
            condodues : this.state.condodues
            
        }

        axios.post('http://localhost:4000/billing/add_ownersinfo', owners_detail)
            .then(res => window.location = "/AddOwnersInfo")
            // .then(res => console.log(res.data))
            .catch(err => console.log('Error :'+ err));


        // console.log(this.state);
    }

    render(){
        return(
            
            <div className="container"style={{marginTop:30}}>    
                <h1>Create Owners List</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Owner's Name</label>
                        <input type="text" className="form-control" data-name="owners_name" required onChange={this.
                            onValueChange} ></input>
                    </div>

                    <div className="form-group">
                        <label>Building Number</label>
                        <input type="Text" className="form-control" data-name="building_no" required onChange={this.
                            onValueChange} ></input>
                    </div>

                    <div className="form-group">
                        <label>Unit Number</label>
                        <input type="Text" className="form-control" data-name="unit_num" required onChange={this.
                            onValueChange} ></input>
                    </div>

                    <div className="form-group">
                        <label>Water Meter Number</label>
                        <input type="Text" className="form-control" data-name="water_m_num" required onChange={this.
                            onValueChange} ></input>
                    </div>

                    <div className="form-group">
                        <label>Condo Dues</label>
                        <input type="number" step="0.01" className="form-control" data-name="condodues" required onChange={this.
                            onValueChange} ></input>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>
                
            
            </div>
        )
    }
}