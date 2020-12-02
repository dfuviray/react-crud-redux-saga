import { connect } from "react-redux";
import "./modal.css";

const Modal = ({ onClose, open, data, deleteLocation }) => {
  const deleteData = (id) => {
    deleteLocation(id);
    onClose();
  };

  if (!open) return null;

  return (
    <div className="Modal">
      <div className="ModalHeader">
        <p>Delete Item</p>
        <button className="Close" onClick={onClose}>
          <i className="fa fa-close" aria-hidden="true"></i>
        </button>
      </div>
      <div className="ModalBody Delete">
        <h2 className="ModalTitle">Delete Item</h2>
        <p className="ModalDeleteMessage">
          Are you sure you want to delete <span>{data.location}</span>?
        </p>
        <button onClick={() => deleteData(data.id)}>Yes</button>
        <button onClick={onClose}>No</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteLocation: (id) =>
      dispatch({ type: "DELETE_LOCATIONS_REQUEST", id: id }),
  };
};

export default connect(null, mapDispatchToProps)(Modal);
