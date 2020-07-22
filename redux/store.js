import { combineReducers } from "@reduxjs/toolkit";
import {createStore} from 'redux'
import authReducer from './auth/AuthSlice'

const rootReducer = combineReducers({authReducer})


export default () => createStore(rootReducer)
