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
import blogApi from "../../api/blogApi";
import { setBlogs } from "../../redux/features/blogSlice";
import { useSelector, useDispatch } from "react-redux";
import '../../css/custom-blogs.css'

export const Comments = ({ currentUserId }) => {
    const [backendComments, setBackendComments] = useState([]);
    const [activeComment, setActiveComment] = useState(null)
    const dispatch = useDispatch();
    const blog = useSelector(state => state.blog.value)

    useEffect(() => {
      const getBlogs = async () => {
        try{
          const res = await blogApi.getAll();
          dispatch(setBlogs(res));
        } catch(err) {
          alert(err);
        }
      };
      getBlogs();
    }, [dispatch]);

    useEffect(() => {
        getCommentsApi().then((data) => {
            setBackendComments(data);
        })
    }, [])
  return (
    <Box className="comments">
        <CommentForm submitLabel="Submit"/>
        <Box className="comments-container">
            {blog.length > 0 && blog.map((item, i) => (
                <Box key={i}>
                  <Divider sx={{
                    marginBottom: 5,
                  }}/>
                  <Comment 
                  key={item.id}
                  comment={item.content} 
                  date={item.date}
                  data={item}
                  currentUserId={item.user.id}
                  />
                  <Divider/>
                </Box>
            ))}
        </Box>
    </Box>
  );
}
