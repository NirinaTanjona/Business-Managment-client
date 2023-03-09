import { useState } from 'react'
import { network, logger } from '../../../../utils'
import { FormGroup , FormLabel, TextField, Button, FormControlLabel, Typography } from '@mui/material'
import { useMessageDispatch } from '../../../Message/MessageContext'


function SignUp() {

  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [hasError, setError] = useState<boolean>(false)
  const dispatch = useMessageDispatch()

  const handleSubmit = async () => {
    try {
      await network.POST_USER(`/sign-up/`, { username, email, password }).then(response => {
        if (dispatch) {
          dispatch({type: "OPEN_SUCCESS_ALERT", message: response.data.message})
        }
        // window.location.href = '/sign-in'
      })
    } catch (e) {
      setError(true)
      logger.error("Error in registration", e)
    }
  }

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
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
            label="email"
            name="email"
            placeholder='email'
            value={email}
            onChange={handleEmail}
          />
          <TextField
            sx={{ paddingBottom: 2}}
            label="password"
            placeholder='Password'
            type='password'
            value={password}
            onChange={handlePassword}
          />
            <Button
              onClick={handleSubmit}
              variant="contained"
            >
              Sing up
            </Button>
          </FormGroup>

        </form>
  )
}

export default SignUp