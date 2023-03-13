import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material'
import Summary from '../../components/SummaryList'
import AddTrade from '../../components/AddTrade'
import GettingStarted from '../../components/GettingStarted/GettingStarted'
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Box from '@mui/material/Box'
import Layout from '../../components/Layout'
import { SummaryProvider} from '../../context/SummaryContext'


function Dashboard() {

  return (
    <SummaryProvider>
      <Layout>
      <h1>You have been authenticated, welcome to the Dashboard page!</h1>
      <Summary />
      <GettingStarted />
      </Layout>
    </SummaryProvider>
  )
}

export default Dashboard
