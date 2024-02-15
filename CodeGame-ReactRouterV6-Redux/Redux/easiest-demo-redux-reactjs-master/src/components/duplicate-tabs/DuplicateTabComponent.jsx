import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tabClicked } from './../../actions';

class DuplicateTabComponent extends Component {

    render() {
        return (
            <div>
                <nav className="col-md-12">
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className={"nav-item nav-link" + (this.props.activeTab === 1 ? ' active' : '')} id="nav-tab1-tab" data-toggle="tab" href="#nav-tab1" role="tab" aria-controls="nav-tab1" aria-selected="true" onClick={() => this.props.tabClicked(1)}>Tab 1</a>
                        <a className={"nav-item nav-link" + (this.props.activeTab === 2 ? ' active' : '')} id="nav-tab2-tab" data-toggle="tab" href="#nav-tab2" role="tab" aria-controls="nav-tab2" aria-selected="false" onClick={() => this.props.tabClicked(2)}>Tab 2</a>
                        <a className={"nav-item nav-link" + (this.props.activeTab === 3 ? ' active' : '')} id="nav-tab3-tab" data-toggle="tab" href="#nav-tab3" role="tab" aria-controls="nav-tab3" aria-selected="false" onClick={() => this.props.tabClicked(3)}>Tab 3</a>
                    </div>
                </nav>
                <div className="tab-content col-md-12" id="nav-tabContent">
                    <div className={"tab-pane fade" + (this.props.activeTab === 1 ? ' show active' : '')} id="nav-tab1" role="tabpanel" aria-labelledby="nav-tab1-tab">
                        <h5>
                            Tab 1
                        </h5>
                    </div>
                    <div className={"tab-pane fade" + (this.props.activeTab === 2 ? ' show active' : '')} id="nav-tab2" role="tabpanel" aria-labelledby="nav-tab2-tab">
                        <h5>
                            Tab 2
                        </h5>
                    </div>
                    <div  className={"tab-pane fade" + (this.props.activeTab === 3 ? ' show active' : '')} id="nav-tab2" role="tabpanel" aria-labelledby="nav-tab3-tab">
                        <h5>
                            Tab 3
                        </h5>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        activeTab: state.actionReducer.activeTab,
    }
}

const mapDispatchToProps = {
    tabClicked
};

const DuplicateTabContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DuplicateTabComponent);

export default DuplicateTabContainer;
