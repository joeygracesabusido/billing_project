import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



const Water_reading_list = props => {
    return (
        <tr>
            <td>{props.water_cubic_data.owners_name}</td>
            <td>{props.water_cubic_data.w_cubic_reading}</td>
            <td className="text-center">
                <Link to={'/add-beg-bal/' + props.water_cubic_data._id} className="btn btn-sm btn-primary">Edit</Link>

            </td>

        </tr>
    )

}

export default class List_of_waterReading extends Component {

    constructor(props) {
        super(props)
        this.state = { water_cubic_data: [] }


    }



    componentDidMount() {

        axios.get('http://localhost:4000/billing/water-reading-list')
            .then(res => {
                this.setState({ water_cubic_data: res.data })

            })
            .catch(error => {
                console.log(error);
            })

    }



    Owners_Detail() {
        return this.state.water_cubic_data.map(currentOwners => {
            return <Water_reading_list water_cubic_data={currentOwners} key={currentOwners._id}
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
                            <th>Total Cubic</th>

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























// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// function Water_reading_list() {
//     const [posts, setPosts] = useState([])

//     useEffect(() => {
//         axios.get('http://localhost:4000/billing/water-reading-list')
//             .then(res => {
//                 console.log(res)

//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     })
//     return (
//         <div>
//             <ul>
//                 {
//                     posts.map(post => (<li key={post.owners_name}>{post.building_no}</li>))
//                 }
//             </ul>
//         </div>
//     )
// }

// export default Water_reading_list
