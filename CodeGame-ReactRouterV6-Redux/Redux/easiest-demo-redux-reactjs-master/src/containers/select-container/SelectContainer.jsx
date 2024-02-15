import React, { Component } from 'react';

import SelectComponent from './../../components/select/SelectComponent.jsx';
import DuplicateSelectComponent from './../../components/duplicate-select/DuplicateSelectComponent.jsx';

class SelectContainer extends Component {

    render() {
        return (
            <div className="content">
                <div className="row">
                    <div className="col-md-12">
                        <SelectComponent />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h2>Duplicating state in child component</h2>
                        <div className="row">
                            <div className="col-md-12">
                                <DuplicateSelectComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SelectContainer;