
import *as noticeBoardTypes from '../../constants/noticeBoard'

export const openNoticeBoard = (title , body) => {
    return {
        type: noticeBoardTypes.OPEN_NOTICE_BOARD,
        payload: {
            title,
            body
        }
    }
}

export const closeNoticeBoard = () => {
    return {
        type: noticeBoardTypes.CLOSE_NOTICE_BOARD
    }
}

