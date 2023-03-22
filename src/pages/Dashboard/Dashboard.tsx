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
import WeeklyTrade from '../../components/WeeklyTrade'
import OverallStat from '../../components/OverallStat'
import ApexChart from '../../components/ApexChart'
import FullCalendar from '../../components/FullCalendar'
import StatCard from '../../components/StatCards'


function Dashboard() {

  return (
    <SummaryProvider>
      <Layout>
        <h1>You have been authenticated, welcome to the Dashboard page!</h1>
        <StatCard />
        <br />
        <WeeklyTrade />
        <br/>
        <OverallStat />
        <br />
        <ApexChart />
        <br />
        <FullCalendar />
        <Summary />
        <GettingStarted />
      </Layout>
    </SummaryProvider>
  )
}

export default Dashboard
