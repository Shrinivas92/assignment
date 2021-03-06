import React, { Component } from 'react';
import { connect } from 'react-redux';
import educationData from '../eduData.json';
import { educationalDetails, educationalForm } from '../redux/actions/updateAction';
import Home from '../Home Component/Home';
import { baseUrl } from '../utils/utils.js';
// import Background from '../../assets/img2.jpg';

class Educational extends Component {

  constructor(props) {
    super(props)

    this.state = {
      res: [],
      fname: "",
      Institute_name: ""
    }
  }

  componentDidMount() {
    // 
    this.props.educationalDetails(educationData);
    // 
  }

  enteredValue = (e) => {
    e.preventDefault();

    console.log("submit event", e);
    console.log("response data======",this.state)
    
        fetch(`${baseUrl}/education`, {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              fullname: this.state.fname,
              institutename: this.state.Institute_name,
              location: this.state.location,
              contact: this.state.contact,
              image: this.state.rank,
              report: this.state.upload
          })
      }).then(res => res.json())
          .then(data => console.log(data))
          .catch(err => console.log(err));
    
        // this.state.res.push(e.target[eduData.name].value)
      
      // console.log('event log', e.target[eduData.name].value)
      console.log('response', this.state.res)
    
    this.props.educationalForm(this.state.res)
    var frm = document.getElementsByName('educationForm')[0];
    frm.reset();
  }
  validate = (e) => {

    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    const renderedData = this.props.data.educationalForm.map((data, index) => {
      console.log('rendered data', data)
      console.log('index is', index)
      return <div>
        <h1>

          {data}
        </h1>
      </div>
    })


    console.log("the data is", this.props.data)
    const Education = this.props.data.educationalData.map(education => {
      if (education.type === "input") {
        return <div>
          <div >
            <table style={{ marginLeft: "350px" }}>
              <td style={{ width: "300px", textAlign: "right" }}>
                <label style={{color: "#512E5F"}}>{education.label} :</label>
              </td>
              <td>
                <input type={education.inputType} value={education.value} name={education.name} multiple={education.multiple} accept={education.accept} onChange={this.validate} />
                {education.name == "fname" && this.state.fname.length < 3 && this.state.fname.length > 0 && <p style={{ color: "red" }}>Enter Value</p>}
                {education.name == "Institute_name" && this.state.Institute_name.length < 3 && this.state.Institute_name.length > 0 && <p style={{ color: "red" }}>Enter Value</p>}
              </td>
            </table>
            {/* { education.name=="fname" && this.state.fname.length<3 && this.state.fname.length >0 &&<p>Enter Name</p>}
         { education.name=="Institue_name" && this.state.Institue_name.length<3 && this.data.Institue_name.length >0 &&<p>Enter Name</p>} */}
          </div>
        </div>
      }
      else if (education.type === "select") {
        return (
          <div class="input-field col s12 m6">
            <table style={{ marginLeft: "350px" }}>
              <td style={{ width: "300px", textAlign: "right" }}>
                <label style={{color: "#512E5F"}}>{education.label}</label>
              </td>
              <td style={{ width: "300px" }}>
                <select type={education.inputType} value={education.value} name={education.name} style={{ width: "260px", height: "30px" }}>
                  
                  <option value="1">{education.option1}</option>
                  <option value="1">{education.option2}</option>
                  <option value="1">{education.option3}</option>
                </select>
              </td>
            </table>
          </div>)
      }
      //<div className="input-field col s12 m6">
      // <label>{education.label}</label>
      // <select type={education.inputType} value={education.value} name={education.name} required={education.required}>
      //   <option>{education.option1}</option>
      //   <option>{education.option2}</option>
      //   <option>{education.option3}</option>
      // </select>
      // </div>

      // }
      else if (education.type === "submit") {
        return (<div>
          <div>
            <table style={{ marginLeft: "550px" }}>
              <tr style={{ width: "20px" }}>
                <label>{education.label}</label>
                <input type={education.inputType} value={education.value} name={education.name} style={{ width: "250px", textAlign: "center" }} />
              </tr>
            </table>
          </div>
        </div>)
      }
    })

    return (
      <div >
        <Home />
        <div>
           {/* style={{
          background: `url(${Background})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          opacity: "0.7",
          height: '750px'
        }}> */}

          <form onSubmit={this.enteredValue} name="educationForm">
            <div >
              <h6>Education Details</h6>
              {Education}
            </div>
          </form>
        </div>
        <div>
          {renderedData}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (reduxState) => {
  return { data: reduxState }
}

export default connect(mapStateToProps, { educationalDetails, educationalForm })(Educational);

