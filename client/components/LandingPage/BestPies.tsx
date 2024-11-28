// Displays the bestpie in the landing section
import { Link } from 'react-router-dom'

const BestPies = () => {
  const pies = [
    { id: 1, name: 'Mince Pie', img: '/images/pie-cartoon.jpg' },
    { id: 2, name: 'Mince Cheese Pie', img: '/images/pie-cartoon.jpg' },
    { id: 3, name: 'Bacon & Egg Pie', img: '/images/pie-cartoon.jpg' },
  ]

  return (
    <div>
      <h2>Our Best Pies</h2>
      <div className="best-pies">
        {pies.map((pie) => (
          <Link key={pie.id} to={`/pie/${pie.id}`}>
            <img
              src={pie.img}
              alt={pie.name}
              style={{ width: '200px', height: 'auto' }}
            />
            <p>{pie.name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BestPies
