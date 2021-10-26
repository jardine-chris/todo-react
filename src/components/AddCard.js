import { useState } from "react";

const AddCard = ({ onAdd, showForm }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert("Title is required.");
      return;
    }

    // Add the tray with the specified props.
    onAdd({ title, content });

    // Reset the form field(s).
    setTitle("");
    setContent("");

    {showForm(false)};
  };

  return (
    <form onSubmit={onSubmit}>
      <label for="card-title">Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label for="card-content">Content</label>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input type="submit" value="Add" />
    </form>
  );
};

export default AddCard;
