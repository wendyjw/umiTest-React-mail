import { Effect, Reducer } from 'umi';
import { queryCurrent} from '@/services/user';
import { doLogin} from '@/services/login';

interface CurrentUser {
    name?: string;
    icon?: string;
    userid?: string;
}

interface LoginResponse {
    status?: boolean;
    name?:string;
    icon?: string;
    userid?:string;
}
export interface UserModelState {
    currentUser: CurrentUser;
}

export interface UserModelType {
    namespace: 'user';
    state: UserModelState;
    effects: {
        fetchCurrent: Effect;
        doLogin: Effect;
    };
    reducers: {
        saveCurrentUser: Reducer<UserModelState>;
    };
}

const UserModel: UserModelType = {
    namespace: 'user',
    state: {
        currentUser: {},
    },
    effects: {
        *fetchCurrent(_,{ call, put }) {
            const response = yield call(queryCurrent);
            
            yield put({ type: 'saveCurrentUser', payload: response})
        },
        *doLogin({payload}, {call, put}) {
            const response = yield call(doLogin, payload);
            const { status} = response
            
            if (status === 1) {
                yield put({ type: 'saveCurrentUser', payload: response})
            } else {

            }
        }
    },
    reducers: {
        'saveCurrentUser'(state, action) {
            return { ...state, currentUser: {...action.payload} || {}};
        }
    }
}

export default UserModel;
