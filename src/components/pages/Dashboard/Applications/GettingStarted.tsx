import Cookies from 'js-cookie'
import { useState, useEffect } from 'react'
import UpdateBalance from './UpdateBalance'


function GettingStarted({id}:any) {

  const [showGettingStarted, setShowGettingStarted] = useState<boolean>(false)

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
      <UpdateBalance id={id} updateBalance={showGettingStarted} setUpdateBalance={setShowGettingStarted}/>
    </div>

  )
}

export default GettingStarted
