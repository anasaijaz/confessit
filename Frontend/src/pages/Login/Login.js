import { Box } from "@mui/system";
import { Button, Fade, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import {postEmailOTP, postOTP,verifyEmailOTP,verifyOTP} from "../../services/index"
import {useDispatch, useStore} from "react-redux"
import {login} from "../../store/actions/account"
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logos/logo/logo.png'
import "./Login.css"


const Login = (props) => {
  const [phone, setPhone] = useState(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null)
  const [otp, setOTP] = useState(null)
  const [counter, setCounter] = useState(60*5)
  const [posting, setPosting] = useState(false)
  const [emailOption,setEmailOption] = useState(false)

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  }

  const startCounter = ()=>{
    const interval = setInterval(()=>{
      if(counter<=0){
        clearInterval(interval)
      }
      else{
        setCounter(prev=>prev-1)
      }
    }, 1000)
  }

  const dispatch = useDispatch()


  const verifyOTPHandler = (event) => {
    if(!otp)
     return

    verifyOTP({otp, phone:phone})
    .then((res)=>{
      dispatch(login(res.data))
    })
    .catch((e)=>setError(e.response.data.error))

  }


  const requestOTPHandler = (event) => {
    if(!phone){
      return;
    }

    setPosting(true)
    setError(null)
    postOTP({
      phone,
      country: 91,
    }).then(res => {
      startCounter()
      setSent(true)
      setPosting(false)
      setError(null)
    })
    .catch((e)=>{
      setPosting(false)
      setError(e.response.data.error)
    })
  }

  const changeToEmailHandler = (event) => {
    setEmailOption(true)
  }

  const tryAgainHandler = (event) => {
    setSent(false)
  }

  return (
    <Grid container justifyContent="space-between"  style={{height:"100vh"}}>
      <Grid item className="hide" style={{overflow:"hidden",boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
       position:"relative"}} xs={0} md={6}>
        <img width="100%" height="100%" className="login-bg"  style={{position:"absolute"}} />
      </Grid>
      <Grid className="login-box" item md={6} xs={12}>
    <Box  display="flex" justifyContent="center" pt={10} pb={5} alignItems="center" >
      <img src={logo} width={'128px'} className="titan-logo"/>
    </Box>
  {!emailOption ?
    <Box  className={"mmain"} mx="auto"  >
      <Typography gutterBottom align="center" style={{paddingTop:"24px", fontFamily:"'Playfair Display', serif",fontWeight:700,fontSize:24}}>
        <span style={{paddingRight:"20px",paddingLeft:"20px",}}>
        {sent? "OTP SENT" :"LOGIN VIA OTP"}
        </span>
        </Typography>

      <Typography paragraph align="center" variant="subtitle1" color="textSecondary">
        Please enter the OTP sent to your phone
        </Typography>


      {sent? <OTPInput onChange={setOTP}/> :<Grid container alignItems="center"
      mb={4} py={2} px={5} spacing={2}>
          <Grid item xs={2}>
            <Typography style={{fontWeight:500}} variant="h6">+91</Typography>
          </Grid>
          <Grid item xs={10}>
            <TextField  type="tel" value={phone} onChange={handlePhoneChange} variant="filled" fullWidth size="small" label="Phone*"></TextField>
          </Grid>
        </Grid>}



      <Fade appear="false" unmountOnExit={true} timeout={300} in={(sent && counter>0)}>
      <Box>
      <Typography
      paragraph align="center"
      variant="subtitle2"
      color="textSecondary">OTP sent to <span style={{textDecoration:"underline"}}>{phone}</span> <span style={{cursor:"pointer",color:"red"}} onClick={tryAgainHandler}>change number</span></Typography>
      <Typography paragraph align="center" variant="subtitle2">{Math.floor(counter/60)}:{Math.floor(counter%60)} minutes after send agains</Typography>
      </Box>
      </Fade>

      {counter<=0 && <Typography paragraph align="center" variant="subtitle2">Please reload the page to resend the OTP</Typography>}

      {(error) && <Typography paragraph align="center" variant="subtitle2" color="error">{error}</Typography>}




      <Fade unmountOnExit={true} appear="false" timeout={300} in={posting}>
        <Typography align="center" style={{color:"rgba(20,96,110)"}} variant="subtitle2">
         Sending OTP to your phone :)
        </Typography>
      </Fade>
      <Fade unmountOnExit={true} appear="false" timeout={300} in={!posting}>
      <Button disabled={posting} onClick={sent? verifyOTPHandler :requestOTPHandler} variant="contained"
      style={{backgroundColor:"black", width:"100%",borderBottomRightRadius:"7px",borderBottomLeftRadius:"7px",padding:"16px"}}>
        {sent?"Verify OTP":"Request OTP"}
      </Button>
      </Fade>
    </Box>
     :<EmailLogin emailOption={setEmailOption}/>}


    <Box  display="flex" justifyContent="center" sx={{
      py:{
        lg:5,
        xs:4
      }
    }}  alignItems="center" >
    </Box>
    </Grid>
    </Grid>
  )
}

