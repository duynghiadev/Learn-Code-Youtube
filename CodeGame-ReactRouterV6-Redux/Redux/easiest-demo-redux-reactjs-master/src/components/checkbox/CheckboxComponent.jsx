import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkboxChange } from './../../actions';

import { store } from "./../../reducers/index";

class CheckboxComponent extends Component {

    onChangeCheckBox(event, id) {
        if (event.target.checked) {
            store.dispatch(checkboxChange(this.props.checkedValue.concat(id)));
        } else {
            let index = this.props.checkedValue.indexOf(id);
            let options = this.props.checkedValue.slice(0, index).concat(this.props.checkedValue.slice(index + 1));
            store.dispatch(checkboxChange(options));
        }
    }

    render() {
        return (
            <div className="row">
                <div className="form-group col-md-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="option1" id="ios" onChange={(e) => this.onChangeCheckBox(e, 'ios')} checked={this.props.checkedValue.indexOf('ios') !== -1} />
                        <label className="form-check-label" htmlFor="ios">ios</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="option1" id="android" onChange={(e) => this.onChangeCheckBox(e, 'android')} checked={this.props.checkedValue.indexOf('android') !== -1} />
                        <label className="form-check-label" htmlFor="android">Android</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="option1" id="angular" onChange={(e) => this.onChangeCheckBox(e, 'angular')} checked={this.props.checkedValue.indexOf('angular') !== -1} />
                        <label className="form-check-label" htmlFor="angular">Angular</label>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        checkedValue: state.actionReducer.checkedValue,
    }
}

const mapDispatchToProps = {
};

const CheckboxContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckboxComponent);

export default CheckboxContainer;