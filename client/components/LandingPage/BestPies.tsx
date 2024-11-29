// Displays the bestpie in the landing section
import { Link } from 'react-router-dom'
import { getPies } from '../../apis/api'
import { useQuery } from '@tanstack/react-query'

const BestPies = () => {
  const { data, isError, isPending } = useQuery({
    queryKey: ['pies'],
    queryFn: () => getPies(),
  })

  if (isPending) {
    return <div>Loading pies...</div>
  }

  if (isError) {
    return (
      <div>There was an error loading the pies. Please try again later.</div>
    )
  }
  const filteredPie = data.filter((pie) => pie.place == 'Gold Award')

  return (
    <div>
      <h2>Our Best Pies</h2>
      <div className="best-pies">
        {filteredPie.map((pie) => (
          <Link
            key={pie.id}
            to={`/pies/flavor/${pie.flavor}`}
            className="link-hover"
            style={{
              border: `4px solid`,
              borderColor: 'black',
              borderRadius: '10px',
            }}
          >
            <img
              src={'/images/pie-cartoon.jpg'}
              alt={pie.flavor}
              style={{
                width: '300px',
                height: 'auto',
              }}
            />
            <p>{pie.flavor}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BestPies
