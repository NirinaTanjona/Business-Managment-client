import { createContext, useState, useEffect, useContext} from 'react'
import { logger, network } from '../utils';
import { SummaryType } from '../types'


export const SummaryContext = createContext<SummaryType | null>(null)

export function useSummary() {
  return useContext(SummaryContext)
}

export function SummaryProvider({ children}:{ children: React.ReactNode }) {
  const [ data, setData ] = useState<SummaryType | null>(null)


  const getSummaries = async () => {
    try {
      await network.GET(`/summary/`).then(response => {
        setData(response.data.data[0])
      })
    } catch (e) {
      logger.error('Error fetching Summaries', e)
    }
  }

  useEffect(() => {
    getSummaries()
  }, [])

  return (
    <SummaryContext.Provider value={data}>
      {children}
    </SummaryContext.Provider>
  )

}
