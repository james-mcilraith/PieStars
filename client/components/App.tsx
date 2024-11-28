import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import LandingPage from '../components/LandingPage/LandingPage'
import PieDetails from '../components/PiePage/PieDetails'
import StoreInfo from '../components/StorePage/StoreInfo'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define the layout route with an outlet */}
        <Route path="/" element={<Layout />}>
          {/* Define the nested routes that will be rendered inside Layout's Outlet */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/pie/:id" element={<PieDetails />} />
          <Route path="/store" element={<StoreInfo />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
