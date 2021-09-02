import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios  from 'axios';



const Owners_info = props => {
    return(
        <tr>
            <td>{props.owners_detail.owners_name}</td>
            <td>{props.owners_detail.building_no}</td>
            <td>{props.owners_detail.unit_num}</td>
            <td>{props.owners_detail.water_m_num}</td>
            <td>{props.owners_detail.electric_m_num}</td>
            {/* <td><NumberFormat>{props.owners_detail.condodues} thousandSeparator={true} prefix={'$'}</NumberFormat></td> */}
            <td>{props.owners_detail.condodues}</td>
            <td className="text-center">
                <Link to={'/edit/'+props.owners_detail._id} className="btn btn-sm btn-primary">Edit</Link>
                
                
                {/* <a href={'/edit/id'}  className="btn btn-sm
                btn-primary">Edit</a> */}
                
                <a href="#" onClick={()=> {props.deleteOnwer(props.owners_detail._id)}} className="btn btn-sm
                btn-danger">Delete</a>
                {/* <Link to={'/add-water-beg-bal/'} className="btn btn-sm btn-primary">Add Beg</Link> */}
            </td>

        </tr>
    )

}

export default class Ownerslist extends Component {

    constructor(props){
        super(props)

        this.deleteOnwer = this.deleteOnwer.bind(this);

        this.state = {owners_detail: []}


    }

    

    componentDidMount(){

        axios.get('http://localhost:4000/billing/')
            .then(res => {
                this.setState({owners_detail: res.data})
                
            })
            .catch(error => {
                console.log(error);
            })
            
    }

    deleteOnwer(id){
        axios.delete('http://localhost:4000/billing/'+id)
            .then(res => console.log(res.data))
            this.setState({
                owners_detail: this.state.owners_detail.filter(el => el._id !== id)
            })

    }

    Owners_Detail()
    {
        return this.state.owners_detail.map(currentOwners => {
            return <Owners_info owners_detail={currentOwners} deleteOnwer={this.deleteOnwer} key={currentOwners._id}
            />
        })
    }

    render(){
        return(
            
            <div className="container" style={{marginTop:30}}>
                
                <h1>Condo Owners List</h1>
                <table className="table table-bordered table-hover" style={{marginTop:10}}>
                    <thead className="thead dark">
                        <tr>
                            <th>Owners Information</th>
                            <th>Bdlg Number</th>
                            <th>Unit Number</th>
                            <th>Water MeterReading No.</th>
                            <th>Electri MeterReading No.</th>
                            <th>Condo Dues</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.Owners_Detail()}
                    </tbody>

                </table>

            </div>
        )
    }
}