import Grid from '@mui/material/Grid'
import { useParams } from 'react-router-dom'
import Summary from '../../components/SummaryList'
import GettingStarted from '../../components/GettingStarted/GettingStarted'
import Layout from '../../components/Layout'
import TodaysTrade from '../../components/TodaysTrade'
import WeeklyTrades from '../../components/WeeklyTrades'
import OverallStat from '../../components/OverallStat'
import ApexChart from '../../components/ApexChart'
import FullCalendar from '../../components/FullCalendar'
import StatCards from '../../components/StatCards'
import { useSummaryState, SummaryProvider } from '../../context/SummaryContext'
import { useEffect } from 'react'


function Dashboard() {

  const setID = useSummaryState()

  const { id } = useParams()

  useEffect(() => {
    setID(id)
  })



  return (

      <Layout>
          <h1>You have been authenticated, welcome to the Dashboard page!</h1>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <StatCards />
            </Grid>
            <Grid item xs={4}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TodaysTrade />
                </Grid>
                <Grid item xs={12}>
                  <WeeklyTrades />
                </Grid>
                <Grid item xs={12}>
                  <OverallStat />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={8}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                  <ApexChart />
                </Grid>
                <Grid item xs={12}>
                  <FullCalendar />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        <br />
        <Summary />
        <GettingStarted />

      </Layout>
  )
}

export default Dashboard
