import React, { Component } from 'react';
import { handleSaveQuestion } from  './../actions/questions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class NewQuestion extends Component {

    state = {
        optionOneText: '',
        optionTwoText: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = () => {
        const { optionOneText, optionTwoText } = this.state;
        const { history, handleSaveQuestion } = this.props;
        handleSaveQuestion(optionOneText, optionTwoText, history);
        this.setState({
            optionOneText: '',
            optionTwoText: '',
        })
    }

    isQuestionInValid = () => {
        return (this.state.optionOneText === '' || this.state.optionTwoText === '')
    }

    render() {
        return(
            <div className="columns is-centered new-question">
                <div className="column is-6">
                    <div className="card">
                        <header className="card-header has-background-primary">
                            <p className="card-header-title has-text-light"> 
                                Create New Question 
                            </p>
                        </header>
                        <div className="card-content">
                            <div className="form">
                                <div className="field">
                                    <label className="label">Would you rather?</label>
                                    <div className="control">
                                        <input className="input" value={this.state.optionOneText} name="optionOneText" onChange={this.handleChange} type="text" placeholder="Enter first option" />
                                    </div>
                                    <div> OR </div>
                                    <div className="control">
                                        <input className="input" value={this.state.optionTwoText} name="optionTwoText" onChange={this.handleChange} type="text" placeholder="Enter second option" />
                                    </div>
                                    <div className="control">
                                        <button onClick={this.handleSubmit} disabled={this.isQuestionInValid()} className="button is-dark" type="submit">
                                            <span><i className="fa fa-thumbs-up"></i> Submit</span>
                                        </button>
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

export default withRouter(connect(null, { handleSaveQuestion } )(NewQuestion));
