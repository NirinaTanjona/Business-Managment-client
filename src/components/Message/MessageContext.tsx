import { createContext, useContext, useReducer } from 'react'
import { AlertColor } from '@mui/material/Alert'
import Message from './Message'


interface MessageType {
  openAlert: boolean,
  severity: AlertColor,
  message?: string
}

interface MessageActionType {
  type: string,
  message?: string
}


export const MessageContext = createContext<MessageType | null>(null)
export const MessageDispatchContext = createContext<React.Dispatch<MessageActionType>>(() => {})

export function useMessage() {
  return useContext(MessageContext)
}

export function useMessageDispatch() {
  return useContext(MessageDispatchContext)
}


function reducer (state: MessageType , action: MessageActionType) {
  switch (action.type) {
    case "OPEN_SUCCESS_ALERT":
      return {
        openAlert: true,
        severity: "success" as AlertColor,
        message: action.message
      }
    case "OPEN_ERROR_ALERT":
      return {
        openAlert: true,
        severity: "error" as AlertColor,
        message: action.message
      }
    case "CLOSE":
      return {
        ...state,
        openAlert: false
      }
    default: throw new Error("Playload type not defined!")
  }
}


export function MessageProvider({ children}:{ children: React.ReactNode }) {
  const initialArgs: MessageType = {
    openAlert: false,
    severity: "success",
    message: "Initial message"
  }

  const [messageData, dispatch] = useReducer<React.Reducer<MessageType, MessageActionType>>(reducer, initialArgs)
  return (
    <MessageContext.Provider value={messageData}>
      <MessageDispatchContext.Provider value={dispatch}>
        <Message />
        {children}
      </MessageDispatchContext.Provider>
    </MessageContext.Provider>
  )
}