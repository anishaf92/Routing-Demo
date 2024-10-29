import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import {BrowserRouter, Link,Routes,Route} from "react-router-dom";
import Login from './components/Login';
import Blog from './components/Blog';
import Post from './components/Post';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [isAuth,setIsAuth] = useState(false)
  const navigate = useNavigate();
  const onLogin = () => {
    setIsAuth(true)
    navigate('/dashboard')
  }
  const onLogout = () => {
    setIsAuth(false)
    navigate('/login')
  }
  return (
    <div className="App">     
        <ul>
          <Link to='/'><li>Home</li></Link>
          <Link to='/login'><li>Login</li></Link>
          <Link to='/blog'><li>Blog Posts</li></Link>
          <Link to='/dashboard'><li>Dashboard</li></Link>
          {isAuth ? <button onClick={onLogout}>Logout</button> : <></>}
        </ul>       
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path="/post/:num" element={<Post />} />
          <Route path='/login' element={<Login onLogin={onLogin} />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/dashboard' element={
            <ProtectedRoute isAuth={isAuth}><Dashboard /></ProtectedRoute>}></Route>
          </Routes>
        
    </div>

  );
}

export default App;
