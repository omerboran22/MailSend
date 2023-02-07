import { Card,Typography , CardContent} from '@mui/material'
import React from 'react'
import moment from "moment";

const CustomerTemp=({_id,to,cretedAt,customerName})=> {
  return (
    <Card key={_id}>
      <CardContent>
        <Typography color="text.secondary" gutterBottom>
          {moment(cretedAt).format('MMMM D dddd YYYY, h:mm:ss')}
        </Typography>
        <Typography variant="h5" component="div">
          Mail :{to}
        </Typography>
        <Typography variant="h5" component="div">
          İsim : {customerName}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CustomerTemp