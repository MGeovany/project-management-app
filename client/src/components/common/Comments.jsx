import React from "react";
import { useState, useEffect } from "react";
import { Box, Divider } from '@mui/material'
import { getComments as getCommentsApi,
         createComment as createCommentApi,
         updateComment as updateCommentApi,
         deleteComment as deleteCommentApi 
} from '../../api/commentsApi'
import { Comment } from "./Comment";
import { CommentForm } from './CommentForm'
import '../../css/custom-blogs.css'

export const Comments = ({ currentUserId }) => {
    const [backendComments, setBackendComments] = useState([]);
    const [activeComment, setActiveComment] = useState(null)
    const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
    );

    const addComment = (text, parentId) => {
        createCommentApi(text, parentId).then((comment) => {
            setBackendComments([comment, ...backendComments]);
            setActiveComment(null)
        });
    };

    const updateComment = (text, commentId) => {
        updateCommentApi(text).then(() => {
          const updatedBackendComments = backendComments.map((backendComment) => {
            if (backendComment.id === commentId) {
              return { ...backendComment, content: text };
            }
            return backendComment;
          });
          setBackendComments(updatedBackendComments);
          setActiveComment(null);
        });
      };

    const deleteComment = (commentId) => {
        if(window.confirm('Are you sure you want to remove this post?')){
            deleteCommentApi(commentId).then(() =>{
                const updatedBackendComments = backendComments
                .filter((backendComment) => 
                backendComment.id !== commentId);
                setBackendComments(updatedBackendComments);
            });
        }
    }

    useEffect(() => {
        getCommentsApi().then((data) => {
            setBackendComments(data);
        })
    }, [])
  return (
    <Box className="comments">
        <CommentForm submitLabel="Submit" handleSubmit={addComment} />
        <Box className="comments-container">
            {rootComments.map((rootComment) => (
                <Box>
                  <Divider sx={{
                    marginBottom: 5,
                  }}/>
                  <Comment 
                  key={rootComment.id} 
                  comment={rootComment} 
                  currentUserId={currentUserId}
                  deleteComment={deleteComment}
                  activeComment={activeComment}
                  updateComment={updateComment}
                  setActiveComment={setActiveComment}
                  addComment={addComment}
                  />
                  <Divider/>
                </Box>
            ))}
        </Box>
    </Box>
  );
}
