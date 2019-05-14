import React, { Component } from 'react'
import PersonData from '../data.json';
import '../Personal Component/Personal.css';
import { connect } from 'react-redux';
import { pesonalDetails, personalForm } from '../redux/actions/updateAction';
import Home from '../Home Component/Home';
import { baseUrl } from '../utils/utils.js';



class Personal extends Component {

  componentDidMount() {
    this.props.pesonalDetails(PersonData);
  }

  constructor(props) {
    super(props)

    this.state = {
      res: []
    }
  }


  enteredValue = (e) => {
    e.preventDefault();

    console.log("submit event", e);
    console.log('submitted value========', this.state)
    
      
        // console.log('person data', person)
        fetch(`${baseUrl}/personal`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                phone: this.state.phone,
                upload: this.state.upload
            })
        }).then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
            
        // this.state.res.push(e.target[person.name].value)
      
      // console.log('event log', e.target[person.name].value)

      console.log('response', this.state.res)

    
    this.props.personalForm(this.state.res)
  }

  validate = (e) => {

    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const renderedData = this.props.data.personalForm.map((data, index) => {
      return <h1>
        {data}
      </h1>
    })


    console.log(this.props.data)
    const Person = this.props.data.personalData.map(data =>
      <div>
        <table style={{ marginLeft: "350px" }}>
          <td style={{ width: "300px", textAlign: "right" }}>
            <label style={{color: "#512E5F"}}>{data.label}</label>
          </td>
          <td>
            <input type={data.inputType} value={data.value} name={data.name} accept={data.accept} multiple={data.multiple} 
            message={data.message} onChange={this.validate}/>
          </td>
        </table>
      </div>)


    return (
      <div>
        <Home />
        <form onSubmit={this.enteredValue}>
          <h6>Personal Details</h6>
          {Person}
        </form>
        <div>{renderedData}</div>
      </div>
    )
  }
}
const mapStateToProps = (reduxState) => {
  return { data: reduxState }
}

export default connect(mapStateToProps, { pesonalDetails, personalForm })(Personal);


