import { useSummary } from '../context/SummaryContext'

const SummaryList = () => {
  const data = useSummary()

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default SummaryList