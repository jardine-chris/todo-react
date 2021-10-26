import Tray from "./Tray";

const Trays = ({ trays }) => {
  return (
    <>
      {trays.map((tray) => (
        <Tray key={tray.id} tray={tray} />
      ))}
    </>
  );
};

export default Trays;
