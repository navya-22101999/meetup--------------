import {Switch, Route} from 'react-router-dom'
import Register from './components/Register'
import Home from './components/Home'
import NotFound from './components/NotFound'
// import ContextValue from './context/ContextValue'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/register" component={Register} />
    <Route exact path="/" component={Home} props="hello" />
    <Route component={NotFound} />
  </Switch>
)

export default App
