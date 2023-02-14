import { useState } from 'react'
import { network, auth, logger } from '../../../utils'
import { Button, Form, Grid, Header, Segment, Checkbox } from 'semantic-ui-react';
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
        window.location.href = '/dashboard'
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
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column id='login-column'>
      <Header as='h3' style={{ color: '0F1419', marginTop: '10px' }}textAlign='center'>
        Business managment
      </Header>
      {hasError && (<span style={{ color: 'red' }}>Invalid username or password.</span>)}
      <Form size='large' onSubmit={() => handleSubmit()}>

        <Segment stacked>
          <Form.Input
            fluid
            icon='user'
            iconPosition='left'
            name="username"
            placeholder='username'
            value={username}
            onChange={handleUsername}
          />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            value={password}
            name="password"
            onChange={handlePassword}
          />
            <Form.Field>
              <div className='login-helpers'>
                <div className='column left'>
                  <Checkbox label='Remember me'/>
                </div>
              </div>
            </Form.Field>
            <Button
              id='login-button'
              primary
              fluid
              size='large'
              type='submit'
            >
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid >
  )
}

export default SignIn