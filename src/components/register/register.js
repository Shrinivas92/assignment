import React, { Component } from 'react'
import { connect } from 'react-redux';
import { registerDetails, registerForm } from '../redux/actions/updateAction';



export class register extends Component {

    componentDidMount() {
        this.props.registerDetails(register);
    }
    constructor(props) {
        super(props)

        this.state = {
            register: [],
            registered: {
                firstname: '',
                lastname: '',
                email: '',
                password: ''
            }
        }
    }
    register = (e) => {
        e.preventDefault();
        this.props.registerForm(this.state.registered)

        console.log('event log', e.target[register.name].value)
        console.log('response', this.state.res)
        this.props.history.push('/educational')
        //this.props.contactForm(this.state.res)
    }

    render() {
        console.log('registered state==', this.state.registered)
        return (
            <div>
                <form onSubmit={this.register}>
                    <h2>Register Here</h2>
                    <table style={{ marginLeft: "350px", textAlign: "center" }}>
                        <tr>
                            <td style={{ width: "300px", textAlign: "right" }}>
                                <label>First Name</label>
                            </td>
                            <td>
                                <input type="text" name="firstname"
                                    onChange={e => this.setState({
                                        registered:
                                        {
                                            ...this.state.registered,
                                            firstname: e.target.value
                                        }
                                    })} />
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: "300px", textAlign: "right" }}>
                                <label>Last Name</label>
                            </td>
                            <td>
                                <input type="text" name="lastname"
                                    onChange={e => this.setState({
                                        registered:
                                        {
                                            ...this.state.registered,
                                            lastname: e.target.value
                                        }
                                    })} />
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: "300px", textAlign: "right" }}>
                                <label>Email</label>
                            </td>
                            <td>
                                <input type="email" name="email"
                                    onChange={e => this.setState({
                                        registered:
                                        {
                                            ...this.state.registered,
                                            email: e.target.value
                                        }
                                    })} />
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: "300px", textAlign: "right" }}>
                                <label>Password</label>
                            </td>
                            <td>
                                <input type="password" name="password"
                                    onChange={e => this.setState({
                                        registered:
                                        {
                                            ...this.state.registered,
                                            password: e.target.value
                                        }
                                    })}
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                />
                            </td>
                        </tr>
                        <tr style={{ width: "20px" }}>

                        </tr>
                        <td>
                        </td>
                        <td>
                            <input type='submit' value='Register' name='register'
                                style={{ width: "250px", textAlign: "center", marginLeft: "10px" }} />
                        </td>
                    </table>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    console.log('redux data is-------', reduxState)
    return { data: reduxState }
}


export default connect(mapStateToProps, { registerDetails, registerForm })(register);
