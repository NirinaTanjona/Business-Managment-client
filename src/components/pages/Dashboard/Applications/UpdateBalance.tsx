import { useState } from 'react'
import { network, logger } from '../../../../utils'
import { Button, Form, Segment } from 'semantic-ui-react';
import { Box, Modal } from '@mui/material'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function GettingStarted({id, updateBalance, setUpdateBalance}:any) {

  const [balance, setBalance] = useState<number>(0)
  const [error, setError] = useState<boolean>(false)


  const starting_balance_data = {starting_balance: balance}

  const handleSubmit = async () => {
    try {
      await network.PATCH(`/summary/${id}/`, starting_balance_data).then(response => {
        console.log("starting balance updated!")
      }).then(() => {
        setUpdateBalance(false)
      })
    } catch (e) {
      setError(true)
      logger.error("Error in registration", e)
    }
  }

  const handleBalance = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBalance(event.target.value ? parseFloat(event.target.value) : 0)
  };


  return (
    <div>
      <Modal
        open={ updateBalance }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Form size='large' onSubmit={() => handleSubmit()}>
          <Segment stacked>
            <Form.Input
              fluid
              placeholder='Starting balance'
              value={balance}
              onChange={handleBalance}
            />
            <Button
              id='login-button'
              primary
              fluid
              size='large'
              type='submit'
            >
              Set Balance
            </Button>
            </Segment>
          </Form>
        </Box>
      </Modal>
    </div>

  )
}

export default GettingStarted