import React, {useState, useEffect} from 'react'
import { Button,Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';


const inputStyle = {
    width: '300px',
    display: 'inline-block',
    height:'30px',
    margin: '5px'
    // margin: '0 auto'

};

const labelStyle = {  
        width:'150px',
        fontSize: '15px',
        display: 'inline-block'
    
};

export const Electric_beg_Bal = () => {
   
    const [showModal,setshowModal] = useState(false);
    const [posts, setPosts] = useState([]);

    const manageState = () => {
        setshowModal(!setshowModal)
    }

    useEffect(() => {
      const data = axios({
        method: 'GET',
        url: `http://localhost:4000/billing/`,
        params: {
          term: setPosts.owners_name,
      }
      })
      if (data) {
        setPosts({
                owners_name: data.owners_name,
                building_no: data.building_no,
                unit_num: data.unit_num,
                water_m_num: data.water_m_num,
                w_begging_balance: data.w_begging_balance,
            
        });

    },[]

    })
    // useEffect(() => {
    //   axios.get(`http://localhost:4000/billing/`)
    //   .then(res => {
    //     console.log(res)
    //     setPosts(res.data)
    //   })
    //   .catch(err =>{
    //     console.log(err)
    //   })
    // },[]
    // )
          
    

    return (
        <>
      <div style={{marginTop:40}}>
      
        
      </div>
      {manageState && (
        <div className="" id="addnewlist">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Add Electric Bill</h4>
              </div>

              <div className="modal-body">
                
                <label style={labelStyle}>Owners Name</label>
                <input
                    type="type"
                    className="form-control"
                    data-name="date_from"
                    // onChange={this.datefrom}
                    // value={this.state.date_from}
                    style={inputStyle}

                />


                <label style={labelStyle}>Buldg No.</label>
                <input
                    type="input"
                    className="form-control"
                    data-name="date_from"
                    // onChange={this.datefrom}
                    // value={this.state.date_from}
                    style={inputStyle}

                />

                <label style={labelStyle}>Unit No.</label>
                <input
                    type="input"
                    className="form-control"
                    data-name="date_from"
                    // onChange={this.datefrom}
                    // value={this.state.date_from}
                    style={inputStyle}

                />

                <label style={labelStyle}>Electric Bill No.</label>
                <input
                    type="input"
                    className="form-control"
                    data-name="date_from"
                    // onChange={this.datefrom}
                    // value={this.state.date_from}
                    style={inputStyle}

                />

                <label style={labelStyle}>Beg. Balance.</label>
                <input
                    type="input"
                    className="form-control"
                    data-name="date_from"
                    // onChange={this.datefrom}
                    // value={this.state.date_from}
                    style={inputStyle}

                />
                {/* <ul>
                  {posts.map(data =>(
                    <li key = {data.id}>{data.owners_name}</li>
                  ))}
                </ul> */}
                
              </div>

              <div className="modal-footer">
              <Link to= '/' className="btn btn-sm btn-danger">Close</Link>
                {/* <button
                
                  type="button"
                  className="btn btn-danger"
                  
                >
                  Test-Try
                </button> */}
                
                
              </div>
            </div>
          </div>
        </div>
      )}
    </>
        
           
    )
}
