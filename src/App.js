import { useState } from "react";
import Trays from "./components/Trays";

function App() {
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
  
  return (
    <div className="application">
      {trays.length > 0 ? <Trays trays={trays} /> : "No trays to show."}
    </div>
  );
}

export default App;
