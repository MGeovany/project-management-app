import { Avatar, Box, IconButton, Tooltip } from "@mui/material"
import React from "react"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import EditIcon from "@mui/icons-material/Edit"
import { useDispatch, useSelector } from "react-redux"
import parse from "html-react-parser"
import "../../css/custom-blogs.css"
import { setBlogs } from "../../redux/features/blogSlice"
import { CommentForm } from "./CommentForm"
import blogApi from "../../api/blogApi"

export const Comment = ({ 
  comment, 
  data, 
  date,
  getBlogs,
  activeComment,
  setActiveComment 
}) => {
  const blog = useSelector((state) => state.blog.value)
  const createdAt = new Date(date).toLocaleDateString()
  const dispatch = useDispatch();
  const dataId = data.id;
  const isEditing =
  activeComment &&
  activeComment.type === 'editing' &&
  activeComment.id === data.id;

  const deleteBlog = async (blogId) => {
    try {
      if(window.confirm("Do you want to delete this Blog?")){
        await blogApi.delete(dataId, blogId)
        const newList = blog.filter((e) => e.id === blogId)
        dispatch(setBlogs(newList))
        getBlogs()
      }
    } catch (err) {
      alert(err)
    }
  };

  return (
    <>
      <Box className="comment">
        <Box className="comment-image-container">
          <Tooltip title="Profile Picture">
            <IconButton sx={{ p: 0, marginRight: 2 }}>
              <Avatar>{data.user.username.charAt(0)}</Avatar>
            </IconButton>
          </Tooltip>
        </Box>
        <Box className="comment-right-part">
          <Box className="comment-content">
            <Box className="comment-content">
              <Box className="comment-author">{data.user.username}</Box>
              <Box>{createdAt}</Box>
            </Box>
            <Box className="comment-content">
              <IconButton type="button" variant="outlined" color="error" onClick={deleteBlog}>
                <DeleteOutlinedIcon />
              </IconButton>
              <IconButton type="button" color="primary" onClick={() => {
                setActiveComment({id: data.id, type: 'editing'})
              }}>
                <EditIcon />
              </IconButton>
            </Box>
          </Box>
          {!isEditing && <Box className="comment-text">{parse(comment)}</Box>}
          {isEditing && (
                <CommentForm 
                submitLabel='Update' 
                hasCancelButton 
                dataId={dataId}
                getBlogs={getBlogs}
                initialText={comment}
                handleCancel={() => setActiveComment(null)}
                className="comment-edit"
                />
            )}
        </Box>
      </Box>
    </>
  )
}
