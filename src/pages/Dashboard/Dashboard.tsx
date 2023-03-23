import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import { SummaryProvider} from '../../context/SummaryContext'
import Summary from '../../components/SummaryList'
import GettingStarted from '../../components/GettingStarted/GettingStarted'
import Layout from '../../components/Layout'
import TodaysTrade from '../../components/TodaysTrade'
import OverallStat from '../../components/OverallStat'
import ApexChart from '../../components/ApexChart'
import FullCalendar from '../../components/FullCalendar'
import StatCards from '../../components/StatCards'


function Dashboard() {

  return (
    <SummaryProvider>
      <Layout>

          <h1>You have been authenticated, welcome to the Dashboard page!</h1>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <StatCards />
            </Grid>
            <Grid item xs={4}>
              <TodaysTrade />
              <OverallStat />
            </Grid>
            <Grid item xs={8}>
              <ApexChart />
              <FullCalendar />
            </Grid>
          </Grid>
        <br />
        <Summary />
        <GettingStarted />

      </Layout>
    </SummaryProvider>
  )
}

export default Dashboard
