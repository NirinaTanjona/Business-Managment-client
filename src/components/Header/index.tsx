import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom';
import { auth } from '../../utils'

const LandingPage = () => (
  <>
    <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
      Trading journal
    </Typography>
    <Link to="sign-up">Sign up</Link>
    <Link to="sign-in">Sign in</Link>
  </>
)

const Dashboard = () => (
  <>
    <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
      Dashboard
    </Typography>
    <Link to="sign-out">Sign out</Link>
  </>
)

export default function Header() {
  return (
    <Box sx={{ fexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          {auth.isAuth() ? <Dashboard /> : <LandingPage />}
        </Toolbar>
      </AppBar>
    </Box>
  )
}