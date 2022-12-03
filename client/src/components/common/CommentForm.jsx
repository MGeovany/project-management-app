import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Box } from "@mui/material";
import React from "react";
import { useState, useRef } from 'react'

export const CommentForm = ({
  handleSubmit, 
  submitLabel, 
  hasCancelButton = false, 
  initialText="", 
  handleCancel}) => {
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

  const updateEditorHeight = () => {
    setTimeout(() => {
      if (editorWrapperRef.current) {
        const box = editorWrapperRef.current;
        box.querySelector(".comment-editor").style.height =
          box.offsetHeight - 100 + "px";
      }
    }, timeout);
  };

  const onSubmit = event => {
    event.preventDefault()
    handleSubmit(text)
    console.log(text);
    setText('')
  }
  return (
    <Box style={modalStyle} className='comment-form-textarea'>
      <form onSubmit={onSubmit}>
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