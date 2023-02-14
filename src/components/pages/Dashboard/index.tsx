import { useEffect, useState } from 'react'
import { logger, network } from '../../../utils';
import { Link } from 'react-router-dom';

function Dashboard() {

  const [ summary, setSummary ] = useState<object>({})

  const getSummaries = async () => {
    try {
      await network.GET(`/summary/`).then(response => {
        setSummary(response.data.data)
        console.log(response.data)
      })
    } catch (e) {
      logger.error('Error fetching Summaries', e)
    }
  }

  useEffect(() => {
    getSummaries()
  }, [])

  return (
    <div>
      <Link to="/sign-out" >Sign out</Link>
      <h1>You have been authenticated, welcome to the Dashboard page!</h1>
      <pre>{JSON.stringify(summary, null, 2)}</pre>
    </div>
  )
}
export default Dashboard