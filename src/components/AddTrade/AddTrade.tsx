import { useState } from 'react'
import { network, logger } from '../../utils'
import { TextField, Box, Button, FormControl, Select, InputLabel, MenuItem } from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select';


const tradeDirection = [
  {value: 'SHORT', label: 'SHORT'},
  {value: 'LONG', label: 'LONG'}
]


function AddTrade() {
  const [market, setMarket] = useState<string>('')
  const [direction, setDirection] = useState<string>('')
  const [closedPosition, setClosedPosition] = useState<Number | string>('')
  const [entryPrice, setEntryPrice] = useState<Number | string>('')
  const [stopLossPrice, setStopLossPrice] = useState<Number | string>('')
  const [takeProfitPrice, setTakeProfitPrice] = useState<Number | string>('')
  const [actualExitPrice, setActualExitPrice] = useState<Number | string>('')
  const [screenBefore, setScreenBefore] = useState<string>('')
  const [screenAfter, setScreenAfter] = useState<string>('')
  const [tradeNotes, setTradeNotes] = useState<string>('')
  const [disciplineRating, setDisciplineRating] = useState<Number | string>('')
  const [emotion, setEmotion] = useState<string>('')
  const [hasError, setError] = useState<boolean>(false)


  const tradeData = {
    market: market,
    direction: direction,
    closed_position: closedPosition,
    entry_price: entryPrice,
    stop_loss_price: stopLossPrice,
    take_profit_price: takeProfitPrice,
    actual_exit_price: actualExitPrice,
    screen_before: screenBefore,
    screen_after: screenAfter,
    trade_notes: tradeNotes,
    discipline_rating: disciplineRating,
    emotional_state_of_mind: emotion,
  }

  const handleSubmit = async () => {
    try {
      await network.POST(`/trade/`, tradeData).then(response => {
        console.log('data sent')
      })
    } catch (e) {
      setError(true)
      logger.error("Error sign in", e)
    }
  }


  const handleMarket = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMarket(event.target.value)
  };

  const handleDirection = (event: SelectChangeEvent) => {
    setDirection(event.target.value)
  };

  const handleClosedPosition = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClosedPosition(event.target.value ? parseFloat(event.target.value): '')
  };

  const handleEntryPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEntryPrice(event.target.value ? parseFloat(event.target.value): '')
  }

  const handleStopLossPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStopLossPrice(event.target.value ? parseFloat(event.target.value): '')
  }

  const handleTakeProfitPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTakeProfitPrice(event.target.value ? parseFloat(event.target.value): '')
  }

  const handleActualExitPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActualExitPrice(event.target.value ? parseFloat(event.target.value): '')
  }

  const handleScreenBefore = (event: React.ChangeEvent<HTMLInputElement>) => {
    setScreenBefore(event.target.value)
  };

  const handleScreenAfter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setScreenAfter(event.target.value)
  };

  const handleTradeNotes = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTradeNotes(event.target.value)
  };

  const handleDisciplineRating = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDisciplineRating(event.target.value ? parseInt(event.target.value): '')
  };

  const handleEmotion = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmotion(event.target.value)
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { my: 1, width: '100%'},
      }}
      autoComplete="off"
    >
      <div>
        <TextField
          label='Market'
          placeholder='Ex: EURUSD'
          value={market}
          onChange={handleMarket}
          size="small"
          required
          fullWidth
          id="fullWidth"
        />

      <FormControl fullWidth>
        <InputLabel id="select-label">Direction</InputLabel>
        <Select
          required
          labelId="select-label"
          id="direction-select"
          label="Direction"
          onChange={handleDirection}
          value={direction}
          size="small"
        >
          {tradeDirection.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
      <TextField
          label='Closed position'
          placeholder='Ex: 0,0'
          type="number"
          value={closedPosition}
          onChange={handleClosedPosition}
          size="small"
          required
        />
      </FormControl>

      <TextField
        label='Entry price'
        placeholder='Ex: 1,05911'
        type="number"
        value={entryPrice}
        onChange={handleEntryPrice}
        size="small"
        required
      />
      <TextField
        label='Stop loss'
        placeholder='Ex: 1,05109'
        type="number"
        value={stopLossPrice}
        onChange={handleStopLossPrice}
        size="small"
        required
      />
      <TextField
        label='Take profit'
        placeholder='Ex: 1.06463'
        type="number"
        value={takeProfitPrice}
        onChange={handleTakeProfitPrice}
        size="small"
      />
      <TextField
        label='Actual exit price'
        placeholder='Ex: 1,06109'
        type="number"
        value={actualExitPrice}
        onChange={handleActualExitPrice}
        size="small"
        required
      />
      <TextField
        label='Screenshot before'
        placeholder='Ex: https://www.tradingview.com/x/FXnj3Slt/'
        type="url"
        value={screenBefore}
        onChange={handleScreenBefore}
        size="small"
      />
      <TextField
        label='Screenshot after'
        placeholder='Ex: https://www.tradingview.com/x/FXnj3Slt/'
        type="url"
        value={screenAfter}
        onChange={handleScreenAfter}
        size="small"
      />
      <TextField
        label='Trade notes'
        placeholder='It was good trade because ...'
        type='textarea'
        value={tradeNotes}
        onChange={handleTradeNotes}
        size="small"
      />
      <TextField
        label='Discipline rating'
        placeholder='5'
        type="number"
        value={disciplineRating}
        onChange={handleDisciplineRating}
        size="small"
      />
      <TextField
        label='Emotional state of mind'
        placeholder='Feeling disciplined...'
        type="text"
        value={emotion}
        onChange={handleEmotion}
        size="small"
      />

      <Button
        onClick={handleSubmit}
        variant="contained"
      >
        AddTrdade
      </Button>
      </div>
    </Box>
  )
}

export default AddTrade