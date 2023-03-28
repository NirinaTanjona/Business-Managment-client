import { useState, useEffect } from 'react'
import { network, logger } from '../../utils'
import { Link } from 'react-router-dom'
import { SummaryType } from '../../types'



const Accounts = () => {

  const [ data, setData ] = useState<SummaryType[] | null>([])

  const getAccounts = async () => {
    try {
      await network.GET(`/summary/`).then(response => {
        setData(response.data.data)
      })
    } catch (e) {
      logger.error('Error fetching Summaries', e)
    }
  }

  useEffect(() => {
    getAccounts()
  }, [])

  return (
    <ul>
      {data?.map((item) => {
        return (
          <li key={item.id}>
            <Link to={`/accounts/${item.id}/dashboard`}>{item.id}</Link>
          </li>
        )
      })}
    </ul>

  )

}

export default Accounts