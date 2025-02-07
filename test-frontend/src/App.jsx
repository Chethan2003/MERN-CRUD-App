import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Users from './Users'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'
import SearchUser from './SearchUser'

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users />}></Route>
        <Route path='/create' element={<CreateUser />}></Route>
        <Route path='/update/:id' element={<UpdateUser />}></Route>
        <Route path='/search' element={<SearchUser />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
