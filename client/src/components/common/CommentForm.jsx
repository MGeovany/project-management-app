import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Box } from "@mui/material";
import blogApi from "../../api/blogApi";
import { setBlogs } from "../../redux/features/blogSlice";
import React from "react";
import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { createComment as createCommentApi } from "../../api/commentsApi";

export const CommentForm = ({
  submitLabel, 
  hasCancelButton = false, 
  initialText="", 
  handleCancel}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.value)
  const [backendBlogs, setBackendBlogs] = useState([]);
  const [text, setText] = useState(initialText);
  const timeout = 200;
  const isTextDisabled = text.length === 0;
  const editorWrapperRef = useRef();
  const modalStyle = {
    outline: "none",
    top: "50%",
    left: "50%",
    bgcolor: "background.paper",
    border: "0px solid #000",
    boxShadow: 24,
    p: 1
  };

  const addBlog = async () => {
    const variables = {
      content: text,
      userId: user._id
    }
    createCommentApi(variables).then((comment) => {
      setBackendBlogs([comment, ...backendBlogs]);
    })
    try {
      const res = await blogApi.create(variables);
      const newList = [res, ...backendBlogs];
      dispatch(setBlogs(newList));
    } catch (err) {
      alert(err);
    }
  };

  const updateEditorHeight = () => {
    setTimeout(() => {
      if (editorWrapperRef.current) {
        const box = editorWrapperRef.current;
        box.querySelector(".comment-editor").style.height =
          box.offsetHeight - 100 + "px";
      }
    }, timeout);
  };

  return (
    <Box style={modalStyle} className='comment-form-textarea'>
      <form>
        <Box className="comment-editor">
          <CKEditor
          editor={ClassicEditor}
          data={text}
          config={{placeholder: "Write Blog..."}}
          onChange={ ( event, editor ) => {
                          const data = editor.getData();
                          setText(data);
                      } }
          onFocus={updateEditorHeight}
          onBlur={updateEditorHeight}
          />
        </Box>
          <Box className="comment-button-cnt">
            <button 
            className="comment-form-button"
            disabled={isTextDisabled}
            onClick={addBlog}
            >
              {submitLabel}
            </button>
            {hasCancelButton && (<button 
              type="button"
              className="comment-form-button comment-form-cancel-button"
              onClick={handleCancel}
            >
              Cancel
            </button>)}
          </Box>
      </form>
    </Box>
  );
}