import logging from './logging'
import {applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

export default applyMiddleware(
    logging,
    thunk
)