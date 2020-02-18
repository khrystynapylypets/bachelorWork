import React, { Component } from 'react'
import createStore from './store'
import { Provider } from 'react-redux'
import { routes } from './routes'
import './styles/forms.scss'

export const store = createStore()
console.log(store)


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
