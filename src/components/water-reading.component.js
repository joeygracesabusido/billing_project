import React, { Component } from 'react';

// import { Link } from 'react-router-dom';
import axios from 'axios';
// import Select from 'react-select';
import Textfield from '@material-ui/core/Textfield';

// import '../scr/water-reading.css';

// import { variationPlacements } from '@popperjs/core';

// import NumberFormat from 'react-number-format';
// var NumberFormat = require('react-number-format');
// var onwersInfo = [{
//     "label": "JEROME SABUSIDO"
// }]


const divStyle = {
    align: 'center',
    // margin: '40px',
    // border: '5px solid pink'
};

const inputStyle = {
    width: '350px'
    // margin: '0 auto'

};

const labelStyle = {
    margin: 'auto'

};




// Wala ka palang modal component
// Next mong gawin search suggestion 
// What if may kapangalan siya? 
export default class WaterReading extends Component {



    constructor(props) {
        super(props);

        this.state = {
            // num1: "",
            // num2: "",
            // total: ""
            showModal: false,
            owner: {
                owners_name: "",
                building_no: "",
                unit_num: "",
                water_m_num: "",
                w_begging_balance: ""

                // num2: "",
                // total: ""

            }

        }
        // this.state = {
        //     total: "",
        //     num2: ""
        // }
        // this.state={
        //     list: ['JEROME','ISAAC']
        // }
        // this.state = {water_beg_balance: []}

        // this.onFullNameChange = this.onFullNameChange.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
        this.openModal = this.openModal.bind(this);
        this.searchOwner = this.searchOwner.bind(this);
        this.sayHello = this.sayHello.bind(this);
        this.handlenum2 = this.handlenum2.bind(this);

        this.handlenum1 = this.handlenum1.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.datefrom = this.datefrom.bind(this);
        this.dateto = this.dateto.bind(this);
        // ito yon sir

    }

