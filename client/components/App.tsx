import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import LandingPage from './LandingPage/LandingPage'
import PieDetails from './PiePage/PieDetails'
import StoreInfo from './StorePage/StoreInfo'
import PiesList from './PiePage/PiesList'
import StoreList from './StorePage/StoreList'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/pies/" element={<PiesList />} />
          <Route path="/stores" element={<StoreList />} />
          <Route path="/pie/:id" element={<PieDetails />} />
          <Route path="/store/:id" element={<StoreInfo />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
