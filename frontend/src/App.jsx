import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import login from './pages/login'
import Error404 from './pages/Error404';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route exact path='/'  Component={login}></Route>
            <Route exact path='*' Component={Error404}></Route> {/*//! Esta ruta debe estar de ultimo!! */}
        </Routes>
      </BrowserRouter>
    </>
  )
}