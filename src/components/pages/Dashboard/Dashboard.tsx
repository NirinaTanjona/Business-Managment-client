import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material'
import Summary from './Applications/SummaryList'
import AddTrade from './Applications/AddTrade'
import GettingStarted from './Applications/GettingStarted'
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import UpdateBalance from './Applications/UpdateBalance'
import { SummaryProvider} from './SummaryContext'


function Dashboard() {

  const [updateBalance, setUpdateBalance ] = useState<boolean>(false)
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)

  const handleUpdateBalance = () => setUpdateBalance(prev => !prev)

  const toggleDrawer = (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setOpenDrawer(open);
    };


  return (
    <SummaryProvider>
      <Link to="/sign-out" >Sign out</Link><br></br>
      <Link to="/trades" >Trade logs</Link>
      <Button variant="text" onClick={handleUpdateBalance}>Update balance</Button>
      <Button variant="outlined" onClick={toggleDrawer(true)}>Add trade</Button>
      <h1>You have been authenticated, welcome to the Dashboard page!</h1>
      <SwipeableDrawer
        anchor="left"
        open={openDrawer}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <AddTrade />
      </SwipeableDrawer>

      <Summary />
      <GettingStarted />
      <UpdateBalance updateBalance={updateBalance} setUpdateBalance={setUpdateBalance}/>
    </SummaryProvider>
  )
}

export default Dashboard
