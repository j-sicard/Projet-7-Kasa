import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Home from './pages/Home/home'
import About from './pages/About/about'
import Freelances from './pages/SingleProduct/singleProduct'
import Header from './components/Header/header'
import Error from './components/Error/error'
import Footer from './components/Footer/footer'

const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Montserrat','Trebuchet MS', Helvetica, sans-serif;
    }
    .link {
      color: #ff6060;
    }
    body {
      margin: 0;     
    }
    
    
`

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/singleproduct/:id">
          <Freelances />
        </Route>
        <Route path="/*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
