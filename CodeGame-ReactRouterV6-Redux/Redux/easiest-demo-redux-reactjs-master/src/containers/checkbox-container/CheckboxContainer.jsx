import React, { Component } from 'react';

import CheckboxComponent from './../../components/checkbox/CheckboxComponent.jsx';
import DuplicateCheckboxComponent from './../../components/duplicate-checkbox/DuplicateCheckboxComponent.jsx';

class CheckboxContainer extends Component {

    render() {
        return (
            <div className="content">
                <div className="row">
                    <div className="col-md-12">
                        <CheckboxComponent />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h2>Duplicating state in child component</h2>
                        <div className="row">
                            <div className="col-md-12">
                                <DuplicateCheckboxComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CheckboxContainer;