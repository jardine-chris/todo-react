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

    showForm(false);
  };

  return (
    <form className="form-control" onSubmit={onSubmit}>
      <label for="card-title">What are you doing?</label>
      <input
        type="text"
        placeholder="Finish this project"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label for="card-content">How will you do it?</label>
      <input
        type="text"
        placeholder="Research how exactly a posi-trac rear end in a Plymouth works."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input type="submit" value="Add" />
    </form>
  );
};

export default AddCard;
