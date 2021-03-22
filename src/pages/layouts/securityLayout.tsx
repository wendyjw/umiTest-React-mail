
import { ConnectProps, ConnectState, UserModelState } from '@/models/connect'
import React, { useEffect } from 'react'
import { Location, connect, Redirect } from 'umi'
import style from './index.less'
interface SecurityLayoutProps extends ConnectProps {
    user: UserModelState,

}
const SecurityLayout: React.FC<SecurityLayoutProps> = (props) => {
    const { children, user, location } = props
    useEffect(() => {

    }, [])
    const { userid } = user.currentUser
    const isLogin = !!userid
    if (!isLogin) {
        // 没有登录，去登录页
        const pathname = '/login'
        const from = location.pathname
        return <Redirect to={{ pathname: pathname, state: { from: from } }} />
    } else {

    }
    return (
        <div>
            路由守卫
            <article>{children}</article>
        </div>
    )
}
export default connect(({ user }: ConnectState) => ({ user }))(SecurityLayout)
