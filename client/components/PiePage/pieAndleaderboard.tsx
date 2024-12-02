// Layout component to manage the layout across all pages
import OnePie from './OnePie'
import Leaderboard from './Leaderboard'
import { Outlet } from 'react-router-dom'


const Pieboard = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around'}}>
      <div>
      {/* <div style={{ display: 'flex' }}> */}
        <div style={{ flex: '1', marginTop: '10%' }}></div>
        <div style={{ flex: '2', paddingRight: '10px' }}></div>
        <div>
        <Leaderboard />
        </div>
      </div>

        {/* <div style={{ display: 'flex' }}> */}
        {/* <div style={{ flex-direction:'right' }} ></div> */}
        <div style={{ flex: '1', marginTop: '10%' }}></div>
        <div style={{ flex: '2', paddingLeft: '100px' }}></div>
        <div>
          <Outlet />
        </div>
      </div>
    // </div>
  )
}

export default Pieboard
