import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

class Login extends Component {

    handleChange = (event) => {
        this.props.setAuthedUser(event.target.value);
    }

    render() {
        const { users } = this.props;

        return (
            <div className="columns is-centered question">
                <div className="column is-4 has-background-white-ter">
                    <div className="card question-panel">
                        <header className="header has-background-primary">
                            <p className="card-header-title has-text-light"> Login </p>
                        </header>
                        <div className="card-content">
                            <div className="content">
                            <div className="card-image">
                                <figure className="image 48x48px">
                                <img src="/images/johndoe.png" className="is-rounded" alt="Login-icon"/>
                                </figure>
                            </div>
                                <div className="control has-text-centered">
                                    <div className="select">
                                        <select onChange={this.handleChange} defaultValue={'DEFAULT'}>
                                            <option disabled value='DEFAULT'>Select User</option>
                                            {Object.entries(users).map((user, index) => (
                                                <option key={index} value={user[0]}> {user[1].name} </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ users, authedUser }) => {
    return {
        users,
        authedUser,
    }
}

export default connect(mapStateToProps, { setAuthedUser })(Login);