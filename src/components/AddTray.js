import { useState, useCallback } from "react";

const AddTray = ({ onAdd, isOpen, setFade }) => {
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
      <label for="tray-title">Title</label>
      <input
        type="text"
        autoFocus="autofocus"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
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

export default AddTray;
