import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {  tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const WeeklyData = {
  win: 0,
  loss: 0,
  avgRisk: '0%',
  avgReward: '0%',
  roi: '0%'
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

const WeeklyTrades = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="spanning table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Today's Trade</StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell align="left">Trade taken</StyledTableCell>
            <StyledTableCell align="right">Rewards</StyledTableCell>
            <StyledTableCell align="right">Risk taken</StyledTableCell>
            <StyledTableCell align="right">Gain%</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <StyledTableCell align="left">{ WeeklyData.win } / { WeeklyData.loss }</StyledTableCell>
            <StyledTableCell align="right">{ WeeklyData.avgReward }</StyledTableCell>
            <StyledTableCell align="right">{ WeeklyData.avgRisk }</StyledTableCell>
            <StyledTableCell align="right">{ WeeklyData.roi }</StyledTableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default WeeklyTrades