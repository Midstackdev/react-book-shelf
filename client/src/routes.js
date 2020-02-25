import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/home'
import BookView from './components/books'
import Layout from './hoc/layout'

const Routes = (props) => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/books/:id" exact component={BookView} />
            </Switch>
        </Layout>
    )
}

export default Routes