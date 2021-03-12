import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Transactions from './components/Transactions'
import Customers from './components/Customers'
import GlobalState from './context/GobalState'
import Footer from './components/Footer'
import Home from './components/Home'

const App = () => {
  return (
    <GlobalState>
      <Router>
        <Navbar />
        <div className='appContainer'>
          <Switch>
            <Route path='/transactions' component={Transactions} />
            <Route path='/customers' component={Customers} />
            <Route path='/' component={Home} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </GlobalState>
  )
}

export default App
