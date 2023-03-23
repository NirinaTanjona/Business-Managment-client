import Card from '../Card'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useSummary } from '../../context/SummaryContext'

const CardLayout = ({title , value}: {title: string, value: string | undefined}) => {
  return (
  <Card>
    <Stack direction="row"
    sx={{
        alignItems: 'center',
        height: '60px',
        justifyContent: 'space-between',
      }}>
      <Typography>{title}</Typography>
      <Typography>
        {value ? value : "N/A"}
      </Typography>
    </Stack>
  </Card>
  )
}

const StatCards = () => {

  const data = useSummary()
  let profitFactor
  if (data) {
    const totalProfits = data.attributes.total_number_of_winning_trades * parseFloat(data.attributes.avg_winning_trade)
    const totalLossess = data.attributes.total_number_of_losing_trades * parseFloat(data.attributes.avg_losing_trade)
    const val = (totalProfits / totalLossess)
    profitFactor = val.toFixed(2).toString()
  }

  const dataset = [
    {
      title: "ROI",
      value: data?.attributes.return_of_investment
    },
    {
      title: "Profit Factor",
      value: profitFactor
    },
    {
      title: "Win Rate",
      value: data?.attributes.trade_win_rate
    }
  ]


  return (
    <Grid container direction="row" spacing={2}>
        {dataset.map(item => (
          <Grid item xs={4}>
            <CardLayout title={item.title} value={item.value}/>
          </Grid>
        ))}
    </Grid>
  )
}

export default StatCards