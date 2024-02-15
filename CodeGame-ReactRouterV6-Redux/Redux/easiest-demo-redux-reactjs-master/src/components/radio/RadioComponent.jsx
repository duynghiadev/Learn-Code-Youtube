import React, { Component } from 'react';
import { connect } from 'react-redux';
import { radioChanged } from './../../actions';

class RadioComponent extends Component {

    render() {
        return (
            <div className="form-group">
                <div className="form-check">
                    <input type="radio" name="options1" checked={this.props.selectedOption === 1} id="option1" onChange={() => this.props.radioChanged(1)} />
                    <label className="form-check-label" htmlFor="option1"> Option 1</label>
                </div>
                <div className="form-check">
                    <input type="radio" name="options1" checked={this.props.selectedOption === 2} id="option2" onChange={() => this.props.radioChanged(2)} />
                    <label className="form-check-label" htmlFor="option2"> Option 2</label>
                </div>
                <div className="form-check">
                    <input type="radio" name="options1" id="option3" checked={this.props.selectedOption === 3} onChange={() => this.props.radioChanged(3)} />
                    <label className="form-check-label" htmlFor="option3"> Option 3</label>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        selectedOption: state.actionReducer.selectedOption,
    }
}

const mapDispatchToProps = {
    radioChanged
};

const RadioContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RadioComponent);

export default RadioContainer;