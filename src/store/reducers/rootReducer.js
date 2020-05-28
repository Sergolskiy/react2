import {combineReducers} from "redux";
import mainReducer from './mainReducer'
import breadcrumbsReducer from './breadcrumbsReducer'

export default combineReducers({
  mainReducer: mainReducer,
  breadcrumbsReducer: breadcrumbsReducer
})
