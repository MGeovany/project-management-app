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

export const Comment = ({ comment, data, date, currentUserId }) => {
  const user = useSelector((state) => state.user.value)
  const blog = useSelector((state) => state.blog.value)
  const createdAt = new Date(date).toLocaleDateString()
  const dispatch = useDispatch()

  const deleteBlog = async () => {
    try {
      await blogApi.delete()
      const newList = blog.filter((e) => e.id === data.id)
      dispatch(setBlogs(newList))
    } catch (err) {
      alert(err)
    }
  }
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
              <IconButton variant="outlined" color="error">
                {" "}
                {/*onClick={deleteBlog}*/}
                <DeleteOutlinedIcon />
              </IconButton>
              <IconButton color="primary">
                {" "}
                {/*onClick={'Delete'}/>*/}
                <EditIcon />
              </IconButton>
            </Box>
          </Box>
          <Box className="comment-text">{parse(comment)}</Box>
          {/* {isEditing && (
                <CommentForm 
                submitLabel='Update' 
                hasCancelButton 
                initialText={comment}
                handleSubmit={(text) => updateComment(text, comment.id)}
                handleCancel={() => setActiveComment(null)}
                className="comment-edit"
                />
            )} */}
        </Box>
      </Box>
    </>
  )
}
