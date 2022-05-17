import React, {useState} from 'react';
import {Box, Button, CircularProgress, TextField, Typography} from "@mui/material";
import {useAddCommentData, useAddPostData, usePostData} from "../../hooks/usePostData";

const ConfessionModal = ({open, handleClose}) => {
    const [confession, setConfession] = useState({
        confession: ''
    })
    const { mutate: addPost, isLoading, isSuccess } = useAddPostData()

    if(isSuccess){
        handleClose()
        return null
    }
    const handleConfessionChange = (e) => {
        setConfession(prev=> ({...prev, confession: e.target.value}))
    }

    const handlePost = ()=> {
        addPost({post: confession})
    }

    if(!open)
        return null;
    return (
        <Box bgcolor={'white'} p={3} borderRadius={1} border={'1px solid black'} right={0} top={60} position={'absolute'}>
            <Typography fontWeight={500} variant={'h6'}>
                Confess
            </Typography>
            <Typography gutterBottom color={'textSecondary'} variant={'body2'}>
                Confession will be private 100% and won't be visible to anyone
            </Typography>
            <TextField vale={confession} onChange={handleConfessionChange} placeholder={'I have a confession...'} size={'small'} variant={'filled'} multiline={true} rows={7} label={'Confession'} fullWidth/>
            {isLoading? <Box textAlign={'center'} py={2}><CircularProgress/></Box>: <Button onClick={handlePost} style={{marginTop: 10}} fullWidth size={'large'}>Confess</Button>}
        </Box>
    );
};

export default ConfessionModal;
