import React from "react";

export default class AddNewList extends React.Component {
  state = {
    showModal: false
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  onSave = () => {
    console.log("i saved the data.");
    this.setState({ showModal: false });
  };

  render() {
    return (
      <>
        <div style={{marginTop:40}}>
          <button onClick={this.openModal} className="btn btn-primary btn-lg">
            Open Modal
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
                  test
                  <label>List Title</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.props.action_handle_list_input}
                  />
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
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={this.onSave}
                  >
                    Save
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
