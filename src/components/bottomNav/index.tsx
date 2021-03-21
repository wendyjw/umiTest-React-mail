import React, { useEffect } from 'react'
import { TabBar } from 'antd-mobile'
import {history} from 'umi'
const TabBarItem = TabBar.Item
interface BottomNavProps {
    pathname: string
}
const menu = [
    { title: '首页', link: '/', icon: 'shouye' },
    { title: '购物车', link: '/cart', icon: '3' },
    { title: '订单', link: '/list', icon: 'dingdan' },
    { title: '我的', link: '/user', icon: 'wode' },
]
const BottomNav: React.FC<BottomNavProps> = props => {

    useEffect(() => { }, [])
    const { pathname } = props
    
    return (
        <TabBar
        tintColor='red'
        >
            {
                menu.map(({ title, link, icon }) => {
                    return <TabBarItem
                        key={link}
                        title={title}
                        icon={<span className={'iconfont icon-' + icon}></span>}
                        onPress={() => {
                            history.push(link)
                        }}
                        selectedIcon={<span className={'red iconfont icon-' + icon}></span>}
                        selected={ pathname === link}
                    />
                })
            }
        </TabBar>
    )
}
export default BottomNav