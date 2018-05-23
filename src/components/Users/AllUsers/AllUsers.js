import React, { Component } from 'react';
import { Table, Input, Button, Row } from "reactstrap";
import axios from 'axios';


class Allusers extends Component {

	constructor(props) {
        super(props);
        this.state = {
         users:[],

          }
          
        }
    
 componentWillMount = () => {
      
     axios.get('http://localhost:5000/users')
          .then((response) => {
          	
         this.setState({
          users: response.data.newUser
         })
        }).catch((error) => {
          console.log("Error: ", error);
        });
    }

handleEdit(index, userId) {
   
    console.log(userId);
  }

handleDelete(index, userId) {
    axios.delete(`http://localhost:5000/deleteuser/${userId}`)
          .then((response) => this.componentWillMount()
           
        ).catch((error) => {
          console.log("Error: ", error);
        });
  
  }


  render() {
  	let socialInputs;
  	 const {displaySocialInputs } = this.state;

    if (this.state.displaySocialInputs) {
      socialInputs = (
        <div>
          <Input
            placeholder="Twitter Profile URL"
            name="twitter"
            icon="fab fa-twitter"
            value=""
            onChange=""
            
          />

          <Input
            placeholder="Facebook Page URL"
            name="facebook"
            icon="fab fa-facebook"
            value=""
            onChange=""
           
          />

         
        </div>
      );
    }
  	return (
	      <div className="container">
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

                    <Row>
                      <button
		                    type="button"
		                    onClick={() => {
		                     this.setState(prevState => ({
                               displaySocialInputs: !prevState.displaySocialInputs
                              }));
		                    }}
		                    className="btn btn-light"
                         >
                        Edit
                      </button>

                      <button   onClick={this.handleDelete.bind(
                          this,
                          index,
                          user.id
                        )} >
                         Delete</button>
                    </Row>
                  </td>

                  <td>
                  	<row>
                  
                      {socialInputs}
                   
                  	</row>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}


export default Allusers;
