import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { data } from 'jquery';




export const Testmodal = () => {

    const [ownlist, setOwnlist] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/billing/`)
        .then(res => {
          console.log(res)
          setOwnlist(res.data)
        })
        .catch(err =>{
          console.log(err)
        })
      },[]
      )

    return (
        <div style={{marginTop:40}}>
            {/* <ul>
                  {ownlist.map(owners_detail =>(
                    <li key = {owners_detail.owners_name}></li>
                  ))}
            </ul> */}
            <button
                onClick={() =>setOwnlist(data)}>Click Me
            </button>
            <ul>
                  {ownlist.map(data =>(
                    <li key ={data.id}>{data.owners_name}</li>
                  ))}
            </ul>
            
        </div>
    )
}


