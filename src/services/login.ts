import request from '@/utils/request'

interface LoginProps {
    name?:string;
    password?: string;
}
export async function doLogin(params: LoginProps){
    return request('/api/login', {
        method: 'POST',
        data: params
    })
}