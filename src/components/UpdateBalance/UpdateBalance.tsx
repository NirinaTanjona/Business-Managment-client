import { useState, useContext, useEffect } from 'react'
import { Box, Modal } from '@mui/material'
import { network, logger } from '../../utils'
import { SummaryContext } from '../../context/SummaryContext'

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

interface UpdateBalanceProps {
  updateBalance: boolean;
  setUpdateBalance: (value: boolean) => void;
}


function UpdateBalance({updateBalance, setUpdateBalance}:UpdateBalanceProps) {

  const summary = useContext(SummaryContext)
  const [balance, setBalance] = useState<string | undefined>()
  const [error, setError] = useState<boolean>(false)


  const starting_balance_data = {starting_balance: balance}

  const handleSubmit = async () => {
    try {
      await network.PATCH(`/summary/${summary?.id}/`, starting_balance_data).then(response => {
        console.log("starting balance updated!")
      })
    } catch (e) {
      setError(true)
      logger.error("Error in registration", e)
    }
  }

  const handleBalance = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBalance(event.target.value)
  };

  const handleUpdateBalance = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateBalance(!updateBalance)
  }

  useEffect(() => {
    setBalance(summary?.attributes?.starting_balance)
  }, [summary?.attributes?.starting_balance])


  return (
    <div>
      <Modal
        open={ updateBalance }
        onClose={handleUpdateBalance}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <input
              placeholder='Starting balance'
              value={balance}
              onChange={handleBalance}
            />
            <button
              id='login-button'
              type='submit'
            >
              Set Balance
            </button>
          </form>
        </Box>
      </Modal>
    </div>

  )
}

export default UpdateBalance