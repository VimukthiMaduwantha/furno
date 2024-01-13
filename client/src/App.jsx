import { Divider } from '@mui/material'
import './App.css'
import NavBarComp from './components/NavBarComp'
import NavBarView from './components/NavBarView'
import Home from './view/Home'
import { Route, Routes } from 'react-router-dom'
import Shop from './view/Shop'

function App() {

  return (
    <>
      <NavBarView />
      <NavBarComp />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/shop' element={<Shop />} />

      </Routes>

    </>
  )
}

export default App
