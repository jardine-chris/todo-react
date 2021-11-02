import { useState } from "react";
import Trays from "./components/Trays";
import Button from "./components/Button";
import AddTray from "./components/AddTray";
import { BiUpArrowCircle } from "react-icons/bi";
import { IconContext } from "react-icons/lib";

function App() {
  const [trays, setTrays] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleFade = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="application">
      {/* Button to show the form to add a new tray. */}
      <Button
        text="Add Tray"
        onAdd={() => {
          toggleFade();
        }}
      />

      <div className="fade-container">
        <AddTray onAdd={addTray} isOpen={isOpen} setFade={setIsOpen} />
      </div>

      {/* Display all available trays. */}
      <div className="tray-stuff">
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
            <IconContext.Provider value={{ size: "3em" }}>
              <BiUpArrowCircle />
            </IconContext.Provider>
            Add a tray to begin
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
