import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './Layout'

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<BestPie />} />{' '}
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
