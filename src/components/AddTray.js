import { useState } from "react";

const AddTray = ({ onAdd, showForm }) => {
  const [title, setTitle] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert("Title is required.");
      return;
    }

    // Add the tray with the specified props.
    onAdd({ title });

    // Reset the form field(s).
    setTitle("");
    showForm(false);
  };

  return (
    <form className="form-control" onSubmit={onSubmit}>
      <label for="tray-title">Title</label>
      <input
        type="text"
        autoFocus="autofocus"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type="submit" value="Add" />
    </form>
  );
};

export default AddTray;
