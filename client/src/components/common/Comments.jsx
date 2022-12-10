import React from "react"
import { useState, useEffect } from "react"
import { Box, Divider } from "@mui/material"
import { Comment } from "./Comment"
import { CommentForm } from "./CommentForm"
import blogApi from "../../api/blogApi"
import { setBlogs } from "../../redux/features/blogSlice"
import { useSelector, useDispatch } from "react-redux"
import "../../css/custom-blogs.css"

export const Comments = () => {
  const [info, setInfo] = useState([])
  const [activeComment, setActiveComment] = useState(null);
  const dispatch = useDispatch()
  const blog = useSelector((state) => state.blog.value)
  const getBlogs = async () => {
    try {
      const res = await blogApi.getAll()
      setInfo(res)
      dispatch(setBlogs(res))
      setActiveComment(null)
    } catch (err) {
      alert(err)
    }
  }
  
  useEffect(() => {
    getBlogs();
  },[dispatch])

  return (
    <Box className="comments">
      <CommentForm submitLabel="Submit" getBlogs={getBlogs}/>
      <Box className="comments-container">
        {blog.length > 0 &&
          blog.map((item, i) => (
            <Box key={i}>
              <Divider
                sx={{
                  marginBottom: 5
                }}
              />
              <Comment
                info={info}
                key={item.id}
                comment={item.content}
                date={item.date}
                data={item}
                currentUserId={item.user.id}
                getBlogs={getBlogs}
                activeComment={activeComment}
                setActiveComment={setActiveComment}
              />
              <Divider />
            </Box>
          ))}
      </Box>
    </Box>
  )
}
