import { useEffect, useState } from 'react'
import { logger, network } from '../../../utils';
import { Link } from 'react-router-dom';
import Summary from './Applications/SummaryList'
import AddTrade from './Applications/AddTrade'

function Dashboard() {

  const [ data, setData ] = useState<object>({})

  const getSummaries = async () => {
    try {
      await network.GET(`/summary/`).then(response => {
        setData(response.data.data[0])
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
      <Link to="/sign-out" >Sign out</Link><br></br>
      <Link to="/trades" >Trade logs</Link>
      <h1>You have been authenticated, welcome to the Dashboard page!</h1>
      <AddTrade />
      <Summary data={data}/>
    </div>
  )
}

export default Dashboard
