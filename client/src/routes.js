import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/home'
import User from './components/admin'
import Login from './containers/admin/login'
import AddReview from './containers/admin/add'
import BookView from './components/books'
import Layout from './hoc/layout'

import Auth from  './hoc/auth'

const Routes = (props) => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Auth(Home, null)} />
                <Route path="/login" exact component={Auth(Login, false)} />
                <Route path="/user" exact component={Auth(User, true)} />
                <Route path="/user/add" exact component={Auth(AddReview, true)} />
                <Route path="/books/:id" exact component={Auth(BookView)} />
            </Switch>
        </Layout>
    )
}

export default Routes