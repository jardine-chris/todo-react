import { useState } from "react";
import Trays from "./components/Trays";
import Button from "./components/Button";
import AddTray from "./components/AddTray";

function App() {
  const [showAddTray, setShowAddTray] = useState(false);

  const [trays, setTrays] = useState([
    {
      id: 1,
      title: "To Do",
    },
    {
      id: 2,
      title: "Doing",
    },
    {
      id: 3,
      title: "Done",
    },
  ]);

  // Add tray
  const addTray = (tray) => {
    const id = Math.floor(Math.random() * 1000 + 1);
    const newTray = { id, ...tray };
    setTrays([...trays, newTray]);
  };

  // Delete tray
  const deleteTray = (id) => {
    setTrays(trays.filter((tray) => tray.id !== id));
  };

  return (
    <div className="application">
      {/* Button to show the form to add a new tray. */}
      <Button className="nav-btn" text="Add Tray" onAdd={() => setShowAddTray(!showAddTray)} />
      {showAddTray && <AddTray onAdd={addTray} showForm={setShowAddTray} />}

      {/* Display all available trays. */}
      {trays.length > 0 ? (
        <Trays trays={trays} onDelete={deleteTray} />
      ) : (
        "No trays to show."
      )}
    </div>
  );
}

export default App;
