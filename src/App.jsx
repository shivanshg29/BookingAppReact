import { Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Layout from './Layout'
import ProfilePage from './pages/ProfilePage'
import BookingPage from './pages/BookingPage'
import PlacesPage from './pages/PlacesPage'
function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<IndexPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/account" element={<ProfilePage/>}/>
      <Route path="/account/bookings" element={<BookingPage/>}/>
      <Route path="/account/places" element={<PlacesPage/>}/>
      </Route>
    </Routes>
  )
}

export default App
