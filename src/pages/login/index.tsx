import React from 'react'
import styles from './index.less';
import { connect, history, Redirect } from 'umi'
import { ConnectState, ConnectProps, UserModelState } from '@/models/connect'
import LoginForm from './loginForm';
interface LonginProps extends ConnectProps {
  user: UserModelState;
}
const Login: React.FC<LonginProps> = ({ user, location, dispatch }) => {
  const { userid } = user.currentUser
  const isLogin = !!userid
  const { from = '/' } = location.state || {}
  
  if (isLogin) {
    return <Redirect to={from} />
  } else {

  }
  const handleSubmit = (values:any) => {
    dispatch({
      type: 'user/doLogin',
      payload: values
    })
  }
  return (
    <div className={styles.main}>
      <i className={styles.logo}></i>
      <LoginForm handleSubmit = {handleSubmit} />
    </div>
  );
}
export default connect(({ user }: ConnectState) => ({ user }))(Login)
