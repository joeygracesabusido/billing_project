import axios from 'axios'
import React, { Component } from 'react';
import Select from 'react-select';
// import {Button, Modal} from 'react-bootstrap'



const Owners_info = props => {

  return (
    // <Select option = {props.owners_detail.owners_name}/>
    <h1>{props.owners_detail.owners_name}</h1>
  )

}

class Test extends React.Component {


  state = {
    showModal: true
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

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
      return <Owners_info owners_detail={currentOwners}
      />
    })
  }

  // render() {
  //   const { items } = this.state;

  //     return (

  //       <div className="container" style={{marginTop:40}} >
  //         {items.map(item => (
  //           <h1 key={item._id}>
  //             <h1>{item.owners_name}</h1>
  //           </h1>
  //         ))}
  //       </div>
  //     );
  //   }
  render() {
    const { items } = this.state;


    return (
      <>
        <div style={{ marginTop: 40 }}>
          <button onClick={this.openModal} className="btn btn-primary btn-lg">
            List of Owners
          </button>
        </div>
        {this.state.showModal && (
          <div className="" id="addnewlist">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Add New List</h4>
                </div>

                <div className="modal-body">

                  <label>List of Owners</label>
                  <div>
                    {this.Owners_Detail()}
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                    onClick={this.closeModal}
                  >
                    Close
                  </button>


                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );

  }
}

export default Test;
