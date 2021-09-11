import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const input2Style = {
  width: '215px',
  display: 'inline-block',
  height: '30px',
  margin: '5px'

}
const inputStyle = {
  width: '300px',
  display: 'inline-block',
  height: '30px',
  margin: '5px'
  // margin: '0 auto'

};

const labelStyle = {
  width: '150px',
  fontSize: '15px',
  display: 'inline-block'

};

export const Electric_beg_Bal = ({ history }) => {
  const [showModal, setshowModal] = useState(false);

  // Separate state for the search input so that you can clear it later
  const [searchValue, setSearchValue] = useState('');
  // Separate state for the Data, use object instead
  const [owner, setOwner] = useState({});
  const [begBalance, setBegBalance] = useState('');

  // useEffect(() => {
  //   console.log(ownersName)
  // }, [ownersName]);



  const manageState = () => {

    setshowModal(!setshowModal)
  }

  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  }

  const onBegBalanceValueChange = (e) => {
    setBegBalance(e.target.value);
  }

  const searchOwner = async () => {
    try {
      const { data } = await axios({
        method: 'GET',
        url: `/billing/search-ownerinfo`,
        params: {
          term: searchValue,
        }
      })

      if (data) {
        setOwner(data)
        setSearchValue('');
      }
      console.log(data)
    } catch (err) {
      console.log(err);
      setOwner({}); // Clear the fields if no data or error has occured.
    }
  }

  // ipass mo nalang to sa onClick handler kay button
  const saveElectricBill = async () => {
    try {
      // Check if the owner object is not empty
      if (Object.values(owner).length > 0) {
        const data = { ...owner, e_begging_balance: begBalance };

        await axios({
          method: 'POST',
          url: `/billing/electric-reading-save`,
          data
        });

        // kung gusto mo magredirect to another router upon successful saving
        history.push('/electric-beg-bal-list');

        alert('Saved!');
      }
    } catch (err) {
      alert(err);
      console.log(err);
    }
  }



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
      <div style={{ marginTop: 70 }}>


      </div>
      {manageState && (
        <div className="" id="addnewlist">

          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Add Electric Bill</h4>
              </div>

              <div className="modal-body">

                <label style={labelStyle}>Search Owner</label>
                <input
                  type="type"
                  className="form-control"
                  data-name="date_from"
                  onChange={onSearchValueChange}

                  value={searchValue}
                  style={input2Style}

                />
                <button

                  type="button"
                  className="btn btn-primary"
                  onClick={searchOwner}
                >
                  Search
                </button>
                <label style={labelStyle}>Owner's Name</label>
                <input
                  type="type"
                  className="form-control"
                  data-name="date_from"

                  // Ginamit ko yung ? for optional chaining. Ang initial properties ni owner ay empty kaya 
                  // dapat optional lang iaccess yung owners_name
                  value={owner?.owners_name || ''}
                  style={inputStyle}

                />


                <label style={labelStyle}>Buldg No.</label>
                <input
                  type="input"
                  className="form-control"
                  data-name="date_from"
                  // onChange={this.datefrom}
                  value={owner?.building_no || ''}

                  style={inputStyle}

                />

                <label style={labelStyle}>Unit No.</label>
                <input
                  type="input"
                  className="form-control"

                  // onChange={this.datefrom}
                  value={owner?.unit_num || ''}
                  style={inputStyle}

                />

                <label style={labelStyle}>Electric Bill No.</label>
                <input
                  type="input"
                  className="form-control"

                  // onChange={this.datefrom}
                  // value={this.state.date_from}
                  value={owner?.electric_m_num || ''}
                  style={inputStyle}

                />

                <label style={labelStyle}>Beg. Balance.</label>
                <input
                  type="input"
                  className="form-control"

                  onChange={onBegBalanceValueChange}
                  value={begBalance}
                  style={inputStyle}

                />
                {/* <ul>
                  {posts.map(data =>(
                    <li key = {data.id}>{data.owners_name}</li>
                  ))}
                </ul> */}

              </div>

              <div className="modal-footer">
                <button className="btn btn-sm btn-secondary" onClick={saveElectricBill}>Save</button>
                <Link to='/' className="btn btn-sm btn-danger">Close</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>


  )
}
