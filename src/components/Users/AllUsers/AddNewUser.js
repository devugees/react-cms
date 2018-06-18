import React from "react";
import axios from "axios";
import classnames from "classnames";
import { Table, Input } from "reactstrap";

export class AddNewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      role: "",
      password: "",
      errors: {},
      successMessage: false,
      displaySocialInputs: false
    };
  }

  handleSubmit = () => {
    const newdata = {
      email: this.state.email,
      role: this.state.role,
      password: this.state.password
    };
    console.log(newdata);
    const tokenStr = localStorage.getItem("token");
    console.log(tokenStr);
    axios
      .post(`http://localhost:5000/register`, newdata, {
        headers: { Authorization: `Bearer ${tokenStr}` }
      })
      .then(response => {
        this.props.componentWillMount();

        this.setState({
          email: "",
          role: "",
          password: "",
          errors: {},
          successMessage: true
        });
        setTimeout(() => {
          this.setState({
            displaySocialInputs: false,
            successMessage: false
          });
        }, 5000);
      })
      .catch(err => this.setState({ errors: err.response.data }));
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  toggleInput = () => {
    this.setState({ displaySocialInputs: !this.state.displaySocialInputs });
  };
  render() {
    const { errors } = this.state;

    let success;
    if (this.state.successMessage) {
      success = (
        <div className="alert alert-success mt-4" role="alert">
          Added NewUser Seccessfuly
        </div>
      );
    }
    let socialInputs;
    if (this.state.displaySocialInputs) {
      socialInputs = (
        <div>
          <Table striped>
            <thead>
              <tr>
                <th>Email</th>
                <th>Role</th>
                <th>Password</th>
              </tr>
              <tr>{success}</tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Input
                    className={classnames("form-control mb-4", {
                      "is-invalid": errors.email
                    })}
                    placeholder="Enter Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />

                  {errors.email && (
                    <div className="invalid-feedback ">{errors.email}</div>
                  )}
                </td>
                <td>
                  <Input
                    className={classnames("form-control mb-4", {
                      "is-invalid": errors.role
                    })}
                    placeholder="Enter Role"
                    name="role"
                    value={this.state.role}
                    onChange={this.onChange}
                  />
                  {errors.role && (
                    <div className="invalid-feedback mt-">{errors.role}</div>
                  )}
                </td>
                <td>
                  <Input
                    className={classnames("form-control mb-4", {
                      "is-invalid": errors.password
                    })}
                    placeholder="Enter Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback margtop">
                      {errors.password}
                    </div>
                  )}
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
      <div>
        <h3 className="text-center">Add New User</h3>
        <button
          type="button"
          onClick={this.toggleInput}
          className="btn btn-primary ml-1"
        >
          Add New User
        </button>
        {socialInputs}
      </div>
    );
  }
}

export default AddNewUser;
