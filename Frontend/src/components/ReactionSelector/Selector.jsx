import React, {useState} from 'react';
import {Box} from "@mui/material";
import {postReaction} from "../../services/post";
import {useAddReactionData} from "../../hooks/usePostData";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(theme=> ({
    emoji: {
        transition: 'all 300ms ease',
        "&:hover": {
            transform: 'scale(1.2)'
        }
    },
    emojiContainer: {
        animation: '$slideUp 300ms ease'
    },
    "@keyframes slideUp": {
        "0%": {
            opacity: 0,
            transform: "translateY(20px)"
        },
        "100%": {
            opacity: 1,
            transform: "translateY(0)"
        }
    }
}))

const Selector = ({children, id}) => {
    const [open, setOpen] = useState(false)
    const { mutate: addReaction } = useAddReactionData(id)
    const classes = useStyles()


    const toggleOpen = ()=> {
        setOpen(true)
    }

    const toggleClose = () => {
        setOpen(false)
    }

    const handleReaction = ({reaction})=> {
        addReaction({id, reaction})
        toggleClose()
    }

    return (
        <Box  display={'inline'} position={'relative'} zIndex={1}>
            <Box  display={'inline-block'} onMouseEnter={toggleOpen}>
            {children}
            </Box>
            {open && <Box className={classes.emojiContainer}  onMouseLeave={toggleClose}  position={'absolute'} top={-50} p={1} zIndex={2} borderRadius={100}
                  style={{backgroundColor: 'white', border: '2px solid black'}}>
                <span className={classes.emoji} onClick={(e)=>handleReaction({reaction: 'Heart'})} style={{cursor: 'pointer', display: 'block'}}>❤️</span>
                <span className={classes.emoji} onClick={(e)=>handleReaction({reaction: 'Angry'})} style={{cursor: 'pointer', display: 'block' }}>😠</span>
                <span className={classes.emoji} onClick={(e)=>handleReaction({reaction: 'Celebrate'})} style={{cursor: 'pointer', display: 'block'}}>🎉</span>
                <span className={classes.emoji} onClick={(e)=>handleReaction({reaction: 'Sad'})} style={{cursor: 'pointer', display: 'block'}}>😕</span>
            </Box>}
        </Box>
    );
};

export default Selector;
