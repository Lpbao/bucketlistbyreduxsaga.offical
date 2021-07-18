import *as noticeBoardTypes from '../../constants/noticeBoard'

const initialState = {
    showNoticeBoard: false,
    title: "",
    body: null
}

const myReducer = (state = initialState , action) => {
    switch(action.type){
        case noticeBoardTypes.OPEN_NOTICE_BOARD:
            return {
                ...state,
                showNoticeBoard: true,
                body: action.payload.body,
                title: action.payload.title
            }
        case noticeBoardTypes.CLOSE_NOTICE_BOARD:
            return {
                ...state,
                showNoticeBoard: false,
                title: "",
                body: null
            }
        default:
            return state
    }
}

export default myReducer