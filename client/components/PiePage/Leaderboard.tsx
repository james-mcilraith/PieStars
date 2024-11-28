// Displays leaderboard of top-rated pies
import { Link } from 'react-router-dom'

const Leaderboard = () => {
  const leaderboard = [
    {
      id: 1,
      name: 'Mince Pie',
      rating: 4.9,
      storeId: 1,
      storeName: 'The Big Baker',
    },
    {
      id: 2,
      name: 'Mince & Cheese Pie',
      rating: 4.7,
      storeId: 2,
      storeName: 'The Average Baker',
    },
    {
      id: 3,
      name: 'Bacon & Egg Pie',
      rating: 4.6,
      storeId: 3,
      storeName: 'The Best Baker',
    },
  ]

  return (
    <div>
      <h2>The Leaderboard</h2>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Pie Name</th>
            <th>Rating</th>
            <th>Store</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((pie) => (
            <tr key={pie.id}>
              <td>
                <Link to={`/pie/${pie.id}`}>{pie.name}</Link>{' '}
              </td>
              <td>{pie.rating} stars</td>
              <td>
                <Link to={`/store/${pie.storeId}`}>{pie.storeName}</Link>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Leaderboard
