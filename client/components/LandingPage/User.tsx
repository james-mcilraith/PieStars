import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'

function User() {
  const [users] = useState({
    name: 'Thomas',
    favourite: 'Bacon and Egg',
    favourite_place: 'Eurobake Espresso Ltd',
  })
  const { isAuthenticated, user } = useAuth0()

  return (
    <div>
      <h2>{isAuthenticated ? user?.name : 'people'}&apos;s Profile</h2>
      {/* <h1>Hi {isAuthenticated ? user?.name : 'people'}</h1> */}
      <p>
        {' '}
        <strong>Favourite Pie: {''}</strong>
        {users.favourite}
      </p>
      <p>
        <strong>Favourite Bakery: {''}</strong>
        {users.favourite_place}
      </p>
      <img
        src={'/images/pie-cartoon.jpg'}
        alt={'pie'}
        style={{ width: '400px', height: 'auto' }}
      />
    </div>
  )
}

export default User
