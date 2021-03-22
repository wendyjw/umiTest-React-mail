// 定义所有 model state 类型，用于页面connect 函数中使用
import { UserModelState } from './user'

export interface ConnectState {
    user: UserModelState
}
export interface ConnectProps {
    location: Location & {state: {from: string}}
}

export {
    UserModelState
}