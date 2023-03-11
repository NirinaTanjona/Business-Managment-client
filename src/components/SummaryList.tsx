import { useContext } from 'react'
import { SummaryContext } from '../context/SummaryContext'

const SummaryList = () => {
  const data = useContext(SummaryContext)

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default SummaryList