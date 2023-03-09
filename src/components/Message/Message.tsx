import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { AlertColor } from '@mui/material/Alert'
import { useMessage } from './MessageContext'
import { useMessageDispatch } from './MessageContext'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function Message() {

  const messageData = useMessage()
  const dispatch = useMessageDispatch()
  console.log(messageData ? messageData.message : "no message")

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch({type: "CLOSE"});
  };

  if (messageData) {

    return (
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={messageData.openAlert} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={messageData.severity} sx={{ width: '100%' }}>
            {messageData.message}
          </Alert>
        </Snackbar>
      </Stack>
    );
  }
  else {
    return (
      <div>
      </div>
    )
  }
}