import React, { Component } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import WizardOne from './components/Wizards/WizardOne'
import WizardTwo from './components/Wizards/WizardTwo'
import WizardThree from './components/Wizards/WizardThree'

class App extends Component {  
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/wizardone' component={WizardOne} />
          <Route path='/wizardtwo' component={WizardTwo} />
          <Route path='/wizardthree' component={WizardThree} />
        </Switch>
      </div>
    )
  }
}

export default App
