import { useState } from 'react'
import { network, logger } from '../../../utils'
import { Button, Form, Segment } from 'semantic-ui-react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

interface Props {
  summaryId: string,
  modalOpen: boolean,
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

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


const SetBalance: React.FC<Props> = ({summaryId, modalOpen, setModalOpen}) => {

  const [balance, setBalance] = useState<number>(0)
  const [error, setError] = useState<boolean>(false)

  const data = {starting_data: balance}

  const handleSubmit = async () => {
    try {
      await network.PATCH(`/summary/${summaryId}/`, data).then(response => {
        console.log(response.data)
        handleClose()
      })
    } catch (e) {
      setError(true)
      logger.error("Error in registration", e)
    }
  }

  const handleClose = () => {
    setModalOpen(!modalOpen)
  }


  const handleSetBalance = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBalance(event.target.value ? parseFloat(event.target.value) : 0)
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
          <Form size='large' onSubmit={() => handleSubmit()}>
          <Segment stacked>
            <Form.Input
              fluid
              placeholder='Starting balance'
              value={balance}
              onChange={handleSetBalance}
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

export default SetBalance
