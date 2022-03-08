import React from 'react'
import App from './App'
import { Provider } from 'react-redux'
import configureAppStore from './state/configureStore'
import { render } from 'react-dom'
// import { store } from './state/configureStore'

const store = configureAppStore()


const container = document.getElementById('root')


const renderApp = () => {
    render(
    <Provider store={store}>
        <App/>
    </Provider>,
    container
    )
}

if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./App', renderApp)
}
renderApp()



