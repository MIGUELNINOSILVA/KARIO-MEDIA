import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import FondoLogin from './pages/FondoLogin'
// import login from './pages/login'
import Error404 from './pages/Error404';
import Principal from './pages/Principal';
import help from './pages/help';
import FondoRegister from './pages/FondoRegister';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route exact path='/login' Component={FondoLogin}></Route>
            <Route exact path='/register' Component={FondoRegister}></Route>    
            {/* <Route exact path='/'  Component={login}></Route> */}
            <Route exact path='/Kario' Component={Principal}></Route>
            <Route exact path='/help' Component={help}></Route>
            <Route exact path='*' Component={Error404}></Route> {/*//! Esta ruta debe estar de ultimo!! */}
        </Routes>
      </BrowserRouter>
    </>
  )
}