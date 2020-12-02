import "./modal.css";

const Modal = ({ onClose, open }) => {
  if (!open) return null;
  return (
    <div className="Modal">
      <div className="ModalHeader">
        <p>Title</p>
        <button className="Close" onClick={onClose}>
          <i className="fa fa-close" aria-hidden="true"></i>
        </button>
      </div>
      <div className="ModalBody">
        <h2 className="ModalTitle">Add Form</h2>
        <form>
          <label for="location">Location</label>
          <input id="location" placeholder="Location" />
          <label for="description">Description</label>
          <input id="description" placeholder="Description" />
          <button className="Add">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
