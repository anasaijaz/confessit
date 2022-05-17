import {useQuery, useMutation} from "react-query";
import {get as postGet, post, postComment, postReaction, postReply} from '../services/post'
import {useQueryClient} from "react-query";

export const usePostData = (postId)=> {
    return useQuery(['post', postId], ()=> postGet({id:postId}))
}

function addComment(data){
   return postComment({id: data.id, comment: data.comment})
}

function addReply(data){
    return postReply({id: data.id, comment: data.comment, comment_id: data.comment_id})
}

export const useAddCommentData = (postId) => {
    const queryClient = useQueryClient()
    return useMutation(addComment,
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['post', postId])
                queryClient.invalidateQueries('posts')
            }
        })
}

function addPost(data){
    return post({post: data.post})
}

export const useAddPostData = () => {
    const queryClient = useQueryClient()
    return useMutation(addPost,
        {
            onSuccess: () => {
                queryClient.invalidateQueries('posts')
            }
        })
}

export const useAddReplyData = (postId) => {
    const queryClient = useQueryClient()
    return useMutation(addReply,
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['post', postId])
                queryClient.invalidateQueries('posts')
            }
        })
}

function addReaction(data){
    return postReaction({id: data.id, reaction: data.reaction})
}

export const useAddReactionData = (postId) => {
    const queryClient = useQueryClient()
    return useMutation(addReaction,
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['post', postId])
                queryClient.invalidateQueries('posts')
            }
        })
}
