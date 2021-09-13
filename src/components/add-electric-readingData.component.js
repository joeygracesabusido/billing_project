import React, {useState} from 'react'
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

 export const Add_electric_readingData = ({ history }) => {

    const [showModal, setshowModal] = useState(false);

    // Separate state for the search input so that you can clear it later
    const [searchValue, setSearchValue] = useState('');
    // Separate state for the Data, use object instead
    const [owner, setOwner] = useState({});
    const [electrciReading, setelectricReading] = useState('');

    const[totalreading, setTotalreading] = useState('');

    const[dateFrom, setDateFrom] = useState('');
    const[dateTo, setDateTo] = useState('');


    const manageState = () => {

        setshowModal(!setshowModal)
      }


    const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
    }


    const onDateFromChange = (e) => {
        setDateFrom(e.target.value);
    }

    const onDateToChange = (e) => {
        setDateTo(e.target.value);
    }

    const onElectReadingChange = (e) => {
        setelectricReading(e.target.value);
      }

    const totalReading = () => {
        setTotalreading( parseFloat(electrciReading) - parseFloat(owner.e_begging_balance) )
    }

    const searchOwner = async () => {
    try {
        const { data } = await axios({
        method: 'GET',
        url: `/billing/search-electricBeg-bal`,
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

    const saveElectricBill = async () => {
        try {
          // Check if the owner object is not empty
          if (Object.values(owner).length > 0) {
            const data = { ...owner, e_reading_data: electrciReading, totalElectric_reading_data: totalreading };
    
            await axios({
              method: 'POST',
              url: `/billing/electric-readingData-save`,
              data
            });
    
            // kung gusto mo magredirect to another router upon successful saving
            history.push('/');
    
            alert('Data Saved!');
          }
        } catch (err) {
          alert(err);
          console.log(err);
        }
      }


    return (
        <>
        <div style={{ marginTop: 70 }}>
  
  
        </div>
        {manageState && (
          <div className="" id="addnewlist">
  
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Add Electric Reading Data</h4>
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

                  <label style={labelStyle}>Date From</label>
                  <input
                    type="date"
                    className="form-control"
                    data-name="date_from"
                    onChange={onDateFromChange}
                    value={dateFrom}
  
                    style={inputStyle}
  
                  />

                  <label style={labelStyle}>Date To</label>
                    <input
                        type="date"
                        className="form-control"
                        data-name="date_from"
                        onChange={onDateToChange}
                        value={dateTo}
    
                        style={inputStyle}
  
                  />

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
  
                    value={owner?.e_begging_balance || ''}
                   
                    style={inputStyle}
  
                  />
                  <label style={labelStyle}>Electric Reading</label>
                    <input
                        type="input"
                        className="form-control"
                        onChange={onElectReadingChange}
                        value={electrciReading}
    
                        // onChange={owner?.e_begging_balance || ''}
                        // value={begBalance}
                        style={inputStyle}
    
                    />

                  <label style={labelStyle}>Total Reading</label>
                    <input
                        type="input"
                        className="form-control"
    
                        // onChange={owner?.e_begging_balance || ''}
                        value={totalreading}
                        style={inputStyle}
  
                  />
                  {/* <ul>
                    {posts.map(data =>(
                      <li key = {data.id}>{data.owners_name}</li>
                    ))}
                  </ul> */}
  
                </div>
  
                <div className="modal-footer">
                  <button className="btn btn-sm btn-info" onClick={totalReading}>Calculate</button>
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


