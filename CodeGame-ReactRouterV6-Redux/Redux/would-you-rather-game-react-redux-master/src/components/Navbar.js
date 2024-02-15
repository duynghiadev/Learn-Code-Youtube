import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser';
import { connect } from 'react-redux';

class Navbar extends Component {

    state = {
        active: false,
    }

    handleLogout = () => {
        this.props.setAuthedUser();
    }

    toggleMenu = () => {
        this.setState((state) => ({
            active: !state.active,
        }))
    }

    render() {
        const { users, authedUser } = this.props;
        const isActive = this.state.active ? 'is-active' : '';
        return(
            <div>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                      <Link className="navbar-item" to="/">
                        <b> Would You Rather? </b>
                      </Link>
                    </div>
                    <div className="navbar-end">
                        <Link className="navbar-item" to="/">
                            Home
                        </Link>
                        <Link className="navbar-item" to="/add">
                            New Question
                        </Link>
                        <Link className="navbar-item" to="/leadboard">
                            Leadboard
                        </Link>
                        <div className={`navbar-item dropdown ${isActive}`}> 
                            <div className="dropdown-trigger">
                                <button onClick={this.toggleMenu} className="button is-primary is-outlined" aria-haspopup="true" aria-controls="dropdown-menu">
                                    <span className="username"> { users[authedUser].name } </span>
                                    <span className="icon is-small">
                                        <figure className="image is-24x24">
                                            <img className="is-rounded" src={ users[authedUser].avatarURL } alt="placeholder"/>
                                        </figure>
                                    </span>
                                </button>                            
                            </div>
                            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                    <span className="dropdown-item" onClick={this.handleLogout}>
                                        Logout
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = ({ authedUser, users }) => {
    return {
        authedUser,
        users,
    }
}

export default connect(mapStateToProps, { setAuthedUser })(Navbar);