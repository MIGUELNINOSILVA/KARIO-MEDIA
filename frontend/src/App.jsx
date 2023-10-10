import {Routes, Route, BrowserRouter} from 'react-router-dom'
import FondoLogin from './pages/FondoLogin'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route exact path='/login' Component={FondoLogin}></Route>
            
        </Routes>
      </BrowserRouter>
    </>
  )
}