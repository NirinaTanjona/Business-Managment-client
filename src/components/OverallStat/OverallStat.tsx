import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {  tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useContext } from 'react'
import { SummaryContext } from '../../context/SummaryContext'

interface statistics {
  winRate: string | undefined,
  profitFactor: string | undefined,
  trades: number | undefined,
  tradeWonLose: string,
  returnOfInvestment: string | undefined,
  avgRewardPerTrade: string | undefined,
  avgRiskPerTrade: string | undefined,
}


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    borderBottom: "none",
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    borderBottom: "none",
    fontSize: 22,
    fontWeight: "bold",
  },
}));

const OverallStat = () => {

  const data = useContext(SummaryContext)

  const statistics: statistics = {
    winRate: data?.attributes.trade_win_rate,
    profitFactor: data?.attributes.average_risk_reward,
    trades: data?.attributes.total_number_of_trades,
    tradeWonLose: `${data?.attributes.total_number_of_winning_trades} / ${data?.attributes.total_number_of_losing_trades}`,
    returnOfInvestment: data?.attributes.return_of_investment,
    avgRewardPerTrade: data?.attributes.average_reward_per_trade,
    avgRiskPerTrade: data?.attributes.average_risk_per_trade,
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="spanning table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Overall stats</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <StyledTableCell variant="head" align="left">Win Rate</StyledTableCell>
            <StyledTableCell align="right">{ statistics.winRate }</StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell variant="head" align="left">Profit factor</StyledTableCell>
            <StyledTableCell align="right">{ statistics.profitFactor }</StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell variant="head" align="left">Trades</StyledTableCell>
            <StyledTableCell align="right">{ statistics.trades }</StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell variant="head" align="left">Trades Won / Lose</StyledTableCell>
            <StyledTableCell align="right">{ statistics.tradeWonLose }</StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell variant="head" align="left">ROI %</StyledTableCell>
            <StyledTableCell align="right">{ statistics.returnOfInvestment }</StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell variant="head" align="left">Avg Rewards Per Trade</StyledTableCell>
            <StyledTableCell align="right">{ statistics.avgRewardPerTrade }</StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell variant="head" align="left">Avg Risk Per Trade</StyledTableCell>
            <StyledTableCell align="right">{ statistics.avgRiskPerTrade }</StyledTableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OverallStat