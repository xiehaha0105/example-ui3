import http from '../utils/request'

//get有值
export function testCache(params: any) {
    return http.request({
        url: '/cache/testCache/' + params,
        method: 'get'
    })
}

export function genTableTree() {
    return http.request({
        url: '/table/genTableTree',
        method: 'get'
    })
}
