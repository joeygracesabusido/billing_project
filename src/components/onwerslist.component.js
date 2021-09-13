import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const buttonMargin = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'space-between',
    height: 36,
    marginTop: 20,
    borderRadius: 2,
    marginHorizontal: 2,
    width: '17%',
    margin: '5px'

};

const Owners_info = props => {
    return (
        <tr>
            <td>{props.owners_detail.owners_name}</td>


            <td className="text-center">
                <Link to={'/add-beg-bal/' + props.owners_detail._id} className="btn btn-sm btn-primary">Add Beg.Bal</Link>
                <Link to='/water-reading/' className="btn btn-sm btn-secondary">Water Reading</Link>
            </td>

        </tr>
    )

}

export default class List_of_Owners extends Component {

    constructor(props) {
        super(props)
        this.state = { owners_detail: [] }


    }



    componentDidMount() {

        axios.get('/billing/')
            .then(res => {
                this.setState({ owners_detail: res.data })

            })
            .catch(error => {
                console.log(error);
            })

    }



    Owners_Detail() {
        return this.state.owners_detail.map(currentOwners => {
            return <Owners_info owners_detail={currentOwners} key={currentOwners._id}
            />
        })
    }

    render() {
        return (

            <div className="container" style={{ marginTop: 30 }}>

                <h1>Condo Owners List</h1>
                <table className="table table-bordered table-hover" style={{ marginTop: 10 }}>
                    <thead className="thead dark">
                        <tr>
                            <th>Owners Information</th>

                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.Owners_Detail()}
                    </tbody>

                </table>

                <Link to='/electric-beg-bal/'
                    className="btn btn-sm btn-primary" style={buttonMargin}>
                    Add Electric Beg Balance
                </Link>

                <Link to='/electric-beg-bal-list/'
                    className="btn btn-sm btn-primary" style={buttonMargin}>
                    Add Electric Beg. List
                </Link>

                <Link to='/electric-readingData/'
                    className="btn btn-sm btn-primary" style={buttonMargin}>
                    Add Electric ReadingData
                </Link>

            </div>
        )
    }
}