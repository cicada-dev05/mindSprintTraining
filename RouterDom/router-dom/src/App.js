import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import News from "./News";
import UsersList from "./UsersList";
import Details from "./Details";
import { useState } from "react";
import Login from "./Login";
import NotFound from "./404";
import FetchWithAxios from "./fetchWithAxios";

function ProtectedRoute({isAuthenticated,children}){
  return (isAuthenticated?children:<Navigate to='/login'/>)
}
function Home() {
  return <h1>Home Component</h1>;
}
function About() {
  return <h1>About Component</h1>;
}
function Contact() {
  return <h1>Contact Component</h1>;
}
// function News() {
//   return <h1>News Component</h1>;
// }



function App() {
  const isAuthenticated = false
  const [Id , setId ] = useState(null)
  return(
    <BrowserRouter>
    <div>
      
      <Link to='home'>Home</Link>
      <Link to='about'>About</Link>
      <Link to='contact'>Contact</Link>
      <Link to='news'>News</Link>
      <Link to='userList'>UserList</Link>
      <Link to='userList2'>UserListWith Axios</Link>
    </div>
    <Routes>
      <Route path="home" element={<Home/> } />
      <Route path="About" element={<About/> } />
      <Route path="Contact" element={<Contact/> } />
      <Route path="news/*" element={
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <News/> 
        </ProtectedRoute>
       } />
      <Route path="userList" element={<UsersList setId={setId} /> } />
      <Route path="userList2" element={<FetchWithAxios setId={setId} /> } />
      <Route path="details/:id" element={<Details /> } />
      <Route path="login" element={<Login/> } />
      <Route path="*" element={<NotFound/> } />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
