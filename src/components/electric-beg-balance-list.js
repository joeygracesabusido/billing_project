import React, { useState, useEffect } from 'react'
import axios from 'axios'


export const Electric_beg_balance_list = () => {

    const [electBegBal, setElectBegBal] = useState([]);

    useEffect(() => {
        loadBegList();
    }, []);

    const loadBegList = async () => {
        try {
            const { data } = await axios({
                method: 'GET',
                url: `http://localhost:4000/billing/elect-beg-bal-list`

            })

            if (data) {
                setElectBegBal(data)

            }
            console.log(data)
        } catch (err) {
            console.log(err);

        }
    }

    const renderHeader = () => {
        let headerElement = ['owners', 'bdlg no', 'unit no', 'begbal', 'action']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const removeData = (id) => {

        axios.delete(`${URL}/${id}`).then(res => {
            const del = electBegBal.filter(electBegBal => id !== id)
            setElectBegBal(del)
        })
    }

    const renderBody = () => {
        return electBegBal && electBegBal.map(({ id, owners_name, building_no, unit_num, e_begging_balance }) => {
            return (
                <tr key={id}>

                    <td>{owners_name}</td>
                    <td>{building_no}</td>
                    <td>{unit_num}</td>
                    <td>{e_begging_balance}</td>
                    <td className='opration'>
                        <button className='btn btn-sm btn-danger' onClick={() => removeData(id)}>Delete</button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <div className="container" style={{ marginTop: 40 }}>
            <>
                <h1 id='title'>Electric Beg. Bal</h1>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>{renderHeader()}</tr>
                    </thead>
                    <tbody>
                        {renderBody()}
                    </tbody>
                </table>
            </>
            {/* {electBegBal.map((val) => {
                return <h1>
                    OwnersName: {val.owners_name} | Beg. Balance: {val.e_begging_balance}
                </h1>
            })} */}
            {/* <ul>
                {electBegBal.map(data => (
                    <li key={data.id}>{data.owners_name}</li>
                ))}
            </ul> */}


            {/* <table class="table">
                <thead>

                    <tr>
                        <th scope="col">OWNERS NAME</th>
                        <th scope="col">BLDG. NO.</th>
                        <th scope="col">UNIT NO.</th>
                    </tr>
                </thead>
                <tbody>
                    

                         <tr>
                         <td>{val.owners_name}</td>
                         <td>{val.owners_name}</td>
                         <td>{val.owners_name}</td>
                        </tr>

        

                </tbody>
            </table> */}

            {/* <button className="btn btn-sm btn-secondary" onClick={searchOwner}>Click me</button> */}
        </div>
    )
}
