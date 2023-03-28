import Grid from '@mui/material/Grid'
import SiderLayout from '../SiderLayout'

const styles = {
  root: {
    flexGrow: 1,
    height: '100vh',
  },
  sidebar: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    width: '200px',
  },
  content: {
    marginLeft: '216px',
    marginRight: '16px'
  }
}

const Layout = ({ children}:{ children: React.ReactNode }) => {
  return (
    <Grid container spacing={0} sx={styles.root}>
      <Grid item sx={styles.sidebar}>
        <SiderLayout />
      </Grid>
      <Grid item xs sx={styles.content}>
        {children}
      </Grid>
    </Grid>
  )
}

export default Layout