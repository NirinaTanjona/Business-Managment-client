import { useState, useEffect } from 'react'
import { Button, Form, Grid, Header, Segment, DropdownProps } from 'semantic-ui-react';
import { network, auth, logger } from '../../../../utils'


function AddTrade() {
  const [market, setMarket] = useState<string>('')
  const [direction, setDirection] = useState<string>('')
  const [closedPosition, setClosedPosition] = useState<Number>()
  const [entryPrice, setEntryPrice] = useState<Number>()
  const [stopLossPrice, setStopLossPrice] = useState<Number>()
  const [takeProfitPrice, setTakeProfitPrice] = useState<Number>()
  const [actualExitPrice, setActualExitPrice] = useState<Number>()
  const [screenBefore, setScreenBefore] = useState<string>('')
  const [screenAfter, setScreenAfter] = useState<string>('')
  const [tradeNotes, setTradeNotes] = useState<string>('')
  const [disciplineRating, setDisciplineRating] = useState<Number>()
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

  const handleDirection = (event: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => {
    setDirection(data.value as string)
  };

  const handleClosedPosition = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClosedPosition(event.target.value ? parseFloat(event.target.value): undefined)
  };

  const handleEntryPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEntryPrice(event.target.value ? parseFloat(event.target.value): undefined)
  }

  const handleStopLossPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStopLossPrice(event.target.value ? parseFloat(event.target.value): undefined)
  }

  const handleTakeProfitPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTakeProfitPrice(event.target.value ? parseFloat(event.target.value): undefined)
  }

  const handleActualExitPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActualExitPrice(event.target.value ? parseFloat(event.target.value): undefined)
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
    setDisciplineRating(event.target.value ? parseInt(event.target.value): undefined)
  };

  const handleEmotion = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmotion(event.target.value)
  };

  return (
    <Form size='large' onSubmit={() => handleSubmit()}>
      <Segment stacked>
      <Form.Input
        fluid
        label='Market'
        placeholder='Ex: EURUSD'
        value={market}
        onChange={handleMarket}
        required
      />
      <Form.Select
        fluid
        label='Direction'
        placeholder='Trade direction'
        type="string"
        value={direction}
        options={[
          {key: 'short', value: 'SHORT', text: 'SHORT'},
          {key: 'long', value: 'LONG', text: 'LONG'}
        ]}
        onChange={handleDirection}
        required
      />
      <Form.Input
        fluid
        label='Closed position'
        placeholder='Ex: 0,0'
        type="number"
        step="0.01"
        value={closedPosition}
        onChange={handleClosedPosition}
        required
      />
      <Form.Input
        fluid
        label='Entry price'
        placeholder='Ex: 1,05911'
        type="number"
        step="0.01"
        value={entryPrice}
        onChange={handleEntryPrice}
        required
      />
      <Form.Input
        fluid
        label='Stop loss'
        placeholder='Ex: 1,05109'
        type="number"
        step="0.01"
        value={stopLossPrice}
        onChange={handleStopLossPrice}
        required
      />
      <Form.Input
        fluid
        label='Take profit'
        placeholder='Ex: 1.06463'
        type="number"
        step="0.01"
        value={takeProfitPrice}
        onChange={handleTakeProfitPrice}
      />
      <Form.Input
        fluid
        label='Actual exit price'
        placeholder='Ex: 1,06109'
        type="number"
        step="0.01"
        value={actualExitPrice}
        onChange={handleActualExitPrice}
        required
      />
      <Form.Input
        fluid
        label='Screenshot before'
        placeholder='Ex: https://www.tradingview.com/x/FXnj3Slt/'
        type="url"
        value={screenBefore}
        onChange={handleScreenBefore}
      />
      <Form.Input
        fluid
        label='Screenshot after'
        placeholder='Ex: https://www.tradingview.com/x/FXnj3Slt/'
        type="url"
        value={screenAfter}
        onChange={handleScreenAfter}
      />
      <Form.Input
        label='Trade notes'
        placeholder='It was good trade because ...'
        value={tradeNotes}
        onChange={handleTradeNotes}
        control='textarea'

      />
      <Form.Input
        fluid
        label='Discipline rating'
        placeholder='5'
        type="number"
        step="0.01"
        value={disciplineRating}
        onChange={handleDisciplineRating}
      />
      <Form.Input
        fluid
        label='Emotional state of mind'
        placeholder='Feeling disciplined...'
        type="text"
        value={emotion}
        onChange={handleEmotion}
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
  )
}

export default AddTrade