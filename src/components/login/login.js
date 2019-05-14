import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link, history } from "react-router-dom";
import Background from '../../assets/adult-agent-approval-684385.jpg'

import { baseUrl } from '../utils/utils.js';


export class login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }
    componentWillMount() {
        fetch(`${baseUrl}/users`, {
            method: 'GET',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }) .then(resp => {
                const data = resp.data;
                data.forEach(e => {
                    console.log(`${e.firstname}, ${e.lastname}, ${e.email}, ${e.password}`);
                });
            })
            .catch(error => {
                console.log(error);
            });
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
        else if (this.state.email !== filtered[0].email) {
            alert('invalid email id')
        }
        else if (this.state.password !== filtered[0].password) {
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
            <div style={{
                background: `url(${Background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '750px',
            }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <form onSubmit={this.login}>
                        <h2 style={{ color: '#17202A' }}>Login Here</h2>

                        <table align="center" style={{ border: "1px solid", background: "#F7DC6F", boxShadow: "5px 10px #566573", padding: "20px 0px" }}>

                            {/* <td style={{ width: "50px", textAlign: "right" }}>
                    <label>Email</label>
                </td> */}

                            <input type="text" name="email" placeholder="Email"
                                onChange={e => this.setState({ [e.target.name]: e.target.value })} />
                            <tr>
                                <input type="password" name="password" placeholder="Password"
                                    onChange={e => this.setState({ [e.target.name]: e.target.value })}
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                />
                            </tr>
                            <tr>
                                <input type='submit' value='Login' name='Login'
                                    style={{ width: "250px", textAlign: "center", marginLeft: "10px" }} />
                            </tr>
                            <tr>
                                Dont have account?
                        <Link type="button" to='/register'>Register</Link>
                            </tr>
                        </table>
                    </form>
                </div >
            </div>
        )
    }
}
const mapStateToProps = (reduxState) => {
    console.log('redux data is-------', reduxState)
    return { data: reduxState }
}

export default connect(mapStateToProps)(login)
