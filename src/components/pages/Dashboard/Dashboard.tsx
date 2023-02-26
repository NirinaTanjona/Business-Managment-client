import { useState } from 'react'

import { Link } from 'react-router-dom';
import { Button } from '@mui/material'
import Summary from './Applications/SummaryList'
import AddTrade from './Applications/AddTrade'
import GettingStarted from './Applications/GettingStarted'
import UpdateBalance from './Applications/UpdateBalance'
import { SummaryProvider} from './SummaryContext'


function Dashboard() {

  const [updateBalance, setUpdateBalance ] = useState<boolean>(false)

  const handleUpdateBalance = () => setUpdateBalance(prev => !prev)


  return (
    <SummaryProvider>
      <Link to="/sign-out" >Sign out</Link><br></br>
      <Link to="/trades" >Trade logs</Link>
      <Button variant="text" onClick={handleUpdateBalance}>Update balance</Button>
      <h1>You have been authenticated, welcome to the Dashboard page!</h1>
      <AddTrade />
      <Summary />
      <GettingStarted />
      <UpdateBalance updateBalance={updateBalance} setUpdateBalance={setUpdateBalance}/>
    </SummaryProvider>
  )
}

export default Dashboard
