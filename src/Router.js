import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Container } from 'semantic-ui-react'
import requireAuth from './components/HOC/requireAuth'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import PostCreate from './pages/PostCreate'
import PostReview from './pages/PostReview'
import PostView from './pages/PostView'

const Router = () => (
  <BrowserRouter>
    <Container className="container">
      <Route exact path="/" component={Login} />
      <Route exact path="/dashboard" component={requireAuth(Dashboard)} />
      <Route exact path="/create_post" component={requireAuth(PostCreate)} />
      <Route exact path="/view_post" component={requireAuth(PostView)} />
      <Route exact path="/review_post" component={requireAuth(PostReview)} />
    </Container>
  </BrowserRouter>
)

export default Router
