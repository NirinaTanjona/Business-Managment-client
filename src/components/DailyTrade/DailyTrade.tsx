import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {  tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TodaysTrade = {
  return: "$0",
  trades: 0,
  wins: 0,
  gain: "0%"
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

const DailyTrade = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Today</StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell align="left">Returns</StyledTableCell>
            <StyledTableCell align="right">Trades</StyledTableCell>
            <StyledTableCell align="right">Wins</StyledTableCell>
            <StyledTableCell align="right">Gain%</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <StyledTableCell align="left">{ TodaysTrade.return }</StyledTableCell>
            <StyledTableCell align="right">{ TodaysTrade.trades }</StyledTableCell>
            <StyledTableCell align="right">{ TodaysTrade.wins }</StyledTableCell>
            <StyledTableCell align="right">{ TodaysTrade.gain }</StyledTableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DailyTrade