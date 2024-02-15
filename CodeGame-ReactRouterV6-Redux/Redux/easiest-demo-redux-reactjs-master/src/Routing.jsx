import { Redirect } from "react-router-dom";
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import TabContainer from './containers/tab-container/TabContainer.jsx'
import TextFieldContainer from "./containers/textfield-container/TextFieldContainer";
import SelectContainer from "./containers/select-container/SelectContainer";
import CheckboxContainer from "./containers/checkbox-container/CheckboxContainer";
import RadioContainer from "./containers/radio-container/RadioContainer";

export class Routing extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" render={() => (
                    <Redirect to="/tabs" />
                )} />
                <Route exact path='/tabs' component={TabContainer} />
                <Route exact path="/textfield" component={TextFieldContainer} />
                <Route exact path="/select" component={SelectContainer} />
                <Route exact path="/checkbox" component={CheckboxContainer} />
                <Route exact path="/radio" component={RadioContainer} />
            </Switch>
        )
    }
}
