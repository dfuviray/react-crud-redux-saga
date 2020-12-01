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
    </div>
  );
};

export default Modal;
