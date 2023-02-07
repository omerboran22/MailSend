import React from 'react'
import {useDispatch} from 'react-redux'
import { makeStyles } from "@mui/styles";
import { 
  Button,
  TextField,
  Input,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Container,
  Checkbox,
  Alert,
} 
from "@mui/material";
import { useForm,Controller } from "react-hook-form";
import  { yupResolver }  from "@hookform/resolvers/yup";
import * as yup from "yup";

import { createCustomers } from "../actions/customer.js";

const mailSendSchema=yup.object().shape({
  mail:yup.string("Boş olamaz").email("Mail Formatı Hatalı").required("boş olamaz"),
  isim:yup.string("Boş olamaz").required("boş olamaz"),
  teamCheck:yup.boolean(),
})

const useStyles=makeStyles({
  root:{
    margin:2
  },
  TextField:{
    margin:1
  }
})

function MailForm() {
  const dispatch=useDispatch();
  const classes = useStyles();
  const {register,handleSubmit,reset,formState:{errors}}=useForm({resolver:yupResolver(mailSendSchema)});
  const submitForm=(data)=>{
    dispatch(createCustomers({...data}))
    //reset();
  }

  return (
    <Container>
     <form className={classes.root} onSubmit={handleSubmit(submitForm)}>
     <FormGroup>
      <TextField
          {...register("mail")} 
          error={!!errors.mail} 
          helpertext={errors.mail}
          margin="dense" id="mail" label="Mail Adresi" name='mail' fullWidth/>
       {errors.mail ?<Alert severity="error">{errors.mail.message}</Alert>:null }
     </FormGroup>
      <FormGroup>
        <FormControlLabel  control={
          <Checkbox 
            {...register("teamCheck")}
            error={errors.teamCheck} 
            helpertext={errors.teamCheck}
            defaultChecked id='teamCheck' name='teamCheck' />
        } label="Firmaysa İşaretle" />
      </FormGroup>
      <FormGroup>
        <TextField 
          error={!!errors.isim} 
          helpertext={errors.isim}
          {...register("isim")} 
          margin="dense"id="isim" label="İsim" name='isim' fullWidth/>
          {errors.isim ?<Alert severity="error">{errors.isim.message}</Alert>:null }
      </FormGroup>
      <Button type='submit'>Gönder</Button>
     </form>
     {  }
    </Container>
  )
}

export default MailForm