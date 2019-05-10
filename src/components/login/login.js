import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link, history } from "react-router-dom";


export class login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    login = (e) => {
        e.preventDefault();
        console.log('props data=========', this.props);
        const registerDetails = this.props.data.registerForm
        console.log('register data is-------', registerDetails)
        var filtered = registerDetails.filter(result => {
            console.log('name', result.email)
            return result.email.match(this.state.email);
        });

        if (filtered.length === 0) {
            window.alert('invalid email or password')
            return this.props.history.push('/')
        }
        else if(this.state.email !== filtered[0].email) {
            alert('invalid email id')
        }
        else if(this.state.password !== filtered[0].password) {
            alert('invalid password')
        }
        else if (this.state.email === filtered[0].email && this.state.password === filtered[0].password) {

            return this.props.history.push('/educational')
        } else {
            console.log('Login failed')
        }
    }
    render() {
        console.log('changed state', this.state)
        return (
            <div className="container">
                <form onSubmit={this.login}>
                    <h2>Login Here</h2>
                    <table style={{ marginLeft: "350px", textAlign: "center" }} >
                        <tr>
                            <td style={{ width: "300px", textAlign: "right" }}>
                                <label>Email</label>
                            </td>
                            <td>
                                <input type="text" name="email"
                                    onChange={e => this.setState({ [e.target.name]: e.target.value })} />
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: "300px", textAlign: "right" }}>
                                <label>Password</label>
                            </td>
                            <td>
                                <input type="text" name="password"
                                    onChange={e => this.setState({ [e.target.name]: e.target.value })}
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                 title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                    />
                            </td>
                        </tr>
                        <tr>
                            <td>
                            </td>
                            <td>
                                <input type='submit' value='Login' name='Login'

                                    style={{ width: "250px", textAlign: "center", marginLeft: "10px" }} />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                Dont have account?
                        <Link type="button" to='/register'>Register</Link>
                            </td>

                        </tr>

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


export default connect(mapStateToProps)(login)
