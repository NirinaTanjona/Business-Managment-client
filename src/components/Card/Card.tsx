import Paper from '@mui/material/Paper'

const Card = ({ children }: {children: React.ReactNode}) => {
  return (
    <Paper variant="outlined" sx={{ p: 2 }}>
      {children}
    </Paper>
  )
}

export default Card