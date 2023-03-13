import Grid from '@mui/material/Grid'
import SiderLayout from '../SiderLayout'

const Layout = ({ children}:{ children: React.ReactNode }) => {
  return (
    <Grid container>
      <Grid item>
        <SiderLayout />
      </Grid>
      <Grid item sx={{ pl: '300px' }}>
        {children}
      </Grid>
    </Grid>
  )
}

export default Layout