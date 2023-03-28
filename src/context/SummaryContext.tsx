import { createContext, useState, useEffect, useContext} from 'react'
import { logger, network } from '../utils';
import { SummaryType } from '../types'


export const SummaryContext = createContext<SummaryType | null>(null)
export const SummaryStateContext = createContext<React.Dispatch<React.SetStateAction<string | undefined>>>(() => {})

export function useSummary() {
  return useContext(SummaryContext)
}

export function useSummaryState() {
  return useContext(SummaryStateContext)
}

export function SummaryProvider({ children}:{ children: React.ReactNode }) {
  const [ data, setData ] = useState<SummaryType | null>(null)
  const [ id, setID ] = useState<string | undefined>()


  useEffect(() => {
    // console.log("data: ", response.data.data)
    console.log("id: ", id)
    if (id) {
      try {
        network.GET(`/summary/${id}/`).then(response => {
          setData(response.data.data)

        })
      } catch (e) {
        logger.error('Error fetching Summaries', e)
      }
    }
  }, [id])


  return (
    <SummaryStateContext.Provider value={setID}>
      <SummaryContext.Provider value={data}>
        {children}
      </SummaryContext.Provider>
    </SummaryStateContext.Provider>
  )

}
