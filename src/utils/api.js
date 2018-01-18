import fetch from './service'

// 作业一，获取默认待办任务
export function getTaskList() {
    return fetch({
        url: '/todos',
        method: 'get'
    })
}
// 作业二
// 获取默认列表数据
export function getDefaultList() {
    return fetch({
        url: '/tabDefault',
        method: 'get'
    })
}
// 点击按钮一 获取数据
export function getBtn1List() {
    return fetch({
        url: '/tab1',
        method: 'get'
    })
}
// 点击按钮二 获取数据
export function getBtn2List() {
    return fetch({
        url: '/tab2',
        method: 'get'
    })
}