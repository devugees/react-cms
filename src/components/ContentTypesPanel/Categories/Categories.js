import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table, Input} from 'reactstrap';
import axios from 'axios';
//import TopHeader from "../../Administration/HeaderComponent/HeaderComponent";
//import DashBoard from "../../Administration/dashBoard/dashBoard";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      name: '',
      description: '',
      id: '',
      displayInputs: false,
      displayInputsAdd: false
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
  }



  bringingCategoriesDb = nextProps => {
    axios
      .get(`http://localhost:5000/api/categories/${nextProps.id}`)
      .then(response => {
        console.log(response);
        this.setState({
          categories: response.data
        });
      })
      .catch(error => {
        console.log('Error: ', error);
      });
  };

  componentDidMount  ()  {
    this.bringingCategoriesDb(this.props  )  
  }

  componentDidUpdate (prevProps, prevState) {
    if(prevProps.id != this.props.id) {
      this.bringingCategoriesDb(this.props)
      }
  }
    
  


  handleToggleEditInput(index, categories) {
    this.setState(prevState => ({
      displayInputs: !prevState.displayInputs,
      name: categories.name,
      description: categories.description,
      id: categories._id
    }));
  }

  handleToggleAddInput() {
    this.setState(prevState => ({
      displayInputsAdd: !prevState.displayInputsAdd
    }));
  }

  //
  handleDelete(index, categories) {
    const tokenStr = localStorage.getItem('token');
    console.log(categories);
    axios
      .delete(`http://localhost:5000/api/deletecategories/${categories}`, {
        headers: {Authorization: `Bearer ${tokenStr}`}
      })
      .then(response => this.componentDidMount())
      .catch(error => {
        console.log('Error: ', error);
      });
  }

  handleSubmitAdd() {
    const newdata = {
      name: this.state.name,
      description: this.state.description
    };
    const tokenStr = localStorage.getItem('token');
    const categoriesId = this.props.id;
    axios
      .post(
        `http://localhost:5000/api/createcategories/${categoriesId}`,
        newdata,
        {
          headers: {Authorization: `Bearer ${tokenStr}`}
        }
      )
      .then(response => {
        this.setState({
          displayInputsAdd: false,
        });
        this.componentDidMount() 
        })
      .catch(err => console.log(err));
  }

  handleSubmitEdit() {
    const newdata = {
      name: this.state.name,
      description: this.state.description
    };
    console.log(newdata);
    const tokenStr = localStorage.getItem("token");
    console.log(tokenStr);

    const categoriesId = this.state.id;
    axios
      .post(
        `http://localhost:5000/api/updatecategories/${categoriesId}`,
        newdata,
        {
          headers: { Authorization: `Bearer ${tokenStr}` }
        }
      )
      .then(response => {
        this.componentDidMount()
        //setTimeout(() => {
          this.setState({
            displayInputs: false,
          });
        //}, 5000);
      })
      .catch(err => console.log(err));
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    let addNewCategoriesInputs;
    if (this.state.displayInputsAdd) {
      addNewCategoriesInputs = (
        <div>
          <Table striped>
            <thead>
              <tr>
                <th>name</th>
                <th>description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Input placeholder="" name="name" onChange={this.onChange} />
                </td>
                <td>
                  <Input
                    placeholder=""
                    name="description"
                    onChange={this.onChange}
                  />
                </td>
                <td>
                  <button
                    onClick={this.handleSubmitAdd.bind(this)}
                    className="btn btn-primary">
                    Submit
                  </button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      );
    }

    let socialInputs;
    if (this.state.displayInputs) {
      socialInputs = (
        <div>
          <Table striped>
            <thead>
              <tr>
                <th>name</th>
                <th>description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Input
                    placeholder=""
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </td>
                <td>
                  <Input
                    placeholder=""
                    name="description"
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </td>
                <td>
                  <button
                    onClick={this.handleSubmitEdit}
                    className="btn btn-primary">
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
        <div className="mt-4 mb-5">
          <Table striped>
            <thead>
              <tr>
                <th className="text-center h1">All Categories</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <button
                    type="button"
                    onClick={this.handleToggleAddInput.bind(this)}
                    className="btn btn-primary ml-1">
                    Add New Category
                  </button>
                </td>
              </tr>
            </tbody>
          </Table>
          <div>{addNewCategoriesInputs}</div>
        </div>

        <div className="mt-4">
          <Table striped>
            <thead>
              <tr>
                <th>name</th>
                <th>description</th>
              </tr>
            </thead>
            <tbody>
              {this.state.categories.map((categories, index) => {
                return (
                  <tr>
                    <td>{categories.name}</td>
                    <td>{categories.description}</td>
                    <td>
                      <button
                        type="button"
                        onClick={this.handleToggleEditInput.bind(
                          this,
                          index,
                          categories
                        )}
                        className="btn btn-primary ml-1">
                        Edit
                      </button>

                      <button
                        onClick={this.handleDelete.bind(
                          this,
                          index,
                          categories._id
                        )}
                        className="btn btn-danger">
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
      </div>
    );
  }
}

export default Categories;
