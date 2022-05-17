import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {
    Avatar, Button,
    Dialog,
    IconButton, InputBase, Tooltip,
    Typography
} from "@mui/material";
import {Box} from "@mui/system";
import {makeStyles} from "@mui/styles";
import {
    BsEmojiSmile, FaFire,
    FiBookmark,
    FiHeart,
    FiMessageCircle,
    FiMoreHorizontal,
    FiSend, FiX
} from "react-icons/all";
import {grey} from "@mui/material/colors";
import {get as postGet, index as postIndex, postComment, postReply} from '../../services/post'
import {isoStringToRelativeTime} from "../../utils/time";
import Selector from "../ReactionSelector/Selector";
import {useQuery} from "react-query";
import {useAddCommentData, useAddReactionData, useAddReplyData, usePostData} from "../../hooks/usePostData";


const useStyles = makeStyles(theme=> ({
    postImage: {
        backgroundColor:'black',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
    },
    scrollbar: {
        borderColor: grey.A100,
        borderTop:'1px solid grey',
        borderBottom:'1px solid lightgrey'

    },
    input: {
        fontSize: '12px !important'
    }
}))


const PostModal = ({open, handleClose, id}) => {
    const classes = useStyles()

    const [replyingTo, setReplyingTo] = useState({
        comment_id: null
    })

    const {data, isLoading} = usePostData(id)

    const handleReply = ({id, comment}) => {
        setReplyingTo({
            comment_id: id,
            comment: comment
        })
    }

    const handlePostClose = () => {
        handleClose()
    }

    if(isLoading)
        return <p></p>;

    return (
        <Dialog  maxWidth={'md'} scroll={'body'} fullWidth open={open} onClose={handlePostClose}>
            <Box sx={{
                display:'flex',
                flexDirection: { xs: 'column', md: 'row' },
            }} >
                <Box sx={{
                    width: {
                        xs:'100%',
                        md:'60%'
                    }
                }} >
                    <Box sx={{
                        height: {xs: '300px', md: '100%'}
                    }} className={classes.postImage} style={{
                        backgroundImage: `url(${data.data.image})`
                    }}>
                    </Box>
                </Box>
                <Box  sx={{
                    width: {
                        xs:'100%',
                        md:'40%'
                    }
                }}  px={2} py={2}>
                    <Author name={data.data.User.name}/>
                    <CommentBox comments={data.data.Comments} handleReply={handleReply}/>
                    <PostActions post_id={data.data.id}/>
                    <ReactionList reactions={data.data.Reactions}/>
                    <Typography color={'textSecondary'} pl={1} pb={1} variant={'body1'} fontSize={10}>
                        {isoStringToRelativeTime(data.data.createdAt)}
                    </Typography>
                    <CommentInput setReplying={setReplyingTo} replying={replyingTo} post_id={data.data.id}/>
                </Box>
            </Box>
        </Dialog>
    );
};

export function Author ({name , ...props}) {
    return (
        <Box pb={1.5} display={'flex'} alignItems={'center'} {...props}>
            <Avatar style={{width: '24px', height:'24px'}}></Avatar>
            <Typography flexGrow={1} color={'textPrimary'} paddingLeft={1} variant={'body2'}>
                {name}
            </Typography>

        </Box>
    )
}

export function PostActions ({post_id, ...props}) {


    return (
        <Box display={'flex'} py={1} {...props}>
            <Box flexGrow={1}>
                <Selector id={post_id}>
                <IconButton size={'small'}>
                    <FiHeart/>
                </IconButton>
                </Selector>

            </Box>
        </Box>
    )
}

export function CommentBox({handleReply, comments}) {
    const classes = useStyles()

    return (<Box height={'350px'} py={2} overflow={'auto'}
                 className={classes.scrollbar}>
        {
         comments.map(comment=> <Comment
             key={comment.id}
             avatar
             handleReply={handleReply}
             comment={comment}
             />
         )
        }

    </Box>)
}

export function ReactionList ({reactions}){
    const heartCount = reactions.filter(reaction=> reaction.reaction === 'Heart').length
    const celebrateCount = reactions.filter(reaction=> reaction.reaction === 'Celebrate').length
    const sadCount = reactions.filter(reaction=> reaction.reaction === 'Sad').length
    const angryCount = reactions.filter(reaction=> reaction.reaction === 'Angry').length

    return (
        <Box pl={1} style={{cursor: 'pointer'}} display={'flex'}>
            <Tooltip title={`${heartCount} Heart${heartCount !== 1 ? 's' : ''}`}>
                <span>❤️ <Typography align={'center'} variant={'body2'} sx={{display:{
                        xs: 'block',
                        md: 'none'
                    }}}>{heartCount} </Typography></span>

            </Tooltip>
            <Tooltip title={`${angryCount} Angry`}>
                <span>😠 <Typography align={'center'} variant={'body2'} sx={{display:{
                        xs: 'block',
                        md: 'none'
                    }}}>{angryCount} </Typography></span>
            </Tooltip>
            <Tooltip title={`${celebrateCount} Celebrating`}>
                <span>🎉 <Typography align={'center'} variant={'body2'} sx={{display:{
                        xs: 'block',
                        md: 'none'
                    }}}>{celebrateCount} </Typography></span>
            </Tooltip>
            <Tooltip title={`${sadCount} Sad`}>
                <span>😕 <Typography align={'center'} variant={'body2'} sx={{display:{
                        xs: 'block',
                        md: 'none'
                    }}}>{sadCount} </Typography></span>
            </Tooltip>
        </Box>
    )
}

