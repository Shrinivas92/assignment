import React, { Component } from 'react';
import contact from '../contact.json';
import '../Contact Component/Contact.css';
import { connect } from 'react-redux';
import { contactDetails, contactForm } from '../redux/actions/updateAction';
import Home from '../Home Component/Home';

class Contact extends Component {

  componentDidMount() {
    this.props.contactDetails(contact);
  }
  constructor(props) {
    super(props)
    this.state = {
      res: [],
      store: []
    }
  }
  enteredValue = (e) => {
    e.preventDefault();
    console.log("submit event", e);
    console.log('data', this.props.data)
    this.props.data.contactData.map(contact => {
      if (contact.name !== "submit") {
        this.props.contactForm(this.state)
        // this.state.res.push(e.target[contact.name].value)
      }

    })
  }

  render() {
    const listData = this.props.data;
    console.log("listData---", listData);
    const output = listData.contactForm.map((eachUser) => (
      <div key={eachUser.id}>
        <table>
          <tr>
            <td style={{ paddingRight: "50px" }}>{eachUser.email}</td>
            <td style={{ paddingRight: "50px" }}>{eachUser.name}</td>
            <td style={{ paddingRight: "50px" }}>{eachUser.comments}</td>
          </tr>
        </table>
      </div>
    ));




    const ContactDetails = contact.map(data => {

      if (data.type === "input") {
        return <div>
          <table style={{ marginLeft: "400px", textAlign: "right" }}>
            <td style={{ width: "300px", textAlign: "right" }}>
              <label>{data.label}</label>
            </td>
            <td style={{ width: "300px" }}>
              <input type={data.inputType} value={data.value} name={data.name}
                onChange={e => this.setState({ [e.target.name]: e.target.value })} />
            </td>
          </table>
        </div>
      }
      else if (data.type === "submit") {
        return <div style={{ textAlign: "center" }}>
          <table style={{ marginLeft: "600px" }}>
            <tr style={{ width: "20px" }}>
              <label>{data.label}</label>
              <input type={data.inputType} value={data.value} name={data.name}
                onChange={e => this.setState({ [e.target.name]: e.target.value })}
                style={{ width: "250px", textAlign: "center" }} />
            </tr>
          </table>
        </div>
      }
      else if (data.type === "textarea") {
        return <div>
          <table style={{ marginLeft: "600px", width: "20px" }}>
            <td style={{ width: "300px" }}>
              <label>{data.label}</label>
              <textarea type={data.inputType} rows={data.rows} coloumns={data.coloumns} value={data.value} name={data.name}
                onChange={e => this.setState({ [e.target.name]: e.target.value })}
                style={{ width: "200px" }}> </textarea>
            </td>
          </table>
        </div>
      }
    }
    )

    return (
      <div class="contain" style={{ textAlign: "center" }}>
        <Home />
        <form onSubmit={this.enteredValue}>
          <h6>Contact Details</h6>
          {ContactDetails}
        </form>
        <div >
          <table><tr>
            <th style={{ paddingRight: "50px" }}>ID</th>
            <th style={{ paddingRight: "50px" }}>Name</th>
            <th style={{ paddingRight: "50px" }}>Email</th>
          </tr></table>
          {output}

        </div>
      </div>
    )

  }
}
const mapStateToProps = (reduxState) => {
  console.log('redux data is-------', reduxState)
  return { data: reduxState }
}

export default connect(mapStateToProps, { contactDetails, contactForm })(Contact);




// if(this.props.schema.collectionName.length < 0)
// return <Expandable>
//           <ObjectDisplay
//               key={id}
//               parentDocumentId={id}
//               schema={schema[this.props.schema.collectionName]}
//               value={this.props.collection.documents[id]}
//           />
//       </Expandable>
// return <h1>hejsan</h1>
// }