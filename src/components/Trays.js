import Tray from "./Tray";

const Trays = ({ trays, onDelete }) => {
  return (
    <>
      {trays.map((tray) => (
        <Tray key={tray.id} tray={tray} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Trays;
