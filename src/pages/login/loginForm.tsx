import React, {useEffect} from 'react'
import { InputItem, Button } from 'antd-mobile'
// import { ConnectState, ConnectProps, UserModelState } from '@/models/connect'
import {createForm} from 'rc-form'
interface LonginFormProps {
    form: {
        getFieldDecorator: Function;
        getFieldsValue: Function;
        getFieldProps: Function;
    };
    handleSubmit: Function;

}
const LoginForm: React.FC<LonginFormProps> = ({form, handleSubmit}) => {
    const { getFieldsValue, getFieldProps} = form
    const submit = () => {
        let vals = getFieldsValue()
        handleSubmit(vals)
    }
    return (
        <div>
            <InputItem {...getFieldProps('name')} type='text' placeholder='输入用户名' clear>User</InputItem>
            <InputItem {...getFieldProps('password')} type='password' placeholder='输入密码' clear>Password</InputItem>
            <Button type='primary' onClick={submit}>submit</Button>
        </div>
    );
}
export default createForm()(LoginForm)
