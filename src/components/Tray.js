import { useState } from "react";
import Cards from "./Cards";
import Button from "./Button";
import AddCard from "./AddCard";
import { BiDownArrowCircle } from "react-icons/bi";
import { IconContext } from "react-icons/lib";

const Tray = ({ tray, onDelete }) => {
  const [cards, setCards] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addCard = (card) => {
    const id = Math.floor(Math.random() * 1000 + 1);
    const newCard = { id, ...card };
    setCards([...cards, newCard]);
  };

  const toggleFade = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="tray" onDoubleClick={() => onDelete(tray.id)}>
      <h3>{tray.title}</h3>

      {/* Display all available cards. */}
      {cards.length > 0 ? (
        <Cards cards={cards} />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          Let's get productive!
          <IconContext.Provider value={{ size: "3em" }}>
            <BiDownArrowCircle />
          </IconContext.Provider>
        </div>
      )}

      <Button text="Add Card" onAdd={() => toggleFade()} />
      <div className="fade-container">
        <AddCard onAdd={addCard} isOpen={isOpen} setFade={setIsOpen} />
      </div>
    </div>
  );
};

export default Tray;
