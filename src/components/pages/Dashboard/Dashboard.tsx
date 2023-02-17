import { useEffect, useState } from 'react'
import { logger, network } from '../../../utils';
import { Link } from 'react-router-dom';
import Summary from './Applications/SummaryList'
import AddTrade from './Applications/AddTrade'
import GettingStarted from './Applications/GettingStarted'
import UpdateBalance from './Applications/UpdateBalance'
import { Button } from '@mui/material'

interface data {
  type: string,
  id: string,
  attributes: object
}


function Dashboard() {

  const [ data, setData ] = useState<data | undefined>()
  const [updateBalance, setUpdateBalance ] = useState<boolean>(false)

  const getSummaries = async () => {
    try {
      await network.GET(`/summary/`).then(response => {
        setData(response.data.data[0])
      })
    } catch (e) {
      logger.error('Error fetching Summaries', e)
    }
  }

  const handleUpdateBalance = () => setUpdateBalance(prev => !prev)

  useEffect(() => {
    getSummaries()
  }, [])

  return (
    <div>
      <Link to="/sign-out" >Sign out</Link><br></br>
      <Link to="/trades" >Trade logs</Link>
      <Button variant="text" onClick={handleUpdateBalance}>Update balance</Button>
      <h1>You have been authenticated, welcome to the Dashboard page!</h1>
      <AddTrade />
      <Summary data={data} />
      <GettingStarted id = {data?.id} />
      <UpdateBalance id = {data?.id} updateBalance={updateBalance} setUpdateBalance={setUpdateBalance}/>
    </div>
  )
}

export default Dashboard