export function SummaryCommentBox({comments, summary}) {
    const classes = useStyles()

    return (<Box overflow={'auto'}>
        {
            comments.map(comment=> <Comment
                    key={comment.id}
                    avatar={false}
                    dense
                    summary
                    comment={comment}
                />
            )
        }
    </Box>)
}

export function CommentInput({post_id, comment_id, replying, setReplying}) {
    const classes = useStyles()
    const [comment ,setComment] = useState('')
    const { mutate: addComment } = useAddCommentData(post_id)
    const { mutate: addReply } = useAddReplyData(post_id)
    const handleCommentPost = () => {

        if(!comment_id) {
            if(replying.comment_id){
               addReply({id: post_id, comment, comment_id: replying.comment_id})
                setComment('')
                handleReplyClose()
            }
            else{
                addComment({id: post_id, comment})
                setComment('')
            }
        }
    }

    function handleCommentChange(e){
        setComment(e.target.value)
    }

    function handleReplyClose(){
        setReplying({
            comment_id: null
        })
    }

    function addFireEmoji(){
        setComment(comment => comment + ' 🔥')
    }

    return (
        <Box>
            {replying.comment_id && <Box bgcolor={grey.A100} px={1} display={'flex'} alignItems={'center'}>
                <Typography noWrap={true} flexGrow={1} variant={'body2'}>
                    <span style={{color: grey.A400}}>Replying to </span>
                     {replying.comment}</Typography>
                <IconButton onClick={handleReplyClose} size={'small'}>
                    <FiX/>
                </IconButton>
            </Box>}
        <Box display={'flex'}>
        <IconButton onClick={addFireEmoji} size={'small'}><FaFire/></IconButton>
        <InputBase value={comment} onChange={handleCommentChange} style={{flexGrow: 1}} placeholder={'Add a comment...'} className={classes.input}/>
        <Button disabled={(comment ? comment.length : 0) <= 0 } onClick={handleCommentPost} variant={'text'}> Post</Button>
        </Box>
        </Box>
    )
}

export function Comment({avatar, hideMore, hideStats, description, dense, handleReply, comment, summary}) {
    const [replyShown, setRepliesShown] = useState(false)

    function replyHandler() {
        handleReply({id: comment.id, comment: comment.comment})
    }

    function toggleReply() {
        setRepliesShown(shown=>!shown)
    }

    return (<Box sx={{
     py: dense ? 0 : 1
    }
    }><Box display={'flex'} alignItems={'center'}>
        {avatar && <Avatar style={{width: '24px', height: '24px'}}></Avatar>}
        <Box flexGrow={1}>
        <Typography  color={'textPrimary'} fontWeight={400} paddingLeft={1} variant={'body2'}>
            <span style={{fontWeight: 600}}> {comment.User.name} </span> {comment.comment}
        </Typography>
            {description && <Typography color={grey.A400} pl={1} variant={'body2'}>View all 15 comments</Typography>}
            {!(hideStats || description || summary) && <Typography paddingLeft={1} variant={'body2'} fontSize={'10px'} fontWeight={400}>
                {isoStringToRelativeTime(comment.createdAt)} • <span onClick={replyHandler} style={{cursor: 'pointer'}}>Reply</span>
                {(comment.Replies && comment.Replies.length > 0) && <span style={{cursor: 'pointer'}} onClick={toggleReply}> • {replyShown ? 'hide' : 'show'} replies</span>}
            </Typography>}
        </Box>
    </Box>
        {replyShown && <Box pl={4}>
            {comment.Replies.map(reply => <Reply key={reply.id} reply={reply}></Reply>)}
        </Box>}
    </Box>)
}

function Reply({reply}){
    return (
        <Box pt={1} display={'flex'} alignItems={'center'}>
           <Avatar style={{width: '24px', height: '24px'}}></Avatar>
            <Box flexGrow={1}>
                <Typography  color={'textPrimary'} fontWeight={400} paddingLeft={1} fontSize={10} variant={'body2'}>
                    <span style={{fontWeight: 500}}>Anas Aijaz </span>
                    {reply.comment}
                </Typography>
              <Typography paddingLeft={1} variant={'body2'} fontSize={'10px'} fontWeight={400}>
                    {isoStringToRelativeTime(reply.createdAt)}
                </Typography>
            </Box>

        </Box>
    )
}

PostModal.propTypes = {
    open: PropTypes.bool,
    handleClose: PropTypes.func
};

export default PostModal;
