import { useState } from "react";

const CommentForm = ({
  handleSubmit,
  submitLabel,
  handleCancel,
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText(""); // Clear the text area
  };

  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="comment-form-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br></br>
      <button className="comment-form-button" disabled={text.length === 0}>
        {submitLabel}
      </button>
      <button
        type="button"
        className="comment-form-button comment-form-cancel-button"
        onClick={() => {
          console.log("Cancel button clicked");
          handleCancel();
          setText(""); // Clear the text area
        }}
      >
        Cancel
      </button>
    </form>
  );
};

export default CommentForm;
