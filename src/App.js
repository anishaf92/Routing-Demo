import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import {BrowserRouter, Link,Routes,Route} from "react-router-dom";
import Login from './components/Login';
import Blog from './components/Blog';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <Link to='/'><li>Home</li></Link>
          <Link to='/login'><li>Login</li></Link>
          <Link to='/blog'><li>Blog Posts</li></Link>
          <Link to='/dashboard'><li>Dashboard</li></Link>
        </ul>       
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path="/post/:num" element={<Post />} />
          <Route path='/login' element={<Login />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          </Routes>
      </BrowserRouter>      
    </div>

  );
}

export default App;
