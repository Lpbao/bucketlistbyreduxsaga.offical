
import *as taskTypes from '../../constants/task'

export const gettingTask = (params = {}) => {
    return {
        type: taskTypes.FETCH_API,
        payload: {
            params,
        }
    }
}

export const getTaskFail = (error) => {
    return {
        type: taskTypes.FETCH_API_FAILURE,
        payload: {
            error
        }
    }
}

export const getTaskSuccess = (data) => {
    return {
        type: taskTypes.FETCH_API_SUCCESS,
        payload: {
            tasks: data
        }
    }
}

export const filterTask = (keyword) => {
    return {
        type: taskTypes.FILTER_TASK,
        payload: {
            keyword
        }
    }
}

export const filterTaskSuccess = (data) => {
    return {
        type: taskTypes.FILTER_TASK_SUCCESS,
        payload: {
            data
        }
    }
}

export const addTask = (title , description) => {
    return {
        type: taskTypes.ADD_TASK,
        payload: {
            title ,
            description
        }
    }
}

export const addTaskSuccess = (data) => {
    return {
        type: taskTypes.ADD_TASK_SUCCESS,
        payload: {
            data
        }
    }
}

export const addTaskFailure = (error) => {
    return {
        type: taskTypes.ADD_TASK_FAILURE,
        payload: {
            error
        }
    }
}

export const updateTask = (body) => {
    return {
        type: taskTypes.UPDATE_TASK,
        payload: {
            body
        }
    }
}

export const updateTaskSuccess = (data) => {
    return {
        type: taskTypes.UPDATE_TASK_SUCCESS,
        payload: {
            data
        }
    }
}

export const updateTaskFailure = (error) => {
    return {
        type: taskTypes.UPDATE_TASK_FAILURE,
        payload: {
            error
        }
    }
}

export const deleteTask = (body) => {
    return {
        type: taskTypes.DELETE_TASK,
        payload: {
            body
        }
    }
}

export const deleteTaskSuccess = (data) => {
    return {
        type: taskTypes.DELETE_TASK_SUCCESS,
        payload: {
            data
        }
    }
}

export const deleteTaskFailure = (error) => {
    return {
        type: taskTypes.DELETE_TASK_FAILURE,
        payload: {
            error
        }
    }
}

 

