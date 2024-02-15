import React, { Component } from 'react';
import { handleAddAnswer } from '../actions/questions';
import { connect } from 'react-redux';

class AnswerQuestion extends Component {

    state = {
        answer: '',
    }

    handleChange = (e) => {
        this.setState({
            answer: e.target.value,
        })
    }

    handleSubmit = () => {
        const {authedUser, question} = this.props;
        const { answer } = this.state;
        this.props.dispatch(handleAddAnswer(authedUser, question.id, answer));
    }

     render() {
        const { question, users } = this.props;

        return(
            <div className="columns is-centered question">
                <div className="column is-7 has-background-white-ter">
                    <div className="card question-panel">
                        <header className="header has-background-primary">
                            <p className="card-header-title has-text-light"> {users[question.author].name} Asked </p>
                        </header>
                        <div className="card-content">
                            <div className="content columns">
                                <div className="column is-3">
                                        <figure className="image is-96x96">
                                            <img className="is-rounded" src={users[question.author].avatarURL} alt="dp"/>
                                        </figure>
                                </div>
                                <div className="column">
                                        <h6 className="has-text-left">Would you rather?</h6>
                                        <div className="list">
                                            <li className="list-item"> 
                                                <label className="radio">
                                                    <input type="radio" name="answer" value="optionOne" onChange={this.handleChange}/>
                                                </label>
                                                {question.optionOne.text}
                                            </li>
                                            <li className="list-item"> 
                                                <label className="radio">
                                                    <input type="radio" name="answer" value="optionTwo" onChange={this.handleChange} />
                                                </label>
                                                {question.optionTwo.text}
                                            </li>
                                        </div>
                                        <div className="is-pulled-left">
                                            <button type="submit" className="button is-dark" onClick={this.handleSubmit}> Submit </button>
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

export default connect()(AnswerQuestion);