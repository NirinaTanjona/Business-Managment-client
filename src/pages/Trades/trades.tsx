import { useEffect, useState } from 'react'
import { logger, network } from '../../utils';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';

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
      <Layout>
        <pre>{JSON.stringify(trades, null, 2)}</pre>
      </Layout>
    </div>
  )
}
export default Trades