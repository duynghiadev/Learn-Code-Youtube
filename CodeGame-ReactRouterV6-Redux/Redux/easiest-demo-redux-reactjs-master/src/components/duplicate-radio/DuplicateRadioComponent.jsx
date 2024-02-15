import React, { Component } from 'react';
import { connect } from 'react-redux';
import { radioChanged } from './../../actions';

class DuplicateRadioComponent extends Component {

    render() {
        return (
            <div className="form-group">
                <div className="form-check">
                    <input type="radio" name="options2" checked={this.props.selectedOption === 1} id="option11" onChange={() => this.props.radioChanged(1)} />
                    <label className="form-check-label" htmlFor="option11"> Option 1</label>
                </div>
                <div className="form-check">
                    <input type="radio" name="options2" checked={this.props.selectedOption === 2} id="option12" onChange={() => this.props.radioChanged(2)} />
                    <label className="form-check-label" htmlFor="option12"> Option 2</label>
                </div>
                <div className="form-check">
                    <input type="radio" name="options2" id="option13" checked={this.props.selectedOption === 3} onChange={() => this.props.radioChanged(3)} />
                    <label className="form-check-label" htmlFor="option13"> Option 3</label>
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

const DuplicateRadioContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DuplicateRadioComponent);

export default DuplicateRadioContainer;