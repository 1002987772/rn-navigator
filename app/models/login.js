export default {
    namespace: 'home',
    state: { // 组件的initState
        userInfo: {},
        loading: false ,
        loginFailedReason: ''
    },
    //recuder  同步修改state
    reducers: {
        setUser(state, {payload}) {
            return {...state, ...payload}
        }
    },
    //异步方法写在这里
    //  redux-sage
    //   https://redux-saga-in-chinese.js.org/docs/api/index.html  api文档
    effects: {
         *getInfo({payload = {}}, {call, put}){
            try{
                yield put({type: 'setUser', payload: {loading: true}})
                const data = yield call(getUserInfo)
                yield put({type: 'setUser', payload: { userInfo: data.data.guest} })   
                yield put({type: 'save', payload: { name: data.data.guest.name} })  
            }
            catch(error) {
                console.log(error)
            }
            finally {
                yield put({type: 'setUser', payload: {loading: false}}) 
            }
        }
    }
}