import React, { Component } from 'react'
import { NavLink, Route, BrowserRouter } from 'react-router-dom'
import bootstrap from '../node_modules/bootstrap-v4-master/dist/css/bootstrap.css'
import './App.css'
import Home from './Home'
import Stuff from './Stuff'
import Contact from './Contact'
import Dog from './Dog'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className='App'>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink activeClassName='active' exact to='/'>Home</NavLink></li>
            <li><NavLink activeClassName='active' to='/stuff'>Stuff</NavLink></li>
            <li><NavLink activeClassName='active' to='/dog'>Get a dog</NavLink></li>
            <li><NavLink activeClassName='active' to='/contact'>Contact</NavLink></li>
          </ul>
          <div className='content'>
            <Route exact path='/' component={Home} />
            <Route exact path='/stuff' component={Stuff} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/dog' component={Dog} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
