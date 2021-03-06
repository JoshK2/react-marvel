import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"

import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'

import Layout from "../Layout/Layout"
import SearchScreen from "../SearchScreen/SearchScreen"
import FavoriteScreen from "../FavoriteScreen/FavoriteScreen"
import NotFoundScreen from "../NotFoundScreen/NotFoundScreen"
import reducers from '../../reducers/index'

const store = createStore(
    reducers,
    applyMiddleware(logger)
)

class App extends React.Component {
   render() {
        return (
            <Provider store={store}>
                <Router>
                    <Layout>
                        <Switch>
                            <Route exact path="/" component={SearchScreen}/>
                            <Route path="/favorites" component={FavoriteScreen}/>
                            <Route component={NotFoundScreen} />
                        </Switch>
                    </Layout>
                </Router>
            </Provider>
        )
    }
}

export default App
