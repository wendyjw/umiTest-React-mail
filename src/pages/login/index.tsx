import React from 'react'
import styles from './index.less';
import { connect, history, Redirect } from 'umi'
import { ConnectState, ConnectProps, UserModelState } from '@/models/connect'
interface LonginProps extends ConnectProps {
  user: UserModelState
}
const Login: React.FC<LonginProps> = ({ user, location }) => {
  const { userid } = user.currentUser
  const isLogin = !!userid
  const { from = '/' } = location.state || {}
  
  if (isLogin) {
    return <Redirect to={from} />
  } else {

  }
  return (
    <div>
      <h1 className={styles.title}>Login index</h1>
    </div>
  );
}
export default connect(({ user }: ConnectState) => ({ user }))(Login)
