import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import TradeDrawer from './TradeDrawer'
import { DashboardLink, TradesLink } from './SiderLinks'
import UpdateBalance from './UpdateBalance';

const items = [
  {
    title: "Add Trade",
    component: <TradeDrawer />,
    icon: "3"
  },
  {
    title: "Update Balance",
    component: <UpdateBalance />,
    icon: "4"
  },
  {
    title: "Dashboard",
    component: <DashboardLink />,
    icon: "1"
  },
  {
    title: "Closed Trades",
    component: <TradesLink />,
    icon: "2"
  },
]

const Sider = () => {
  return (
    <Paper sx={{ width: 256, maxWidth: '100%', height: '100vh', position: 'fixed'}}>
      <MenuList>
        { items.map(item => (
          <MenuItem key={item.title}>
            <ListItemText>{item.component}</ListItemText>
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  )
}

export default Sider