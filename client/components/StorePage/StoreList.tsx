// OPTIONAL
// Displays a list of bakeries

import { Link } from 'react-router-dom'

const StoreList = () => {
  const allStores = [
    {
      id: 1,
      name: 'The Big Baker',
      location: '123 Baker St, Wellyville',
      pieCount: 10,
      averageRating: 4.7,
    },
    {
      id: 2,
      name: 'The Average Baker',
      location: '456 Crust Rd, Auckville',
      pieCount: 8,
      averageRating: 4.5,
    },
    {
      id: 3,
      name: 'The Best Baker',
      location: '789 Oven Ln, Chchpolis',
      pieCount: 15,
      averageRating: 4.8,
    },
    {
      id: 4,
      name: 'Pie Palace',
      location: '321 Crust Ave, Pie Town',
      pieCount: 12,
      averageRating: 4.2,
    },
    {
      id: 5,
      name: 'The Crusty Baker',
      location: '654 Pastry St, Baker City',
      pieCount: 9,
      averageRating: 4.4,
    },
    // Add more stores here
  ]

  return (
    <div>
      <h2>All Rated Stores</h2>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Store Name</th>
            <th>Location</th>
            <th>Pies Rated</th>
            <th>Average Rating</th>
          </tr>
        </thead>
        <tbody>
          {allStores.map((store) => (
            <tr key={store.id}>
              <td>
                <Link to={`/store/${store.id}`}>{store.name}</Link>
              </td>
              <td>{store.location}</td>
              <td>{store.pieCount} pies</td>
              <td>{store.averageRating} stars</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StoreList
