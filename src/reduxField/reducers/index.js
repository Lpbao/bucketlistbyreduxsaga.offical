import { combineReducers } from 'redux'
import task from './task'
import loading from './loading'
import modal from './modal'
import { reducer as formReducer } from 'redux-form'
import noticeBoard from './noticeBoard'

const myReducer = combineReducers({
    task,
    loading,
    modal,
    noticeBoard,
    form: formReducer
})

export default myReducer
