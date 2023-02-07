import React from 'react'
import {useSelector} from "react-redux"
import { Container, Grid } from '@mui/material';
import CustomerTemp from './CustomerTemp';

function CustomersList() {
  const custData=useSelector((state) =>state.customers.customers)
  return (
    <Container sx={{margin:2}}>
      <Grid container spacing={2} alignContent="stretch">
        {custData.map(function(data,i){
          return <Grid sx={{margin:1}} key={i}><CustomerTemp key={i} {...data}/></Grid>
        })}
      </Grid>
    </Container>
  )
}

export default CustomersList