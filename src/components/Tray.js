const Tray = ({ tray, onDelete }) => {
  return <div className="tray" onDoubleClick={() => onDelete(tray.id)}>{tray.title}</div>;
};

export default Tray;
