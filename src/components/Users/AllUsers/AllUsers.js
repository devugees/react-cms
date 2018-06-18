import React, { Component } from "react";
import { Table, Input } from "reactstrap";
import axios from "axios";
import AddNewUser from './AddNewUser'

class Allusers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      email: "",
      role: "",
      id: "",
      displaySocialInputs: false
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount = () => {
    const tokenStr = localStorage.getItem("token");
    console.log(tokenStr);
    axios
      .get("http://localhost:5000/users", {
        headers: { Authorization: `Bearer ${tokenStr}` }
      })
      .then(response => {
        console.log(response);
        this.setState({
          users: response.data.newUser
        });
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  };

  handleEdit(index, user) {
    this.setState(prevState => ({
      displaySocialInputs: !prevState.displaySocialInputs,
      email: user.email,
      role: user.role,
      id: user.id
    }));
  }

  handleDelete(index, userId) {
    const tokenStr = localStorage.getItem("token");
    console.log(tokenStr);
    axios
      .delete(`http://localhost:5000/deleteuser/${userId}`, {
        headers: { Authorization: `Bearer ${tokenStr}` }
      })
      .then(response => this.componentWillMount())
      .catch(error => {
        console.log("Error: ", error);
      });
  }

  handleSubmit() {
    const newdata = {
      email: this.state.email,
      role: this.state.role
    };
    console.log(newdata);
    const tokenStr = localStorage.getItem("token");
    console.log(tokenStr);

    const iduser = this.state.id;
    axios
      .post(`http://localhost:5000/updateuser/${iduser}`, newdata, {
        headers: { Authorization: `Bearer ${tokenStr}` }
      })
      .then(response => this.componentWillMount())
      .catch(err => console.log(err));
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    let socialInputs;
    if (this.state.displaySocialInputs) {
      socialInputs = (
        <div>
          <Table striped>
            <thead>
              <tr>
                <th>email</th>
                <th>role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Input
                    placeholder=""
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </td>
                <td>
                  <Input
                    placeholder=""
                    name="role"
                    value={this.state.role}
                    onChange={this.onChange}
                  />
                </td>
                <td>
                  <button
                    onClick={this.handleSubmit}
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      );
    }
    return (
      <div className="container">
      <div>
        <AddNewUser componentWillMount={this.componentWillMount}/>
      </div>
        <Table striped>
          <thead>
            <tr>
              <th>email</th>
              <th>role</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user, index) => {
              return (
                <tr>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button
                      type="button"
                      onClick={this.handleEdit.bind(this, index, user)}
                      className="btn btn-primary ml-1"
                    >
                      Edit
                    </button>

                    <button
                      onClick={this.handleDelete.bind(this, index, user.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        <div>{socialInputs}</div>
      </div>
    );
  }
}

export default Allusers;
