import { Avatar, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { FiArrowUpRight , FiArrowDownLeft} from "react-icons/fi";
import {makeStyles} from "@mui/styles";


const useStyles = makeStyles(theme => ({}))



const Comment = ({comment}) => {
  const [open, setOpen] = useState(false)
  const classes = useStyles()

  function toggleOpenState() {
    setOpen(prev=>!prev)
  }

  return (
    <Box pt={1} className={classes.comment} pl={1} ml={1} style={{borderLeft: '1px solid black'}}>
      <Box  display='flex' alignItems={'center'}>
        {comment.replies &&<IconButton size='small' onClick={toggleOpenState}>
          {(open)?<FiArrowDownLeft /> : <FiArrowUpRight />}
        </IconButton>}
        <Avatar src={comment.author.avatar} style={{width: '24px', height: '24px'}}></Avatar>
        <Typography pl={2}  variant='body2'>
          {comment.author.name}
        </Typography>
      </Box>
      <Typography  pl={4} style={{fontSize:'14px'}} variant='body1'>
        {comment.text}        
      </Typography>
       {
         (comment.replies && open) && comment.replies.map(reply=> <Comment comment={reply}/>)
       }
    </Box>
  );
};

export default Comment;