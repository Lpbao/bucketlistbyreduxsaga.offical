import {fork , take , call, put , delay , takeLatest , takeEvery} from 'redux-saga/effects'
import *as types from '../constants/task'
import *as taskApis from '../apis/tasks'
import *as callApiType from '../constants/api'
import *as taskActions from '../reduxField/actions/task'
import *as loadingActions from '../reduxField/actions/loading'
import *as apiDb from '../constants/index'
import *as modalActions from '../reduxField/actions/modal'
import *as noticeBoard from '../reduxField/actions/noticeBoard'

function*watchFetchListTask() {
    while(true){
        const action = yield take(types.FETCH_API)
        const {params} = action.payload
        yield put(loadingActions.showLoading())
        yield delay(1000)
        const resp = yield call(taskApis.fetchApi , params)
        const {data , status } = resp
        if(status === callApiType.CALL_API_SUCCESS){
            yield put(taskActions.getTaskSuccess(data))
        }
        else{
            yield put(taskActions.getTaskFail(data))
        }

        yield put(loadingActions.hideLoading())
    }
}

function*filterTask({payload}) {
    yield delay(500)
    const {keyword} = payload 
    yield put(taskActions.gettingTask({q: keyword}))
}

function*addTaskSaga({payload}) {
    yield put(modalActions.closeModal())
    yield put(loadingActions.showLoading())
    yield delay(1000)
    const body = {
        title: payload.title,
        description: payload.description,
        status: apiDb.STATUS[2].value
    }
    const resp = yield call(() => taskApis.postApi(body))
    console.log("BUGGGG" ,resp)
    const {status , data} = resp
    if(status === callApiType.POST_API_SUCCESS){
        yield put(taskActions.addTaskSuccess(data))
    }
    else{
        yield put(taskActions.addTaskFailure(data))
    }

    yield put(loadingActions.hideLoading())
}

function*updateTaskSaga({payload}){
    
    yield put(loadingActions.showLoading())
    
    const {body} = payload
    
    const resp = yield call(() => taskApis.putApi(body))
    const {status , data} = resp
    if(status === callApiType.CALL_API_SUCCESS){
        yield put(taskActions.updateTaskSuccess(data))
        yield put(modalActions.closeModal())
        
    }
    else{
        yield put(taskActions.updateTaskFailure(data))
    }
    yield delay(1000)
    yield put(loadingActions.hideLoading())
}

function*deleteTaskSaga({payload}){
    yield put(noticeBoard.closeNoticeBoard())
    yield put(loadingActions.showLoading())
    const {body} = payload
    const resp = yield(taskApis.deleteApi(body))
    const {status , data} = resp
    yield delay(1000)
    if(status === callApiType.CALL_API_SUCCESS){
        yield put(taskActions.deleteTaskSuccess(body))
    }
    else{
        yield put(taskActions.deleteTaskFailure(data))
    }
    yield put(loadingActions.hideLoading())
}

function*rootSaga() {
    yield fork(watchFetchListTask)
    yield takeLatest(types.FILTER_TASK , filterTask)
    yield takeEvery(types.ADD_TASK , addTaskSaga)
    yield takeEvery(types.UPDATE_TASK , updateTaskSaga)
    yield takeEvery(types.DELETE_TASK , deleteTaskSaga)
}

export default (rootSaga)