import { useEffect, useState } from 'react'
import { logger, network } from '../../../utils';
import { Link } from 'react-router-dom';

function Trades() {

  const [ trades, setTrades ] = useState<object>({})

  const getTrades = async () => {
    try {
      await network.GET(`/trade/`).then(response => {
        setTrades(response.data.data)
      })
    } catch (e) {
      logger.error('Error fetching Trades', e)
    }
  }

  useEffect(() => {
    getTrades()
  }, [])

  return (
    <div>
      <Link to="/dashboard" >Dashboard</Link>
      <h1>These are all your trade logs</h1>
      <pre>{JSON.stringify(trades, null, 2)}</pre>
    </div>
  )
}
export default Trades