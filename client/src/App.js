import React, {Component} from 'react'
import createStore from './store'
import {Provider} from 'react-redux'
import {routes} from './routes'
import rootSaga from './store/saga'
import {initUser} from './store/actions/userAction'
import {getToken, getInitData} from './helpers/storageFunctions'

export const store = createStore()
store.runSaga(rootSaga)

const token = getToken()

if (token) {
    const userData = getInitData()
    store.dispatch(initUser(userData))
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                {routes}
            </Provider>
        )
    }
}

export default App
