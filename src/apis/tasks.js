
import { URL_API } from "../constants";
import axiosService from "../container/commons/axiosService";
import qs from 'query-string'

const url = "task"

export const  fetchApi = (params = {}) => {
    var queryParams = ''
    if(Object.keys(params).length > 0){
        queryParams = `?${qs.stringify(params)}`
    }
    return axiosService.get(`${URL_API}/${url}${queryParams}`)
}

export const postApi = (data) => {
    return axiosService.post(`${URL_API}/${url}` , data)
}

export const putApi = (data) => {
    return axiosService.put(`${URL_API}/${url}/${data.id}` , data)
}

export const deleteApi = (data) => {
    return axiosService.delete(`${URL_API}/${url}/${data.id}`)
}