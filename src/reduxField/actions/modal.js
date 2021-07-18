import *as modalTypes from '../../constants/modal'

export const openModal = () => {
    return {
        type: modalTypes.OPEN_MODAL
    }
}

export const closeModal = () => {
    return {
        type: modalTypes.CLOSE_MODAL
    }
}

export const  setEdittingTask = (task) => {
    return {
        type: modalTypes.SET_EDITTING_TASK,
        payload: {
            edittedTask: task
        }
    }
}