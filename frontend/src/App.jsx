import {Routes, Route, BrowserRouter} from 'react-router-dom'
import login from './pages/login'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route exact path='/' Component={login}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}