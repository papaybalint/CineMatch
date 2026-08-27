import './styles/App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="cinematch-app">
      <Navbar />

      <main>
        {/* Ide fogja a React Router behelyezni a gyermek oldalakat */}
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default App
