import { useState } from "react";
import Trays from "./components/Trays";
import Button from "./components/Button";
import AddTray from "./components/AddTray";
import { BiUpArrowCircle } from "react-icons/bi";
import { IconContext } from "react-icons/lib";

function App() {
  const [showAddTray, setShowAddTray] = useState(false);
  const [trays, setTrays] = useState([]);

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
      <Button text="Add Tray" onAdd={() => setShowAddTray(!showAddTray)} />
      {showAddTray && <AddTray onAdd={addTray} showForm={setShowAddTray} />}

      {/* Display all available trays. */}
      {trays.length > 0 ? (
        <Trays trays={trays} onDelete={deleteTray} />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IconContext.Provider value={{ size: '3em'}}>
          <BiUpArrowCircle />
          </IconContext.Provider>
          Add a tray to begin
        </div>
      )}
    </div>
  );
}

export default App;
