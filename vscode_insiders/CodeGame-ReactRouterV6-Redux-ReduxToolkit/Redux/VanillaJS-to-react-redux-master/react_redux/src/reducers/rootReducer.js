import {combineReducers} from 'redux';
import books from './books';
import filterType from './filterType';

export default combineReducers({
	books,
	filterType
});