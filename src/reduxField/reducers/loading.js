import *as loadingTypes from '../../constants/loading'

const initialState = {
    show: false,
    showSidebar: false
}

const myReducer = (state = initialState , action) => {
    switch(action.type){
        case loadingTypes.SHOW_LOADING:
            return {
                ...state,
                show: true
            }
        case loadingTypes.HIDE_LOADING:
            return {
                ...state,
                show: false
            }
        case loadingTypes.SHOW_SIDEBAR:
            return {
                ...state,
                showSidebar: true
            }
        case loadingTypes.HIDE_SIDEBAR:
            return {
                ...state,
                showSidebar: false
            }
        default: 
            return state
    }
}

export default myReducer