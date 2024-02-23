import React, { Component } from 'react';
import { connect } from 'react-redux';
import { textFieldChange } from './../../actions';

class DuplicateTextFieldComponent extends Component {

    render() {
        return (
            <div className="col-md-6 form-group">
                <input type="text" className="form-control row" placeholder="Enter text" value={this.props.textFieldValue} onChange={this.props.textFieldChange} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        textFieldValue: state.actionReducer.textFieldValue,
    }
}

const mapDispatchToProps = {
    textFieldChange
};

const DuplicateTextFieldContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DuplicateTextFieldComponent);

export default DuplicateTextFieldContainer;