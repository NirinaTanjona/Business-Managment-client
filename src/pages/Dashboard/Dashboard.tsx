import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material'
import Summary from '../../components/SummaryList'
import AddTrade from '../../components/AddTrade'
import GettingStarted from '../../components/GettingStarted/GettingStarted'
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import UpdateBalance from '../../components/UpdateBalance/UpdateBalance'
import Box from '@mui/material/Box'
import { SummaryProvider} from '../../context/SummaryContext'


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
        PaperProps={{
          elevation: 0,
          sx: { width: { xs: 310, sm: 360 }, borderRadius: '10px 0px 0px 10px'}
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2}}>
          <AddTrade />
        </Box>

      </SwipeableDrawer>

      <Summary />
      <GettingStarted />
      <UpdateBalance updateBalance={updateBalance} setUpdateBalance={setUpdateBalance}/>
    </SummaryProvider>
  )
}

export default Dashboard
