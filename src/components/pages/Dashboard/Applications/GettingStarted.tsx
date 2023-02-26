import Cookies from 'js-cookie'
import { SummaryContext } from '../SummaryContext'
import { useState, useEffect, useContext } from 'react'
import UpdateBalance from './UpdateBalance'


function GettingStarted() {

  const [showGettingStarted, setShowGettingStarted] = useState<boolean>(false)
  const summary = useContext(SummaryContext)

  useEffect(() => {
    const token = Cookies.get('authToken')
    const hasSeenGettingStarted = Cookies.get(`hasSeenGettingStarted_${token}`)
    if (!hasSeenGettingStarted) {
      setShowGettingStarted(prevShowGettingStarted => !prevShowGettingStarted)
      Cookies.set(`hasSeenGettingStarted_${token}`, 'true')
    }
  }, [])

  return (
    <div>
      {summary && <UpdateBalance id={summary.id} updateBalance={showGettingStarted} setUpdateBalance={setShowGettingStarted}/>}
    </div>

  )
}

export default GettingStarted
