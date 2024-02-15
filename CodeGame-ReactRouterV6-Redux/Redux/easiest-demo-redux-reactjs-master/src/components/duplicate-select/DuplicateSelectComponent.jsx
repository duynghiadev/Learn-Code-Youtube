import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectChange } from './../../actions';

class DuplicateSelectComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            values: [{
                id: 1,
                text: 1
            }, {
                id: 2,
                text: 2
            }, {
                id: 3,
                text: 3
            }, {
                id: 4,
                text: 4
            }, {
                id: 5,
                text: 5
            }]
        }
    }

    render() {
        return (
            <div className="col-md-6 form-group">
                <select className="form-control row" value={this.props.selectedValue} onChange={this.props.selectChange}>
                    {this.state.values.map((value, key) => (
                        <option key={key} value={value.id}> {value.text}</option>
                    ))}
                </select>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        selectedValue: state.actionReducer.selectedValue,
    }
}

const mapDispatchToProps = {
    selectChange
};

const DuplicateSelectContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DuplicateSelectComponent);

export default DuplicateSelectContainer;