import *as taskTypes from '../../constants/task'
import *as toaster from '../../container/commons/helper/toaster'

const initialState = {
    tasks:[]
}

const finddingIndex = (id , tasks) => {
    var result = -1
    tasks.forEach((task , index) => {
        if(task.id === id){
            result = index
        }
    })
    return result
}

const myReducer = (state = initialState , action) => {
    switch(action.type){
        case taskTypes.FETCH_API:
            return {
                ...state,
                tasks: []
            }
        case taskTypes.FETCH_API_SUCCESS:
            return {
                ...state,
                tasks: action.payload.tasks
            }
        case taskTypes.FETCH_API_FAILURE:
            const {error} = action.payload
            toaster.toastError(error)
            return {
                ...state
            }
        case taskTypes.FILTER_TASK:
            return {
                ...state
            }
        case taskTypes.FILTER_TASK_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                tasks: action.payload.data
            }
        case taskTypes.ADD_TASK:
            return {
                ...state
            }
        case taskTypes.ADD_TASK_SUCCESS:
            console.log(action.payload.data)
            return {
                ...state,
                tasks: [action.payload.data].concat(state.tasks)
            }
        case taskTypes.ADD_TASK_FAILURE:
            console.log(action.payload.error)
            toaster.toastError(action.payload.error)
            return {
                ...state
            }
        case taskTypes.UPDATE_TASK:
            return {
                ...state
            }
        case taskTypes.UPDATE_TASK_SUCCESS:
            var index = finddingIndex(action.payload.data.id , state.tasks)
            state.tasks[index] = action.payload.data
            
            return {
                ...state,
                tasks: [...state.tasks]
            }
        case taskTypes.UPDATE_TASK_FAILURE:
            toaster.toastError("UPDATE FAILURE")
            return {
                ...state
            }
        case taskTypes.DELETE_TASK:
            return {
                ...state
            }
        case taskTypes.DELETE_TASK_SUCCESS:
            
            const newTask = state.tasks.filter(task => task.id !== action.payload.data.id)
            
            return {
                ...state,
                tasks: newTask
            }
        case taskTypes.DELETE_TASK_FAILURE:
            toaster.toastError("DELETE FAILURE")
            return {
                ...state
            }
        default:
            return state
    }
}

export default myReducer