    // componentDidMount() {
    // axios.get('http://localhost:4000/billing/water-beg-bal-list')
    //     .then(res => {
    //         this.setState({ water_beg_balance: res.data })

    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })

    // }
    openModal = () => {
        this.setState({ showModal: true });
    };

    closeModal = () => {
        this.setState({ showModal: false });
    };

    searchOwner = async (e) => {
        try {
            e.preventDefault();
            const { data } = await axios({
                method: 'GET',
                url: `http://localhost:4000/billing/search-water-beg-bal`,
                params: {
                    term: this.state.owner.owners_name,
                }
            });

            if (data) {
                this.setState({
                    owner: {
                        ...this.state.owner,
                        owners_name: data.owners_name,
                        building_no: data.building_no,
                        unit_num: data.unit_num,
                        water_m_num: data.water_m_num,
                        w_begging_balance: data.w_begging_balance,
                    }
                });

            }

            // console.log(data.owners_name)

        } catch (err) {
            this.openModal();
            this.setState({
                ...this.state,
                owner: {
                    ...this.state.owner,
                    building_no: "",
                    unit_num: "",
                    water_m_num: "",
                    w_begging_balance: "",
                }
            })
            console.log(err);
        }
    }

    onValueChange(e) {
        this.setState({
            owner: {
                ...this.state.owner,
                [e.target.dataset.name]: e.target.value
            }
        })
    }

    handlenum1 = (e) => {
        this.setState({
            w_begging_balance: e.target.value
        })

    }

    handlenum2 = (e) => {
        this.setState({
            num2: e.target.value
        })

    }

    datefrom = (e) => {
        this.setState({
            date_from: e.target.value
        })

    }

    dateto = (e) => {
        this.setState({
            date_to: e.target.value
        })

    }

    sayHello = (e) => {
        e.preventDefault();
        this.setState({ total: parseFloat(this.state.num2) - parseFloat(this.state.owner.w_begging_balance) })

    }




    onSubmit(e) {
        e.preventDefault();


        const water_cubic_data = {

            owners_name: this.state.owner.owners_name,
            building_no: this.state.owner.building_no,
            unit_num: this.state.owner.unit_num,
            water_m_num: this.state.owner.water_m_num,
            w_begging_balance: this.state.owner.w_begging_balance,
            date_from: this.state.date_from,
            date_to: this.state.date_to,
            w_reading_data: this.state.num2,
            w_cubic_reading: this.state.total

        }

        axios({
            url: 'http://localhost:4000/billing/water-reading-save',
            method: 'POST',
            data: water_cubic_data
        })
            .then(res => window.location = "/water-reading-list")
            .catch(err => console.log('Error :' + err));
        // axios.post('http://localhost:4000/billing/water-reading-save', water_cubic_data)
        //     .then(res => window.location = "/list-of-owners")
        //     // .then(res => console.log(res.data))
        //     .catch(err => console.log('Error :'+ err));
    }

    render() {

        return (
            <div className="container" style={{ marginTop: 30 }}  >

                <h1>Add Water Meter Reading</h1>



                {/* <div>
                    {this.Owners_Detail()}
                </div>
                <div>
                    <Select options = {onwersInfo}/>
                </div>

                <div>
                    <Select options =  {this.Owners_Detail()}/>
                </div> */}

                {/* <ul>
                    {this.state.list.map((value,index) => <li>{value}</li>)}
                </ul> */}

                <form onSubmit={this.onSubmit}>
                    {/* <div className="form-group" style={divStyle} >
                        <label>
                            Date from :
                        </label>

                        <Textfield
                            id="date"
                            type="date"
                            defaultValue="2021-01-01"
                            data-name="date_from"
                            
                            value={this.state.date_from}
                            InputLabelProps={{
                                shrink: true,
                            }}>
                        </Textfield>



                        <label>
                            Date to :
                        </label>
                        <Textfield
                            id="date"
                            type="date"
                            defaultValue="2021-01-01"
                            data-name="date_to"
                            
                            value={this.state.date_to}
                            InputLabelProps={{
                                shrink: true,
                            }}>
                        </Textfield>

                        <p></p>
                    </div> */}
                    <div className="form-group">
                        <label>date From</label>
                        <input
                            type="date"
                            className="form-control"
                            data-name="date_from"
                            onChange={this.datefrom}
                            value={this.state.date_from}
                            style={inputStyle}

                        />

                        <label>date To</label>
                        <input
                            type="date"
                            className="form-control"
                            data-name="date_to"
                            onChange={this.dateto}
                            value={this.state.date_to}

                            style={inputStyle}

                        />

                    </div>

                    <div className="form-group" >
                        <label style={labelStyle}>Owner's Name </label>
                        <input type="text" className="form-control" data-name="owners_name" required onChange=
                            {this.onValueChange} value={this.state.owner.owners_name} style={inputStyle} >

                        </input>
                        <p></p>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.searchOwner}
                        >
                            Search
                        </button>
                        <p></p>
                    </div>


                    <div className="form-group">
                        <label>Building Number</label>
                        <input type="Text"
                            className="form-control"
                            data-name="building_no"
                            required onChange={this.onValueChange}
                            value={this.state.owner.building_no} style={inputStyle} ></input>
                    </div>

                    <div className="form-group">
                        <label>Unit Number</label>
                        <input type="Text"
                            className="form-control"
                            data-name="unit_num"
                            required onChange={this.onValueChange}
                            value={this.state.owner.unit_num} style={inputStyle}></input>
                    </div>

                    <div className="form-group">
                        <label>Water Meter Number</label>
                        <input type="Text" className="form-control"
                            data-name="water_m_num"
                            required onChange={this.onValueChange}
                            value={this.state.owner.water_m_num} style={inputStyle} ></input>
                    </div>



                    <div className="form-group">
                        <label>Beginning Balance</label>
                        <input
                            type="number"
                            step="0.01"
                            className="form-control"
                            data-name="w_begging_balance"
                            required
                            onChange={this.onValueChange}
                            value={this.state.owner.w_begging_balance}
                            // onChange={this.
                            //     handlenum1}
                            // displayType={'text'}
                            // thousandseparator={true}
                            // prefix={'P'}
                            // value={this.state.num1}
                            style={inputStyle}
                        ></input>
                    </div>

                    <div className="form-group">
                        <label>Water Reading</label>
                        <input
                            type="number"
                            step="0.01"
                            className="form-control"
                            data-name="w_reading_data"
                            onChange={this.handlenum2}
                            value={this.state.num2}


                            style={inputStyle}
                        />
                    </div>

                    <div className="form-group">
                        <label>Total Water Cubic Reading</label>
                        <input
                            type="number"
                            step="0.01"
                            className="form-control"
                            data-name="w_cubic_reading"
                            value={this.state.total}

                            style={inputStyle}
                        />
                    </div>

                    <p>
                        <button onClick={this.sayHello} className="btn btn-success">Calculate</button>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </p>


                </form >

            </div >

        )


    }
}