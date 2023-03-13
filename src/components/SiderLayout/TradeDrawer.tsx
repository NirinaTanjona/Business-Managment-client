import { useState } from 'react'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import AddTrade from '../AddTrade'


const TradeDrawer = () => {

  const [openDrawer, setOpenDrawer] = useState<boolean>(false)

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
    <>
      <Button variant="outlined" onClick={toggleDrawer(true)}>Add trade</Button>
      <SwipeableDrawer
        anchor="right"
        open={openDrawer}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        PaperProps={{
          elevation: 0,
          sx: { width: { xs: 310, sm: 360 }, borderRadius: '0px 10px 10px 0px'}
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2}}>
          <AddTrade />
        </Box>
      </SwipeableDrawer>
    </>
  )
}

export default TradeDrawer