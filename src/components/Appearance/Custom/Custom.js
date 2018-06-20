import React, {Component} from 'react';
import axios from 'axios';
import AppearanceForm from './AppearanceForm';

<<<<<<< HEAD:src/components/Appearance/Custom/Custom.js
class Custom extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      contentTypesArr: [],
      value: [],
      crazy: false,
      form: false,
      loading: false,
    };
  }
  componentDidMount() {
    fetch('http://localhost:5000/api/appearance')
      .then(resp => resp.json())
      .then(data => {
=======
class Custome extends Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            contentTypesArr: [],
            value: [],
            crazy: false,
            form: false,
            loading: false
        };
    }
    componentDidMount() {
        fetch('http://localhost:5000/api/appearance')
            .then(resp => resp.json())
            .then(data => {
                this.setState({form: data[0]});
            })
            .catch(() => {
                console.log('No internet connection found. App is running in offline mode.');
            });
    }

    incremnetContentTyps = () => {
        const contentTypesArr = [...this.state.contentTypesArr];
        const contentTypeView = {
            choosenContentType: {},
            chosenFields: [],
            numberOfEntries: "",
            viewType: "",
            numberOfColomus: "",
            css: ""
        }
        contentTypesArr.push(contentTypeView)
>>>>>>> copyAddTypeView:src/components/Appearance/Custome/Custome.js
        this.setState({
            contentTypesArr: contentTypesArr,
            // showcomponent: true,
        })
    }
    removeContentTypsFromState = (key) => {
        console.log("key", key)
        const contentTypesArr = [...this.state.contentTypesArr]
        contentTypesArr.splice(key, 1)
        console.log("contentTypesArr", contentTypesArr);
        this.setState({contentTypesArr})

<<<<<<< HEAD:src/components/Appearance/Custom/Custom.js
  incremnetContentTyps = () => {
      const contentTypesArr = [...this.state.contentTypesArr];
      const contentTypeView = {
        selectview: '',
        selectEntry: '',
        css: '',
        selectGrid: '',
        selectContentType: '',
        finalContentType: {},
        chosenFields: []
      }
      contentTypesArr.push(contentTypeView)
      this.setState({
        contentTypesArr: contentTypesArr,
        showcomponent: true,
      })
}
removeContentTypsFromState = (key) => {
     console.log("key",key)
    const contentTypesArr = [...this.state.contentTypesArr]
    contentTypesArr.splice(key, 1)
    console.log("contentTypesArr",contentTypesArr);
    this.setState({contentTypesArr})
   
  };

  handleSubmit = event => {
    event.preventDefault();
    let form = {};
    for (var i = 0; i < event.target.elements.length; i++) {
      if (
        event.target.elements[i].value !== '' &&
        event.target.elements[i].name !== ''
      ) {
        form[event.target.elements[i].name] = event.target.elements[i].value;
      }
    }
 
    axios
      .post('http://localhost:5000/api/appearance', form)
      .then(response => {
        // TODO here should come a successmessage
        console.log(response.data);
      })
      .catch(function(error) {
        console.log('Error: ', error);
      });
  };
  

  bringContentTypeObjectFromApperanc = (data) => {
        const contentTypesArr = [...this.state.contentTypesArr]
        console.log(data)
        contentTypesArr[data.keyItem] = data
        this.setState({contentTypesArr})
  }

  render() {
    console.log(this.state.contentTypesArr)
    const style = {marginBottom: '1em'};
    const btnFile = {marginBottom: '1em', height: '2em'};
=======
    };

    handleSubmit = event => {
        event.preventDefault();
        let form = {};
        for (var i = 0; i < event.target.elements.length; i++) {
            if (event.target.elements[i].value !== '' && event.target.elements[i].name !== '') {
                form[event.target.elements[i].name] = event.target.elements[i].value;
            }
        }

        axios
            .post('http://localhost:5000/api/appearance', form)
            .then(response => {
                // TODO here should come a successmessage
                console.log(response.data);
            })
            .catch(function (error) {
                console.log('Error: ', error);
            });
    };

    bringContentTypeObjectFromApperanc = (data) => {
        const contentTypesArr = [...this.state.contentTypesArr]
        console.log(data)
        contentTypesArr[data.keyItem] = data
        this.setState({contentTypesArr})
    }

    render() {
        console.log(this.state.contentTypesArr)
        const style = {
            marginBottom: '1em'
        };
        const btnFile = {
            marginBottom: '1em',
            height: '2em'
        };
>>>>>>> copyAddTypeView:src/components/Appearance/Custome/Custome.js

        const options = this
            .state
            .categories
            .map((item, index) => ({label: item.name, value: index}));

<<<<<<< HEAD:src/components/Appearance/Custom/Custom.js
    return (
     
      this.state.form && (
        <AppearanceForm
          contentTypesArr={this.state.contentTypesArr}
          bringContentTypeObjectFromApperanc={this.bringContentTypeObjectFromApperanc}
          contentTypeData={this.props.contenttypes}
          handleSubmit={this.handleSubmit}
          form={this.state.form}
          incremnetContentTyps={this.incremnetContentTyps}
          removeContentTypsFromState={this.removeContentTypsFromState}
        />
      )
    
     
    );
  }
=======
        return (this.state.form && (<AppearanceForm
            contentTypesArr={this.state.contentTypesArr}
            bringContentTypeObjectFromApperanc={this.bringContentTypeObjectFromApperanc}
            contentTypeData={this.props.contenttypes}
            handleSubmit={this.handleSubmit}
            form={this.state.form}
            incremnetContentTyps={this.incremnetContentTyps}
            removeContentTypsFromState={this.removeContentTypsFromState}/>));
    }
>>>>>>> copyAddTypeView:src/components/Appearance/Custome/Custome.js
}

export default Custom;
