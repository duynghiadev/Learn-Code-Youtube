import React from 'react';

const QuestionResult = (props) => {
    
    const { question, users, authedUser } = props;

    const optionOneSelected = question.optionOne.votes.includes(authedUser);
    const optionTwoSelected = question.optionTwo.votes.includes(authedUser);

    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;
    
    const percentageCalculator = (part, total) => {
        return (part/total) * 100;
    }

    return(
        <div className="columns is-centered question-result">
            <div className="column is-7 has-background-white-ter">
                <div className="card question-result-panel">
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
                                <li className={`list-item  ${optionOneSelected && "has-background-white-ter"}`}> 
                                    Would you rather {question.optionOne.text}?
                                    { optionOneSelected && <SelectionBadge /> }
                                        <div>
                                            <progress className="progress is-small" value={percentageCalculator(optionOneVotes, totalVotes)} max="100"> {percentageCalculator(optionOneVotes, totalVotes)} </progress>
                                        </div>
                                        <div className="has-text-right">
                                            <span className="tag is-info"> {`${optionOneVotes} out of ${totalVotes}`} votes</span>
                                        </div>
                                </li>
                                <li className={`list-item  ${optionTwoSelected && "has-background-white-ter"}`}> 
                                    Would you rather {question.optionTwo.text}?
                                    { optionTwoSelected && <SelectionBadge /> }
                                        <div>
                                            <progress className="progress is-small" value={percentageCalculator(optionTwoVotes, totalVotes)} max="100"> {percentageCalculator(optionTwoVotes, totalVotes)} </progress>
                                        </div>
                                        <div className="has-text-right">
                                            <span className="tag is-info"> {`${optionTwoVotes} out of ${totalVotes}`} votes</span>
                                        </div>
                                </li>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

const SelectionBadge = () => (
    <span className="selection-badge is-pulled-right">
        <i className="fa fa-check-circle"> </i>
        You Chose
    </span>
);

export default QuestionResult;