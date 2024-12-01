import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import BestPies from './LandingPage/BestPies'
import StoreInfo from './StorePage/StoreInfo'
import PiesList from './PiePage/PiesList'
import StoreList from './StorePage/StoreList'
import OnePie from './PiePage/OnePie'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<BestPies />} />
          <Route path="/pies/" element={<PiesList />} />
          <Route path="/stores" element={<StoreList />} />
          <Route path="/pies/:id" element={<OnePie />} />
          <Route path="/stores/:id" element={<StoreInfo />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
