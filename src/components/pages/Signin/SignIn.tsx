import { useState } from 'react'
import { network, auth, logger } from '../../../utils'
import { FormGroup , FormLabel, TextField, Button, FormControlLabel, Typography } from '@mui/material'
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
        <form>
          <FormGroup
            sx={{
              maxWidth: 480,
              padding: 2,
              borderRadius: 2,
              border: "1px solid",
              borderColor: "primary.main"
            }}
          >
          <TextField
            sx={{ paddingBottom: 2}}
            label="username"
            name="username"
            placeholder='username'
            value={username}
            onChange={handleUsername}
          />
          <TextField
            sx={{ paddingBottom: 2}}
            label="password"
            placeholder='Password'
            type='password'
            value={password}
            name="password"
            onChange={handlePassword}
          />
            <Button
              onClick={handleSubmit}
              variant="contained"
            >
              Login
            </Button>
          </FormGroup>

        </form>
  )
}

export default SignIn