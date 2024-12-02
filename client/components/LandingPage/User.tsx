import { useState } from 'react'

function User() {
  const [user] = useState({
    name: 'Thomas',
    favourite: 'Bacon and Egg',
    favourite_place: 'Eurobake Espresso Ltd',
  })
  return (
    <div>
      <h2>{user.name}&apos;s Profile</h2>
      <p>
        {' '}
        <strong>Favourite Pie: {''}</strong>
        {user.favourite}
      </p>
      <p>
        <strong>Favourite Bakery: {''}</strong>
        {user.favourite_place}
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
