import *as loadingTypes from '../../constants/loading'

export const showLoading = () => {
    return {
        type: loadingTypes.SHOW_LOADING
    }
}

export const hideLoading = () => {
    return {
        type: loadingTypes.HIDE_LOADING
    }
}

export const showSidebar = () => {
    return {
        type: loadingTypes.SHOW_SIDEBAR
    }
}

export const hideSidebar = () => {
    return {
        type: loadingTypes.HIDE_SIDEBAR
    }
}