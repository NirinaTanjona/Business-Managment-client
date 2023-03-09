import { useState } from 'react'
import { network, auth, logger } from '../../../utils'
import { FormGroup, TextField, Button, Grid } from '@mui/material'
import './SignIn.css'

function SignIn() {

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [hasError, setError] = useState<boolean>(false)

  const handleSubmit = async () => {
    try {
      await network.POST_USER(`/sign-in/`, { username, password }).then(response => {
        auth.setAuth(response.data.token)
      }).then(() => {
        window.location.href = '/dashboard/'
      })
    } catch (e) {
      setError(true)
      logger.error("Error sign in", e)
    }
  }

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  };

  return (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{
            height: '100vh',
          }}
        >
          <Grid item>
            <TextField
              sx={{width: 390}}
              label="username"
              name="username"
              value={username}
              onChange={handleUsername}
            />
          </Grid>
          <Grid item>
          <TextField
            sx={{width: 390}}
            label="password"
            type='password'
            value={password}
            name="password"
            onChange={handlePassword}
          />
          </Grid>
          <Grid item>
            <Button
              onClick={handleSubmit}
              variant="contained"
            >
              Login
            </Button>
          </Grid>
        </Grid>
  )
}

export default SignIn