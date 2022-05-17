import {AppBar, Avatar, IconButton, InputBase, TextField, Toolbar, Typography, useTheme} from "@mui/material";
import "./OptionsBar.css"
import { Box } from "@mui/system";
import {useDispatch} from 'react-redux'
import {useSelector, useStore} from "react-redux";
import { DateTime } from "luxon";
import {makeStyles} from "@mui/styles";
import logo from '../../assets/logos/logo/logo.png'
import { FiLogOut, FiSearch} from "react-icons/all";
import {FiPlusSquare} from "react-icons/all";
import {useState} from "react";
import ConfessionModal from "../ConfessionModal/ConfessionModal";
import {logout} from "../../store/actions/account";



const useStyles = makeStyles((theme)=> ({
    appbar: theme.mixins.toolbar,
    search: {
        [theme.breakpoints.down('md')]: {
            display: 'none !important'
        },
        borderRadius: '10px',
        fontSize: '12px !important',
        color: theme.palette.text.secondary,
        fontWeight: 400,
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        paddingLeft: theme.spacing(2),
        width: '25ch',
        backgroundColor: theme.palette.grey[100],
        '& > input': {
            padding: '0px',
            paddingBottom: '0px',
            paddingLeft: '0.5rem'
        }
    },
    padded: theme.mixins.padded
}));

const OptionsBar = (props) => {
    const dispatch = useDispatch()
  const [confessionModal, setConfessionModal] = useState(false)
  const classes = useStyles()
  const user = useSelector(state=> state.userData.user)
  const handleConfessionModal = ()=> {
      setConfessionModal(open=> !open)
  }

  const nameInitial = ()=>{
      return user.name.charAt(0).toUpperCase() || '!'
  }

    function handleLogout(e) {
        dispatch(logout())
    }

  return (<AppBar elevation={0} className={classes.padded} color={'default'}>
      <Toolbar>
          <ConfessionModal handleClose={handleConfessionModal} open={confessionModal}/>
          <Box flexGrow={3}>
          <img src={logo} height="32px"/>
          </Box>

          <Box>


              <IconButton onClick={handleConfessionModal} size={'small'}>
                  <FiPlusSquare size={'22px'} color={'black'}/>
              </IconButton>
              <IconButton onClick={handleLogout} size={'small'}>
                  <FiLogOut size={'22px'} color={'black'}/>
              </IconButton>
              <IconButton size={'small'}>
                  <Avatar sx={{ width: 32, height: 32 }}>{nameInitial()}</Avatar>
              </IconButton>
          </Box>
      </Toolbar>
  </AppBar>)
}

function SearchBox() {
    const classes = useStyles()
    return (
        <Box className={classes.searchContainer}>
            <InputBase startAdornment={<FiSearch/>} className={classes.search} placeholder={'Search'}/>
        </Box>
    )
}



export function AppBarMixins() {
    const classes = useStyles()
    return (
        <Box className={classes.appbar}/>

    )
}


export function LocationMenu({index, location}){
  const colors = ["rgba(255, 0, 0, 0.25)", "rgba(0,0,255,0.25)","rgba(178, 245, 39, 0.8)"];
  const color = index<3?colors[index]:null;
  return <Box style={{backgroundColor:color,animationDuration:`${400*((index+1)%7)}ms`}} className="message_menu" py={1}  minWidth={"300px"}  maxWidth="500px">
      <Typography variant="body1" style={{fontWeight:700}}>
        {location.location}
      </Typography>
      <Typography gutteBottom color="textSecondary" variant="body2">
        Sent <span style={{fontWeight:800, color:"green"}}>{location.sentCount}</span> messages
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Recieved <span style={{fontWeight:800, color:"green"}}>{location.receivedCount}</span> messages
      </Typography>
  </Box>
}


export function MessageMenu({sender, message,index,createdAt}){

  return (
    <Box style={{animationDuration:`${400*((index+1)%7)}ms`}} className="message_menu" py={1}  minWidth={"300px"}  maxWidth="500px">
      <Typography variant="body1" style={{fontWeight:700}}>
        {sender}
      </Typography>
      <Typography gutteBottom color="textSecondary" variant="body2">
        {DateTime.fromISO(createdAt).toLocaleString(DateTime.DATETIME_MED)}
      </Typography>
      <Typography variant="body2" >
        {message}
      </Typography>
    </Box>
  )
}


export default OptionsBar;
