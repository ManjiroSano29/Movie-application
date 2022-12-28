import './App.scss';
import AdminHome from './page/home/home'
import UserList from './page/userList/userList'
import MovieList from './page/movieList/movieList'
import MovieInfo from './page/movieInfo/movieInfo'
import NavBar from "./component/navbar/navbar"
import SideBar from "./component/sidebar/sidebar"
import AddMovies from './page/addMovies/addMovies'
import ListList from './page/listList/listList'
import ListInfo from './page/listInfo/listInfo'
import AddLists from './page/addList/addLists'
import Login from './page/login/login'
import { AuthContext } from './context/authContext/AuthContext'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import { useContext } from "react" 

function App() {
  const { user } = useContext(AuthContext)
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={user ? <Navigate to="/admin" />: <Login />}/>
        </Routes>
  
        {user && (
          <>
            <NavBar />
            <SideBar />
            <Routes>
              <Route exact path='/admin' element={<AdminHome />} />
              <Route path='/admin/users' element={<UserList />} />
              <Route path='/admin/movies' element={<MovieList />} />
              <Route path='/admin/newMovies' element={<AddMovies />} />
              <Route path='/movie/:Id' element={<MovieInfo />} />
              <Route path='/admin/list' element={<ListList />} />
              <Route path='/list/:Id' element={<ListInfo />} />
              <Route path='/admin/newLists' element={<AddLists />} />
            </Routes>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
