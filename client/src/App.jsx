import "./app.scss"
import HomePage from "./pages/home/home"
import Login from "./pages/login/login"
import Register from "./pages/register/register"
import Film from "./pages/watch_movie/film"
import Forgot from "./pages/password/forgot/forgot"
import Change from "./pages/password/change/change"
import Reset from "./pages/password/reset/reset"
import Setting from "./pages/setting/setting"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useContext } from "react"
import { AuthContext } from "./context/authContext/AuthContext"

function App() {
  const { user } = useContext(AuthContext)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={user ? <Navigate to="/home"/> : <Register />} />
          <Route path='/login' element={user ? <Navigate to="/home"/> : <Login />} />
          <Route path="/forgot_password" element={user ? <Navigate to="/home"/> : <Forgot />} />
          <Route path="/reset/:token" element={user ? <Navigate to="/home"/> : <Reset/>} />
        </Routes>

        {user && (
          <>
            <Routes>
              <Route exact path="/home" element={<HomePage />} />
              <Route path="/series" element={<HomePage type="series" />} />
              <Route path="/movies" element={<HomePage type="movies" />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/change_password" element={<Change />} />
              <Route path="/watchMovie" element={<Film />} />
            </Routes>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
