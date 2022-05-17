import {Button, Fade, Grid, Grow, IconButton, Skeleton, Snackbar, Typography, useTheme} from "@mui/material";
import OptionsBar, {AppBarMixins} from "../../components/OptionsBar/OptionsBar";
import { Box } from "@mui/system";
import { logout } from "../../store/actions/account"


import './Root.css';
import {useDispatch, useSelector, useStore} from "react-redux";
import {makeStyles} from "@mui/styles";
import { DateTime } from "luxon";
import {FiHeart, FiMessageCircle} from "react-icons/all";
import PostModal, {
  Author,
  Comment,
  CommentBox,
  PostActions,
  SummaryCommentBox
} from "../../components/PostModal/PostModal";
import React, {useEffect, useState} from "react";
import { index as postIndex} from '../../services/post'
import {useQuery} from "react-query";

const useStyles = makeStyles(theme=> ({
  appbar: theme.mixins.toolbar,
  innerPost: {
    position: 'absolute',
    width:  '100%',
    visibility: 'hidden',
    color: 'white',
    transition: 'all 100ms ease-in'
  },
  padded: {
    ...theme.mixins.padded,
    marginTop: theme.spacing(2)
  },
  xPadded: {
    ...theme.mixins.padded,
  },
  post: {
    cursor: 'pointer',
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    [theme.breakpoints.up('md')]: {
    '&:hover $innerPost' :{
      visibility: 'visible',
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
  }
  }
}))

const HomePage = (props) => {
  const classes = useStyles()

  const [post, setPost] = useState({
    open: false,
    id: null
  })

  const {isLoading, data} = useQuery('posts', ()=> {
    return postIndex()
  })

  console.log(data)

  function handlePost ({id, open}) {
    setPost(prev=>({...prev, open, id}))
  }

  function handlePostClose() {
    setPost(prev=>({...prev, open: false, id: null}))
  }

  if(isLoading)
    return <Grid className={classes.xPadded} container spacing={2.5}>
      {
        [1,2,3,4,5,6,7,8,9].map(index=><Grid item xs={12} sm={4}>
          <Skeleton inlist={true} count={3.5} height={'250px'} />
        </Grid>)
      }
  </Grid>

  return (
      <Box>
        <OptionsBar />
        <AppBarMixins/>
        <Box className={classes.padded}>
          <Posts posts={data.data.posts} handlePost={handlePost}/>
          {(post &&post.id) && <PostModal open={post.open} id={post.id} handleClose={handlePostClose}/>}
        </Box>
    </Box>

  );
};

function Posts ({handlePost, posts}) {
  return (<Grid container spacing={2.5}>
    {
      posts.map((post, index)=> <Grid key={index} item xs={12} sm={4}>
        <Post post={post} handlePost={handlePost}/>
      </Grid>)
    }
  </Grid>)
}

function Post ({handlePost, post}) {
  const classes = useStyles()
  const handlePostOpen = ()=> {
    handlePost({id: post.id, open: true})
  }

  return (
      <>
        <Box sx={{display: {md: 'none'}}}>
         <Author name={post.User.name} style={{backgroundColor: 'white'}} py={1} px={1}/>
        </Box>
      <Box sx={{
        backgroundColor: {xs: 'white', md: 'transparent'},
        pb: {xs: 1, md: 0}
      }}>
      <Box  onClick={handlePostOpen} className={classes.post} style={{
    backgroundImage: `url(${post.image})`
  }}>
    <Box position={'relative'} height={'100%'} justifyContent={'center'} alignItems={'end'} className={classes.innerPostContainer}>
      <Box bottom={0} display={'flex'} py={2} className={classes.innerPost} justifyContent={'center'}>
        <Typography paddingRight={2} display={'flex'} alignItems={'center'}>
          <FiHeart style={{marginRight: '0.4rem'}}/> {post.reactionCount}
        </Typography>
        <Typography display={'flex'} alignItems={'center'}>
          <FiMessageCircle style={{marginRight: '0.4rem'}}/> {post.commentCount}
        </Typography>
      </Box>
    </Box>
  </Box>
        <Box px={1} sx={{
          display: {md: 'none'}
        }}>
        <PostActions post_id={post.id}/>
          <Typography px={1} variant={'subtitle2'}>
            {post.reactionCount} Reaction{post.reactionCount !== 1? 's' : ''}
          </Typography>
          <Typography pl={1} color={'textSecondary'} variant={'body2'}>{post.description}</Typography>
          <SummaryCommentBox summary comments={post.Comments}/>
        </Box>
      </Box>
      </>)
}


export default HomePage;
