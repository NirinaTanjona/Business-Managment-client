import { useState } from 'react'
import { network, logger } from '../../../utils'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import './Signup.css'
import SetBalance from './SetBalance'

function SignUp() {

  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [hasError, setError] = useState<boolean>(false)
  const [summaryId, setSummaryId] = useState<string>('')
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const handleSubmit = async () => {
    try {
      await network.POST_USER(`/sign-up/`, { username, email, password }).then(response => {
        setSummaryId(response.data.summaryId)
        console.log("response: ", response.data.summaryId)
      }).then(() => {
        setModalOpen(!modalOpen)
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
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column id='login-column'>
        <Header as='h3' style={{ color: '0F1419', marginTop: '10px' }}textAlign='center'>
          Create Account
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
            icon='email'
            iconPosition='left'
            name="email"
            placeholder='email'
            value={email}
            onChange={handleEmail}
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
        <SetBalance summaryId={summaryId} modalOpen={modalOpen} setModalOpen={setModalOpen}/ >
      </Grid.Column>
    </Grid >
  )
}

export default SignUp