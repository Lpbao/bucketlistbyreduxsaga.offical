import *as modalTypes from '../../constants/modal'

const initialState = {
    showModal: false,
    edittedTask: {},
    edittingMode: false
}

const myReducer = (state = initialState , action) => {
    switch(action.type){
        case modalTypes.OPEN_MODAL:
            return {
                ...state,
                showModal: true,
                edittingMode: false,
            }
        case modalTypes.CLOSE_MODAL:
            return {
                ...state,
                showModal: false,
                edittedTask: {}
            }
        case modalTypes.SET_EDITTING_TASK:
            return{
                ...state,
                showModal: true,
                edittingMode: true,
                edittedTask: action.payload.edittedTask
            }
        default:
            return state
    }
}

export default myReducer