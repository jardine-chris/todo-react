const Tray = ({ tray, onDelete }) => {
  return <div onDoubleClick={() => onDelete(tray.id)}>{tray.title}</div>;
};

export default Tray;
