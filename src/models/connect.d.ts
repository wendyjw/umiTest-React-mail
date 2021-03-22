// 定义所有 model state 类型，用于页面connect 函数中使用
import { Dispatch } from 'umi'
import { UserModelState } from './user'

export interface ConnectState {
    user: UserModelState
}
export interface ConnectProps {
    location: Location & {state: {from: string}};
    dispatch: Dispatch;
}

export {
    UserModelState
}