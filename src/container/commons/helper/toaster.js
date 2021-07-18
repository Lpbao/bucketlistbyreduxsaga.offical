import {toast } from 'react-toastify';

export const toastError = error => {
    if(typeof error === 'object' && error.message) {
        toast.error(error.message)
    }
}