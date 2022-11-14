import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home/home'
import About from '../pages/About/about'
import Freelances from '../pages/SingleProduct/singleProduct'
import Header from '../components/Header/header'
import Error from '../components/Error/error'
import Footer from '../components/Footer/footer'
import GlobalStyle from '../utils/styles/global/globalstyle'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/singleproduct/:id">
          <Freelances />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
