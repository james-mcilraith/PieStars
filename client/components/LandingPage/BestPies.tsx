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

  
  return (
    <div>
      <h2>Our Best Pies</h2>
      <div className="best-pies">
        {data?.map((pie) => (
          <Link key={pie.id} to={`/pie/flavor/${pie.flavor}`}>
            <img
              src={'/images/pie-cartoon.jpg'}
              alt={pie.flavor}
              style={{ width: '200px', height: 'auto' }}
            />
            <p>{pie.flavor}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BestPies
