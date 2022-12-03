import { Avatar, Box, IconButton, Tooltip } from "@mui/material";
import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from '@mui/icons-material/Edit';
import { useSelector } from "react-redux";
import parse from 'html-react-parser'
import '../../css/custom-blogs.css'
import { CommentForm } from "./CommentForm";

export const Comment = ({ 
    comment, 
    currentUserId, 
    deleteComment, 
    activeComment, 
    setActiveComment,
    updateComment
 }) => {
  const user = useSelector((state) => state.user.value);
  const timer = 600000; //Ten Minutes
  const timePassed = new Date() - new Date(comment.createdAt) > timer; // If the Post was uploaded before 5 minutes past they can Edit or Delete
  const canEdit = currentUserId === comment.userId && !timePassed;
  const canDelete = currentUserId === comment.userId && !timePassed;
  const createdAt = new Date(comment.createdAt).toLocaleDateString();
  const isEditing = 
  activeComment && 
  activeComment.type === 'editing' && 
  activeComment.id === comment.id;
  return (
    <>
    <Box className="comment">
        <Box className="comment-image-container">
            <Tooltip title="Profile Picture">
            <IconButton sx={{ p: 0, marginRight:2 }}>
            <Avatar>{user.username.charAt(0)}</Avatar>
            </IconButton>
        </Tooltip>
        </Box>
        <Box className="comment-right-part">
            <Box className="comment-content">
                <Box className="comment-content">
                    <Box className="comment-author">{comment.username}</Box>
                    <Box>{createdAt}</Box>
                </Box>
                <Box className="comment-content">
                    {canDelete && 
                    <IconButton variant="outlined" color="error" onClick={() => deleteComment(comment.id)}>
                    <DeleteOutlinedIcon />
                    </IconButton>}
                    {canEdit && 
                    <IconButton color="primary"
                    onClick={() => setActiveComment({
                        id:comment.id,
                        type: 'editing'
                    })}
                    >
                    <EditIcon/>
                    </IconButton>}
                </Box>
            </Box>
            {!isEditing && <Box className="comment-text">{parse(comment.content)}</Box>}
            {isEditing && (
                <CommentForm 
                submitLabel='Update' 
                hasCancelButton 
                initialText={comment.content}
                handleSubmit={(text) => updateComment(text, comment.id)}
                handleCancel={() => setActiveComment(null)}
                className="comment-edit"
                />
            )}
        </Box>
    </Box>
    </>
  );
}