const OTPInput = (props)=>{

  const otpHandler = (e)=>{
    props.onChange(e.target.value)
  }

  return (
    <Box display="flex" mx={8} my={5}>
      <TextField onChange={otpHandler} fullWidth variant="filled" label="CODE"></TextField>
    </Box>
  )
}


function EmailInput({email, setEmail}) {
  return (
    <Box px={6} py={3}>
      <TextField value={email} onChange={(e)=>setEmail(e.target.value)} type="email" variant="filled" fullWidth label="Email">

      </TextField>
    </Box>
  )
}


function EmailLogin({emailOption}){
  const [sent,setSent] = useState(false)
  const [email,setEmail] = useState("")
  const [otp, setOTP] = useState(null)
  const [error, setError] = useState(null)
  const [posting, setPosting] = useState(false)
  const dispatch = useDispatch()

  const otpVerifyHandler = ()=>{
    verifyEmailOTP({email:email, otp:otp})
    .then(res=>{
      setError(null)
      dispatch(login(res.data))
    })
    .catch((e)=>setError(e.response.data.error))
  }

  const otpSubmitHandler = (e)=>{
    setPosting(true)
    postEmailOTP({email:email})
    .then((res)=>{
      setPosting(false)
      setError(null)
      setSent(true)
    })
    .catch((e)=>setError(e.response.data.error))
  }

  return (
    <Box className="mmain" mx={"auto"}>
      <Typography gutterBottom align="center" style={{paddingTop:"24px", fontFamily:"'Playfair Display', serif",fontWeight:700,fontSize:24}}>
        <span style={{paddingRight:"20px",paddingLeft:"20px",}}>
        {sent?"ENTER OTP":"LOGIN VIA EMAIL"}
        </span>
        </Typography>
      <Typography onClick={()=>{emailOption(false)}} paragraph align="center" style={{textDecoration:"underline",cursor:"pointer"}} variant="subtitle2" color="textSecondary">
        Use your phone to login
      </Typography>
      {sent? <OTPInput onChange={setOTP}/> :<EmailInput email={email} setEmail={setEmail}/>}
      {posting && <Typography paragraph align="center" variant="subtitle2" color="green">Sending OTP to your email</Typography>}
      {error && <Typography paragraph align="center" variant="subtitle2" color="error">{error}</Typography>}
      {/* disabled={posting} onClick={sent? verifyOTPHandler :requestOTPHandler} */}
      <Button  variant="contained"
      onClick={sent?otpVerifyHandler:otpSubmitHandler}
      style={{backgroundColor:"black", width:"100%",borderBottomRightRadius:"7px",borderBottomLeftRadius:"7px",padding:"16px"}}>
        {sent?"Verify OTP":"Request OTP"}
      </Button>
    </Box>
  )
}

export default Login;
