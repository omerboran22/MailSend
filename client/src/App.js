import React, { useEffect} from 'react';
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CssBaseline,Container,Grid,AppBar,Toolbar,Typography,Button,IconButton } from "@mui/material";
import { makeStyles }  from "@mui/styles";
import  PenIcon from "@mui/icons-material/Create";
import { fetchCustomers } from './actions/customer.js';
import MailForm from './components/MailForm.jsx';
import CustomersList from './components//CustomersList.jsx';
import LoginContainer from './components/user/UserLogin.jsx';


const useStyles=makeStyles({
  root:{
    flexGrow:1
  },
  menuButton:{
    marginRight:1
  },
  title:{
    flexGrow:1
  },
  container:{
    marginTop:2
  }
})

function App() {
  const discpatch=useDispatch();

  useEffect(()=>{
    discpatch(fetchCustomers())
  },[discpatch])

  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppBar position="static" color="default" elevation={0}>
          <Toolbar>
            <IconButton edge="start" className={classes.container} color="inherit"></IconButton>
            <Typography variant="h6" color="black" className={classes.title}>
              Otomatik Mail Gönderme
            </Typography>
            <Button color="primary" variant="outlined" startIcon={<PenIcon/>}>
              Çıkış Yap
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container className={classes.container}>
          <Grid item xs={12}>
            <Router>
              <Routes>
                <Route exact path='/' element={<><MailForm/><CustomersList/></>} />
                <Route exact path='/login' element={<LoginContainer/>} />
              </Routes>
            </Router>
          </Grid>
        </Grid>
      </Container>

    </>
  );
}

export default App;
