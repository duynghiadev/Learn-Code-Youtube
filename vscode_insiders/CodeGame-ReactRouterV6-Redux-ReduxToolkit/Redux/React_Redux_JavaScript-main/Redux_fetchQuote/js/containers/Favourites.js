import React from "react";
import { connect } from "react-redux";
import Quote from "../components/Quote";
import {fetchQuote, fetchQuoteFav} from "../redux/actions";
import Favourites from "../components/Favourites";

const mapStateToProps = (globalState) => {
    return {
        favQuote: globalState.favQuote
    };
};

export default connect(mapStateToProps)(Favourites);