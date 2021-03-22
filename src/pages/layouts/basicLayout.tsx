import BottomNav from '@/components/bottomNav'
import React, { useEffect } from 'react'
import { Location, connect, Dispatch } from 'umi'
import style from './BasicLayout.less'
import '@/img/iconfont/iconfont.css'
interface BasicLayoutProps {
    location: Location,
    user: any,
    dispatch: Dispatch,
}
const BasicLayout: React.FC<BasicLayoutProps> =(props) => {
    const { children, location, dispatch} = props
    useEffect(() => { 
        if (dispatch) {
            dispatch({
                type: 'user/fetchCurrent'
            })
        }
    }, [])
    
    return (
        <div className={style.main}>
            <article>{children}</article>
            <footer>
                <BottomNav pathname={location.pathname} />
            </footer>
        </div>
    )
}
export default connect(({user}) => ({user}))(BasicLayout)
// export default connect(({user}) => {user})(BasicLayout); // !错误写法，注意括号

// mapStateToProps?: (state, ownProps?) => Object
// const mapStateToProps = (state) => ({ todos: state.todos })

// mapDispatchToProps?: Object | (dispatch, ownProps?) => Object
// const mapDispatchToProps = (dispatch, ownProps) => ({
//     toggleTodo: () => dispatch(toggleTodo(ownProps.todoId)),
//   })