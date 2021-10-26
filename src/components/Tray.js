import { useState } from "react";
import Cards from "./Cards";
import Button from "./Button";
import AddCard from "./AddCard";

const Tray = ({ tray, onDelete }) => {
  const [showAddCard, setShowAddCard] = useState(false);
  const [cards, setCards] = useState("");

  const addCard = (card) => {
    const id = Math.floor(Math.random() * 1000 + 1);
    const newCard = { id, ...card };
    setCards([...cards, newCard]);
  };

  return (
    <div className="tray" onDoubleClick={() => onDelete(tray.id)}>
      {tray.title}

      {/* Display all available cards. */}
      {cards.length > 0 ? <Cards cards={cards} /> : "No cards to show."}

      <Button text="Add Card" onAdd={() => setShowAddCard(!showAddCard)} />
      {showAddCard && <AddCard onAdd={addCard} />}
    </div>
  );
};

export default Tray;
