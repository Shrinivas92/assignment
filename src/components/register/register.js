import React, { Component } from 'react'
import { connect } from 'react-redux';
import { registerDetails, registerForm } from '../redux/actions/updateAction';
import Background from '../../assets/img2.jpg';
import { baseUrl } from '../utils/utils';



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

        fetch(`${baseUrl}/users`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname: this.state.registered.firstname,
                lastname: this.state.registered.lastname,
                email: this.state.registered.email,
                password: this.state.registered.password
            })
        }).then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
            this.props.history.push('/educational')
    }

    render() {
        console.log('registered state==', this.state.registered)
        return (
            <div style={{
                background: `url(${Background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '750px'
            }}>
                <form onSubmit={this.register}>
                    <h2 style={{ color: '#17202A' }}>Register Here</h2>
                    <table align="center" style={{ border: "1px solid", background: "#F7DC6F", boxShadow: "5px 10px #566573", padding: "20px 0px" }}>
                        <tr>

                            <input type="text" name="firstname" placeholder="First Name"
                                onChange={e => this.setState({
                                    registered:
                                    {
                                        ...this.state.registered,
                                        firstname: e.target.value
                                    }
                                })} />
                        </tr>
                        <tr>


                            <input type="text" name="lastname" placeholder="Last Name"
                                onChange={e => this.setState({
                                    registered:
                                    {
                                        ...this.state.registered,
                                        lastname: e.target.value
                                    }
                                })} />

                        </tr>
                        <tr>
                            <input type="email" name="email" placeholder="Email"
                                onChange={e => this.setState({
                                    registered:
                                    {
                                        ...this.state.registered,
                                        email: e.target.value
                                    }
                                })} />

                        </tr>
                        <tr>

                            <input type="password" name="password" placeholder="Password"
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

                        </tr>
                        <tr style={{ width: "20px" }}>

                        </tr>

                        <input type='submit' value='Register' name='register'
                            style={{ width: "250px", textAlign: "center", marginLeft: "10px" }} />

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
