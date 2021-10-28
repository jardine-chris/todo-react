import { useState, useCallback } from "react";

const AddCard = ({ onAdd, isOpen, setFade }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert("Title is required.");
      return;
    }

    // Add the card with the specified props.
    onAdd({ title, content });

    // Reset the form field(s).
    setTitle("");
    setContent("");
  };

  const handleChange = useCallback(
    (event) => {
      setFade(false);
    },
    [setFade]
  );

  return (
    <form
      className={"form-control fade-in-down " + (!isOpen ? "" : "active")}
      onSubmit={onSubmit}
    >
      <label for="card-title">Title</label>
      <input
        type="text"
        autoFocus="autofocus"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label for="card-content">Content</label>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        class="add-btn"
        type="submit"
        value="Save"
        onClick={handleChange}
      />
    </form>
  );
};

export default AddCard;
