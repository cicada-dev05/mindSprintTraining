import './App.css';
import {BrowserRouter,Link, Route, Routes} from 'react-router-dom'
import ListUsers from './listUser';
import AddUser from './AddUser';
import UpdateUser from './updateUser';
function App() {
  return (
   <>
    <BrowserRouter>
    <div>
      <Link to="list">|  Show All User    |</Link>
      <Link to="add">|     Add New User   </Link>
    </div>
    <Routes>
      <Route path='list' element={<ListUsers/>}/>
      <Route path='add' element={<AddUser/>}/>
      <Route path='update/:id' element={<UpdateUser/>}/>

    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
