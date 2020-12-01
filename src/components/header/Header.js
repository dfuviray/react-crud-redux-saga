import "./header.css";

const Header = ({ onOpen }) => {
  return (
    <div className="Header">
      <p>Locations</p>
      <button onClick={onOpen}>
        <i className="fa fa-plus" />
      </button>
    </div>
  );
};

export default Header;
